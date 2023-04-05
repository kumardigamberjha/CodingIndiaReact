from rest_framework import serializers

from .models import React

class ReactSerializers(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = "__all__"