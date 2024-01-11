from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from task.forms import *


def home(request):
    return render(request, 'task/home.html')


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
            login(request, user)
            return redirect('/')
    else:
        form = CustomAuthenticationForm()
    return render(request, 'task/authentication.html', {'form': form})

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



