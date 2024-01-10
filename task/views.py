import logging

from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from task.forms import *


def home(request):
    return render(request, 'task/home.html')

def registration(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Автоматически входить в систему после регистрации
            return redirect('/')  # Замените 'home' на URL вашей домашней страницы
        else:
            return render(request, 'task/registration.html', {'form': form})
    else:
        form = CustomUserCreationForm()
    return render(request, 'task/registration.html', {'form': form})

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

def registration_company(request):
    if request.method == 'POST':
        form = CompanyRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Redirect to your home page after registration
    else:
        form = CompanyRegistrationForm()
    return render(request, 'task/registration_company.html', {'form': form})

def authentication_company(request):
    if request.method == 'POST':
        form = CompanyAuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            company = authenticate(request, username=username, password=password)

            if company is not None:
                login(request, company)
                return redirect('home')  # Замените 'company_home' на URL вашей домашней страницы компании
            else:
                # Обработка ошибки аутентификации, например, вывод сообщения об ошибке
                return render(request, 'task/authentication_company.html', {'form': form, 'error_message': 'Invalid credentials'})
    else:
        form = CompanyAuthenticationForm()
    return render(request, 'task/authentication_company.html', {'form': form})



