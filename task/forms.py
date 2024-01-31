from django import forms
from django.contrib.auth import authenticate
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from task.models import *


class CustomManagerCreationForm(UserCreationForm):
    exclude_company_identifier = False

    class Meta:
        model = Manager
        fields = [
            'username',
            'password1',
            'password2',
            'email',
            'first_name',
            'last_name',
            'name',
            'company_identifier',
        ]
        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'company_identifier': forms.TextInput(attrs={
                'class': 'form-control',  # Если нужно скрыть, замените на forms.HiddenInput()
                'style': "width: 200px",
            }),
        }

    def __init__(self, *args, **kwargs):
        self.exclude_company_identifier = kwargs.pop('exclude_company_identifier', False)
        super().__init__(*args, **kwargs)

        if self.exclude_company_identifier:
            self.fields.pop('company_identifier')
            self.exclude = ('company_identifier',)


class CustomDeveloperCreationForm(UserCreationForm):
    exclude_company_identifier = False

    class Meta:
        model = Manager
        fields = [
            'username',
            'password1',
            'password2',
            'email',
            'first_name',
            'last_name',
            'company_identifier',  # Предполагается, что это идентификатор компании
        ]
        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'company_identifier': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
        }
        required_fields = ['company_identifier']  # Поле 'company_identifier' считается обязательным

    def __init__(self, *args, **kwargs):
        self.exclude_company_identifier = kwargs.pop('exclude_company_identifier', False)
        super().__init__(*args, **kwargs)

        if self.exclude_company_identifier:
            if 'company_identifier' in self.fields:
                self.fields.pop('company_identifier')
                self.exclude = ('company_identifier',)

        # Установите атрибут 'required' для указанных полей
        for field_name in self.Meta.required_fields:
            if field_name in self.fields:
                self.fields[field_name].required = True

    def clean_name(self):
        # Получите значение 'name' из компании по идентификатору
        company_identifier = self.cleaned_data.get('company_identifier')
        company = Manager.objects.filter(company_identifier=company_identifier).first()
        if company:
            return company.name
        return None

class CustomAuthenticationForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}))

class UserEditForm(UserChangeForm):
    password = None

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name')
        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'email': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control',
                'style': "width: 200px",
            }),
        }
    def __init__(self, *args, **kwargs):
        super(UserEditForm, self).__init__(*args, **kwargs)

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['name_project', 'description_project', 'start_date', 'end_date']

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['name_task', 'description_task', 'difficulty_level', 'start_date', 'end_date', 'assigned_developer']
        widgets = {
            'start_date': forms.DateInput(attrs={
                'type': 'date',
            }),
            'end_date': forms.DateInput(attrs={
                'type': 'date',
            }),
        }

    def __init__(self, *args, **kwargs):
        super(TaskForm, self).__init__(*args, **kwargs)
        # Добавим виджет для отображения имен, фамилий и логинов разработчиков
        self.fields['assigned_developer'].queryset = Manager.objects.filter(status=1 ,company_identifier='e8bb86b9-bb42-4980-9f18-1610e2d56e5f')
        self.fields['assigned_developer'].label_from_instance = lambda obj: f"{obj.username} ({obj.first_name} {obj.last_name})"