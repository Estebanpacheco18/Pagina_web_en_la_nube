from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'nube/home.html')