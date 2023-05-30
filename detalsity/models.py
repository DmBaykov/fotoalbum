from django.db import models
from traveling.models import City

class Detalsity(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    owner = models.ForeignKey(City, on_delete=models.PROTECT, null=True)
    image = models.ImageField(upload_to='detalsity/image')

    def __str__(self):
        return self.title
