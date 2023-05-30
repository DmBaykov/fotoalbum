from django.shortcuts import render, get_object_or_404
from .models import City
from detalsity.models import Detalsity
from .templatetags import templatetags
from flowers.models import Flora
from nature.models import Nature


def home(request):
    citys = City.objects.all()
    return render(request, 'traveling/home.html', {'citys':citys})

def contakt(request):
    return render(request, 'traveling/contact.html')

def fotosity(request, city_id):
    city = get_object_or_404(City, pk=city_id)
    foto = Detalsity.objects.filter(owner_id=city_id)
    return render(request, 'traveling/fotosity.html', {'city':city, 'fotos':foto,})

def flowers(request):
    floras = Flora.objects.all()
    return render(request, 'flowers/blumen.html', {'floras':floras})

def nature(request):
    natures = Nature.objects.all()
    return render(request, 'nature/environment.html', {'natures':natures})

def contact(request):
    return render(request, 'traveling/contact.html')
