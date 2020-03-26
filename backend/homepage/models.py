from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title


# Create your models here.
class Rss(models.Model):
    author = models.CharField(max_length=100)
    title = models.TextField()
    href = models.TextField()
    category = models.CharField(max_length=30)
    upload = models.DateTimeField()

