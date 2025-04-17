from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, criar_usuario

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cadastro/', criar_usuario, name="cadastro_usuario"),
]