from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Donor
from .serializers import DonorSerializer


# Api overview route
@api_view(['GET'])
def apiOverView(request):
    api_urls = {
                'apiOverView'       :   '/',
                'List all donors'   :   '/getAll',
                'search for donors' :   '/search',
                'Become a donor'    :   '/donor'
    }
    return Response(api_urls)

# api list all donors route
@api_view(['GET'])
def DonorGetAll(request):
    DonorList =  Donor.objects.all()
    serializer  = DonorSerializer(DonorList,many=True)
    return Response(serializer.data)


# adding a new donor route
@api_view(['POST'])
def DonorAdd(request):

    serializer = DonorSerializer(data = request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"status":"Thank You For becoming A Donor"},status=201)
    
    return Response(serializer.errors,status=400)




