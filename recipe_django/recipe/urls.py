from rest_framework import routers
from .api import IngredientViewSet

router = routers.DefaultRouter()
router.register('api/ingredients', IngredientViewSet, 'ingredients')

urlpatterns = router.urls
