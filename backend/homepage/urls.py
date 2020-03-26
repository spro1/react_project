from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    path('rss', views.ListRss.as_view()),
    path('rss/<int:pk>/', views.SortRss.as_view()),
    path('rss/company', views.CompanyRss.as_view()),
    path('rss/news', views.NewsRss.as_view()),
]