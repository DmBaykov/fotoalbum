from django.shortcuts import render, get_object_or_404
from .models import Detalsity

def all_sity(request):
    detalsitys = Detalsity.objects.all()
    return render(request, 'detalsity/all_sity.html', {'detalsitys':detalsitys})

def detail(request, sity):
    detalsity = get_object_or_404(Detalsity, title=sity)
    return render(request, 'detalsity/detail.html', {'detalsitys':detalsity})
