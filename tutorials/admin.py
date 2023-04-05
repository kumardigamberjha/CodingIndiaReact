from django.contrib import admin
from tutorials.models import TutorialCategory, TutorialModel

# Register your models here.
admin.site.register(TutorialModel)
admin.site.register(TutorialCategory)
