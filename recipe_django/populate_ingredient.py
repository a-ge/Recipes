import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'recipe_django.settings')

import django
django.setup()

import random
from recipe.models import Ingredient

ingredients = ['sugar', 'vanilla', 'flour', 'milk', 'oats', 'egg', ]

def populate_ingredients():
    for i_name in ingredients:

        i = Ingredient.objects.get_or_create(name=i_name)[0]
        i.save()

if __name__ == '__main__':
    print("Populating the database...Please Wait")
    populate_ingredients()
    print('Populating Complete')
