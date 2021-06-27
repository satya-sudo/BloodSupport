from django.urls import path
from . import views

urlpatterns = [
    path('',views.apiOverView,name="api-overview"),
    path('donor',views.DonorAdd,name="DonorAdd"),
    path('getall',views.DonorGetAll,name="DonorGetAll")

]