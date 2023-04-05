from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from django.contrib import messages
from website.forms import CreateUserForm
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

######################## SignUp Views ##########################
@csrf_exempt
def Signup_view(request):
    form = CreateUserForm()
    data = ""
    if request.method=='POST':
        data = request.body.decode('utf-8')
        # print(data)
        json_data = json.loads(data)
        body_data = json.loads(json_data['body'])
        # print(body_data)
        name = body_data['name']
        username = body_data['username']
        email = body_data['email']
        password1 = body_data['password1']
        password2 = body_data['password2']

        # print("first_name", name)
        # print("username", username)
        form = CreateUserForm(request.POST)

        if not User.objects.filter(username=username).exists():
            user = User(first_name=name, email= email, username=username, password=make_password(password1))
            user.save()
            print("User Saved")

            user = authenticate(request, username= username, password=password1)

            if user is not None:
                login(request, user)
                request.session['user'] = username
                print("Login Done")
        else:
            response = JsonResponse({"error": "User Already Exists"})
            # response.status_code = 400 # Bad Request
            print("Error")
            return response

    return render(request, 'index.html', {'form':form})



######################## Login Views ##########################
@csrf_exempt
def Login_view(request):
    if request.method == "POST":
        data = request.body.decode('utf-8')
        print(data)
        json_data = json.loads(data)
        body_data = json.loads(json_data['body'])
        print(body_data)
        email = body_data['email']
        password = body_data['password']
        username = User.objects.get(email=email).username
        user = authenticate(request, username= username, password=password)

        if user is not None:
            login(request, user)
            request.session['user'] = username
            print("Login Done")
            # return redirect('/')
            messages.success(request, 'This is a success message')
            return JsonResponse({'messages': "Login Successfull"})
        else:
            response = JsonResponse({"error":"Form Not Saved"})
            response.status_code = 403
            return response

    return render(request, 'index.html')


######################## Logout Views ##########################
@login_required
def Logout_view(request):
    logout(request)
    return redirect('login')
