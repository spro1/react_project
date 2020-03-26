from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer

from .models import Rss
from .serializers import RssSerializer


class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ListRss(generics.ListCreateAPIView):
    queryset = Rss.objects.all().order_by('-upload')
    serializer_class = RssSerializer


class SortRss(generics.ListCreateAPIView):
    queryset = Rss.objects.all().order_by('-upload')
    serializer_class = RssSerializer


class CompanyRss(generics.ListCreateAPIView):
    queryset = Rss.objects.filter(category="기업 블로그").order_by('-upload')
    serializer_class = RssSerializer


class NewsRss(generics.ListCreateAPIView):
    queryset = Rss.objects.filter(category="IT NEWS").order_by('-upload')
    serializer_class = RssSerializer
