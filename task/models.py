from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
import uuid

class Manager(AbstractUser):
    ava_image = models.ImageField(upload_to='avatars/', default='avatars/default_avatar.png')
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

    def create_notification(self, message):
        Notification.objects.create(user=self.project.user, message=message)


@receiver(post_save, sender=Task)
def task_created_notification(sender, instance, created, **kwargs):
    if created:
        instance.create_notification(f"Создана новая задача: {instance.name_task}")
    elif instance.assigned_developer:
        instance.create_notification(f"Задача назначена вам: {instance.name_task}")


class Notification(models.Model):
    user = models.ForeignKey(Manager, on_delete=models.CASCADE)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message


