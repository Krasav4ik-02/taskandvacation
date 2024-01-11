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

