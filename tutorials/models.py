from django.db import models
from ckeditor.fields import RichTextField


class TutorialCategory(models.Model):
    name = models.CharField(max_length=150)
    img = models.ImageField()

    def __str__(self):
        return self.name
    


class TutorialModel(models.Model):
    title = models.CharField(max_length=150)
    content = RichTextField()
    cat = models.ForeignKey(TutorialCategory, on_delete=models.SET_NULL,null=True)
    written_by = models.CharField(default="Digamber Jha", max_length=50)

    def __str__(self):
        return self.title