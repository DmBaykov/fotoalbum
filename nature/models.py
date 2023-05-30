from django.db import models

class Nature(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='nature/images')
    url = models.URLField(blank=True)

    def __str__(self):
        return self.title
