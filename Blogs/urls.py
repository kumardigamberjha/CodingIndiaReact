from django.urls import path
from Blogs import views

urlpatterns = [
    path('', views.ShowBlogs, name="ShowBlogs"),
    path('HomePageBlogs/', views.ShowHomePageBlogs, name="ShowHomePageBlogs"),

    path('ReadBlog/<str:title>/', views.Readblog, name="ReadBlogs"),

]