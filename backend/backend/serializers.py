from rest_framework import serializers
from django.contrib.auth.models import User

from backend.models import ProfileDetails

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']
    
    email = serializers.EmailField()
    username = serializers.CharField(max_length=100)

class ProfileDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileDetails
        fields = ['id', 'user', 'full_name', 'description', 'picture']
    
    user=UserSerializer()
    full_name = serializers.CharField(max_length=32)
    description = serializers.CharField(max_length=500)
    picture = serializers.URLField(max_length=512)

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        profile_details = ProfileDetails.objects.create(user=user, **validated_data)

        return profile_details

