from django.db import models
from ckeditor.fields import RichTextField

class Category(models.Model):
    name = models.CharField(max_length=150)
    desc = models.TextField(blank=True, null = True)
    # img = models.ImageField()

    def __str__(self):
        return self.name

class Blogs(models.Model):
    title = models.CharField(max_length=150)
    img = models.ImageField()
    pub_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    content = RichTextField()
    author= models.CharField(max_length=150, default="Coding India")
    readtime = models.IntegerField(default=10)
    tags = models.CharField(max_length=150, default="Coding India Blogs")

    def __str__(self):  
        return self.title