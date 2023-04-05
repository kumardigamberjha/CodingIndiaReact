from django.shortcuts import render

from rest_framework.views import APIView
from .models import React
from rest_framework.response import Response
from .serializers import ReactSerializers

def Index(request):
    context = {'user': request.user}
    return render(request, 'index.html', context)
