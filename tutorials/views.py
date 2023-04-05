from django.shortcuts import render
from tutorials.models import TutorialModel, TutorialCategory
from django.http import JsonResponse
from django.core import serializers


def TutorialView(request):
    tutorial = TutorialCategory.objects.all()
    data = serializers.serialize('json', tutorial)
    # print("data: ", data)
    return JsonResponse(data, safe=False)


def CatWiseTutorialView(request, id):
    cat = TutorialCategory.objects.get(id = id)
    tutorial = TutorialModel.objects.filter(cat = cat)
    print("Tutorials: ", tutorial)
    data = serializers.serialize('json', tutorial)
    # print("data: ", data)
    return JsonResponse(data, safe=False)



def ReadTutorial(request, title):
    try:
        # print("Some Title: ", title)
        blogs = TutorialModel.objects.get(title = title)
        # read = {'blogs':blogs}
        data = serializers.serialize('json', [blogs])
        # print("Some Blogs: ", blogs)
        return JsonResponse(data, safe=False)
    except TutorialModel.DoesNotExist:
        print("Title: ", title)
        return JsonResponse({'error': f'Tutorial with title {title} does not exist'}, status=404)