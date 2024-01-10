# task/backends.py

from django.contrib.auth.backends import ModelBackend
from task.models import Company

class CompanyBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = Company.objects.get(username=username)
        except Company.DoesNotExist:
            return None

        if user.check_password(password):
            return user
        return None
