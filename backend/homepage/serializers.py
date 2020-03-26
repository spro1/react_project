from rest_framework import serializers
from .models import Post
from .models import Rss


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post


class RssSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'author',
            'title',
            'href',
            'category',
            'upload',
        )
        model = Rss
