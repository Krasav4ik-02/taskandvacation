from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('home2', views.home, name='home2'),
    path('', views.authentication, name='home'),
    path('authentication', views.authentication, name='authentication'),
    path('registration', views.registration, name='registration'),
    path('logout', views.logout_view, name='logout'),
    path('cabinet/', views.cabinet, name='cabinet'),
    path('cabinet/edit/', views.edit_profile, name='edit_profile'),
    path('registration/manager/', views.registration_manager, name='registration_manager'),
    path('examplare', views.examplare, name='examplare'),
    path('create_project/', views.create_project, name='create_project'),
    path('company_dashboard/', views.company_dashboard, name='company_dashboard'),
    path('developer_dashboard/', views.developer_dashboard, name='developer_dashboard'),
    path('create_task/<int:project_id>/', views.create_task, name='create_task'),
    path('project_detail/<int:project_id>/', views.project_detail, name='project_detail'),
    path('task_detail/<int:task_id>/', views.task_detail, name='task_detail'),
    path('notifications/', views.notifications, name='notifications'),
    path('send_completed_task/<int:task_id>/', views.send_completed_task, name='send_completed_task'),
    path('view_completed_tasks/', views.view_completed_tasks, name='view_completed_tasks'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
