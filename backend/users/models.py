from django.db import models

class Usuario(models.Model):
    nome_completo = models.TextField(max_length=100)
    cpf = models.CharField(max_length=11)
    endereco = models.TextField(max_length=200)
    email = models.EmailField(unique=True)
    telefone = models.CharField(max_length=15)

    def __str__(self):
        return self.nome_completo

# Create your models here.
