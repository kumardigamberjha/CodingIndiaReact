from django.contrib import admin

from Blogs.models import Blogs, Category

admin.site.register(Category)
admin.site.register(Blogs)
