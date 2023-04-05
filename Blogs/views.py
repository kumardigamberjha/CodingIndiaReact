from django.shortcuts import render
from Blogs.models import Blogs
from django.core import serializers
from django.http import JsonResponse


def ShowBlogs(request):
    blogs = Blogs.objects.all()
    context = {'blogs': blogs}
    data = serializers.serialize('json', blogs)
    # print("data: ", data)
    return JsonResponse(data, safe=False)
    # return render(request, 'index.html', context)


def ShowHomePageBlogs(request):
    blogs = Blogs.objects.all()[:6]
    context = {'blogs': blogs}
    data = serializers.serialize('json', blogs)
    # print("data: ", data)
    return JsonResponse(data, safe=False)

def Readblog(request, title):
    try:
        # print("Some Title: ", title)
        blogs = Blogs.objects.get(title = title)
        print("Pub Date: ", blogs.pub_date)
        # read = {'blogs':blogs}
        data = serializers.serialize('json', [blogs])
        # print("Some Blogs: ", blogs)
        return JsonResponse(data, safe=False)
    except Blogs.DoesNotExist:
        print("Title: ", title)
        return JsonResponse({'error': f'Blog with title {title} does not exist'}, status=404)

    # return render(request, 'index.html', read)