from .models import Ingredient
from rest_framework import viewsets, permissions
from .serializers import IngredientSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = IngredientSerializer
