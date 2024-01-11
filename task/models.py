from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models


class MyUser(AbstractUser):
    company_identifier = models.CharField(max_length=20)
    status = models.IntegerField(choices=((1, 'Разработчик'),(2, 'Компания')), default=1)
    name_company = models.CharField(max_length=100)
#
# class Company(models.Model):
#     user = models.ForeignKey(MyUser)
#     company = models.ForeignKey()