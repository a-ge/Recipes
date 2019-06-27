from django.shortcuts import render
from recipe.models import Ingredient

def index(request):
    ingredients_list = Ingredient.objects.all()
    dict = {"items": ingredients_list}
    return render(request, 'recipe/index.html', context=dict)
