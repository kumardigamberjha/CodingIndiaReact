from django.urls import path
from tutorials import views

urlpatterns = [
    path('', views.TutorialView, name="tutorials"),
    path('ReadTutorials/<str:title>/', views.ReadTutorial, name="readtutorials"),
    path('CatwiseTutorials/<int:id>/', views.CatWiseTutorialView, name="catwisetutorials"),


]