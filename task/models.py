from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
import uuid

class Manager(AbstractUser):
    name = models.CharField( verbose_name='Название Компании', max_length=255)
    def __str__(self):
        return self.name
    company_identifier = models.CharField(verbose_name='Идентификатор Компании', max_length=255)
    def __str__(self):
        return self.company_identifier
    status = models.IntegerField(choices=((1, 'Developer'),(2, 'Company')), default=1)

class Project(models.Model):
    user = models.ForeignKey(Manager, on_delete=models.CASCADE)
    name_project = models.CharField(verbose_name='Название проекта', max_length=255)
    description_project = models.CharField(verbose_name='Описание проекта', max_length=1000)
    start_date = models.DateField()
    end_date = models.DateField()


class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    assigned_developer = models.ForeignKey(Manager, on_delete=models.SET_NULL, null=True, blank=True)
    name_task = models.CharField(verbose_name='Название задачи', max_length=255)
    description_task = models.CharField(verbose_name='Описание задачи', max_length=1000)
    difficulty_level = models.IntegerField(choices=((1, 'Легкий'),(2, 'Средний'), (3, 'Сложный')), default=1)
    start_date = models.DateField()
    end_date = models.DateField()


