from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from backend.serializers import ProfileDetailsSerializer

from backend.models import ProfileDetails

@api_view(['GET'])
def send_user_data(request, id):
    user = User.objects.get(id=id)
    profile_details = ProfileDetails.objects.filter(user_id=user.id).first()
    return Response({
        "username": user.username,
        "email": user.email,
        "full_name": profile_details.full_name,
        "description": profile_details.description,
        "picture": profile_details.picture,
    })

@api_view(['GET'])
def get_users_by_username(request, username):
    if not username:
        return Response(status=400)
    users = User.objects.filter(username__icontains=username)
    return Response({
        "data": [
            {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            }
            for user in users
        ]
    })

@api_view(['POST'])
def create_user_profile(request):
    data = request.data
    if data:
        serializer = ProfileDetailsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=200)
        else:
            return Response(status=400)
    return Response(status=500)
