from django.shortcuts import render
from rest_framework import viewsets
from .serializers import IngredientSerializer
from recipe.models import Ingredient

class IngredientView(viewsets.ModelViewSet):
      serializer_class = IngredientSerializer
      queryset = Ingredient.objects.all()


# def index(request):
#     ingredients_list = Ingredient.objects.all()
#     dict = {"items": ingredients_list}
#     return render(request, 'recipe/index.html', context=dict)
