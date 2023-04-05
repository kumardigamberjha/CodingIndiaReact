from django.urls import path
from website import views

urlpatterns = [
    path('', views.Index, name="index"),
    
]