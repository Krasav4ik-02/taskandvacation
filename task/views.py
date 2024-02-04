from datetime import datetime, timedelta

from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.db.models import Count
from django.http import HttpResponseForbidden
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import DetailView
from django.views.generic.detail import SingleObjectMixin
from datetime import date
from task.forms import *
from .models import Notification


def home(request):
    return render(request, 'task/home2.html')

def examplare(request):
    return render(request, 'task/examplare.html')

def registration(request):
    if request.method == 'POST':
        form = CustomDeveloperCreationForm(request.POST)
        if form.is_valid():
            developer = form.save(commit=False)
            developer.status = 1  # Устанавливаем статус "Разработчик"

            if developer.status == 1:  # Если статус "Разработчик"
                similar_companies = Manager.objects.filter(company_identifier__iexact=developer.company_identifier)
                if similar_companies.exists():
                    company = similar_companies.first()
                    developer.name = company.name  # Устанавливаем name
                    developer.save()
                else:
                    messages.error(request, 'Нет похожих компаний. Напишите правильный идентификатор.')
                    return render(request, 'task/registration.html', {'form': form})
            login(request, developer)
            return redirect('/')
        else:
            print("Form is not valid. Errors:", form.errors)
    else:
        form = CustomDeveloperCreationForm()
    return render(request, 'task/registration.html', {'form': form})


def registration_manager(request):
    if request.method == 'POST':
        form = CustomManagerCreationForm(request.POST, exclude_company_identifier=True)
        if form.is_valid():
            manager = form.save(commit=False)
            manager.status = 2  # Устанавливаем статус "Компания"
            manager.company_identifier = str(uuid.uuid4())
            manager.save()
            login(request, manager)
            print("Manager saved successfully.")
            return redirect('/')
        else:
            print("Form is not valid. Errors:", form.errors)
    else:
        form = CustomManagerCreationForm(exclude_company_identifier=True)
    return render(request, 'task/registration_manager.html', {'form': form})


def authentication(request):
    if request.method == 'POST':
        form = CustomAuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            if user.status == 2:
                login(request, user)
                return redirect('company_dashboard')
            if user.status == 1:
                login(request, user)
                return redirect('developer_dashboard')
    else:
        form = CustomAuthenticationForm()
    return render(request, 'task/home.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('/')

@login_required
def cabinet(request):
    user = request.user  # Получить текущего пользователя
    return render(request, 'task/cabinet.html', {'user': user,})

@login_required
def edit_profile(request):
    user = request.user

    if request.method == 'POST':
        form = UserEditForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('cabinet')

    else:
        form = UserEditForm(instance=user)

    return render(request, 'task/edit_profile.html', {'form': form})

@login_required
def create_project(request):
    if request.user.status == 2:  # Проверка статуса "Company"
        if request.method == 'POST':
            form = ProjectForm(request.POST)
            if form.is_valid():
                project = form.save(commit=False)
                project.user = request.user
                project.save()
                return redirect('company_dashboard')
        else:
            form = ProjectForm()

        return render(request, 'task/create_project.html', {'form': form})
    else:
        # Обработка случая, когда пользователь не является компанией
        return redirect('developer_dashboard')  # Подстройте имя URL для разработчиков

@login_required
def create_task(request, project_id):
    project = get_object_or_404(Project, id=project_id, user=request.user)
    company_identifier = request.user.company_identifier  # Assuming the company identifier is stored in the user object
    if request.method == 'POST':
        form = TaskForm(request.POST, company_identifier=company_identifier)
        if form.is_valid():
            task = form.save(commit=False)
            task.project = project
            task.save()
            return redirect('company_dashboard')
    else:
        form = TaskForm(company_identifier=company_identifier)

    return render(request, 'task/create_task.html', {'form': form, 'project': project})

@login_required
def company_dashboard(request):
    user = request.user
    projects = Project.objects.filter(user=user)

    active_projects = []
    expiring_projects = []
    overdue_projects = []

    for project in projects:
        today = date.today()
        if project.end_date < today:
            project.status = 'overdue'
            overdue_projects.append(project)
        elif (project.end_date - today).days >= 4:
            project.status = 'active'
            active_projects.append(project)
        else:
            project.status = 'expiring'
            expiring_projects.append(project)

    return render(request, 'task/company_dashboard.html', {'active_projects': active_projects,
                                                           'expiring_projects': expiring_projects,
                                                           'overdue_projects': overdue_projects})

@login_required
def developer_dashboard(request):
    tasks = Task.objects.filter(assigned_developer=request.user)
    return render(request, 'task/developer_dashboard.html', {'tasks': tasks})

@login_required
def project_detail(request, project_id):
    project = get_object_or_404(Project, id=project_id, user=request.user)
    return render(request, 'task/project_detail.html', {'project': project})

@login_required
def task_detail(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    user = request.user

    # Проверяем, является ли текущий пользователь разработчиком или компанией
    if user.status == 1 and task.assigned_developer == user:
        # Если пользователь - разработчик и это его задача
        return render(request, 'task/task_detail.html', {'task': task})
    elif user.status == 2 and task.project.user == user:
        # Если пользователь - компания и задача связана с ее проектом
        return render(request, 'task/task_detail.html', {'task': task})
    else:
        # В противном случае, если пользователь не имеет доступа, можно
        # либо показать ошибку, либо перенаправить на другую страницу
        return HttpResponseForbidden("У вас нет прав для просмотра этой задачи")


def notifications(request):
    # Получаем все уведомления, отсортированные по времени добавления
    notifications = Notification.objects.all().order_by('-timestamp')

    # Помечаем все уведомления как прочитанные (по желанию)
    # notifications.update(is_read=True)

    return render(request, 'task/notifications.html', {'notifications': notifications})