from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Donor
from .serializers import DonorSerializer

@api_view(['GET'])
def apiOverView(request):
    api_urls = {
                'apiOverView'       :   '/',
                'search for donors' :   '/search',
                'Become a donor'    :   '/donor'
    }
    return Response(api_urls)

@api_view(['POST'])
def DonorAdd(request):
    serializer = DonorSerializer(data = request.data)
    # custom validation logic to be added here
    
    if serializer.is_valid():
        serializer.save()
    
    # custom response to be added here
    return Response(serializer.data)




