from django.conf.urls import url
from .views import Members as members
from .views import Member as member
from django.urls import path, include
urlpatterns = [
    url('register', members.as_view()),
    path('<int:pk>/', member.as_view()),
]