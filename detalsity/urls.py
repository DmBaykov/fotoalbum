from django.urls import path
from . import views

app_name = 'detalsity'

urlpatterns = [
    path('', views.all_sity, name='all_sity'),
    path('detalsity', views.detail, name='detail'),
]
