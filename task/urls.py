from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('authentication', views.authentication, name='authentication'),
    path('registration', views.registration, name='registration'),
    path('logout', views.logout_view, name='logout'),
    path('cabinet/', views.cabinet, name='cabinet'),
    path('cabinet/edit/', views.edit_profile, name='edit_profile'),
    path('registration/company', views.registration_company, name='registration_company'),
    path('authentication/company', views.authentication_company, name='authentication_company'),
]
