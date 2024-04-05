from django.contrib.auth.models import User
from django.db import models

class ProfileDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=32)
    description = models.CharField(max_length=500)
    picture = models.URLField(max_length=512)
