from django.contrib import admin
from .models import City
from flowers.models import Flora
from nature.models import Nature


admin.site.register(City)
admin.site.register(Flora)
admin.site.register(Nature)
