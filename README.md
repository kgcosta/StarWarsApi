
# Star Wars Api

Esta API realiza o cadastro, lista, busca, remove os planetas, e mostra em quais filmes eles aparecem no Mundo de Star Wars. 

## Requisitos da API

**Planeta**
- Nome do planeta existente em Star Wars.
- Inserido no corpo da requisição.

**Clima**
- Qual é o clima do planeta no planeta inserido ou listado.
- Inserido no corpo da requisição.

**Terreno**
- Qual é o tipo de terreno do planeta inserido ou listado. 
- Inserido no corpo da requisição.

## Métodos
## Cadastrar Planeta

**Método**= POST </br>
**EndPoint**= http://localhost:3003/planet/  </br>

**Cadastro do Planeta** </br></br>
raw - (json) </br>
```json
{ 
    "Planeta": "Alderaan", 
    "Clima": "temperate", 
    "Terreno": "grasslands, mountains" 
}
```

**Retorno Sucesso** </br>
Cadastro realizado com sucesso.(O Mestre Yoda retorna):

Status: 201 Created

body - (json) </br>
```json
{ 
    "_id": "60a254032e1ff518a7079b59", 
    "Planeta": "Alderaan", 
    "Clima": "temperate", 
    "Terreno": "grasslands, mountains", 
    "Filmes":"2", 
    "__v": 0 
}
```


**Retorno Erro** </br>
Cadastro realizado em duplucidade.(O Mestre Yoda retorna): 

Status: 400 Bad Request

body - (json) </br>
```json
{
    "error_message": "Já existe o planeta, cadastrado não foi!"
}
```

**Retorno Erro** </br>
Erro ao realizar o cadastro.(O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
```json
{
    "error_message": "Cadastrar planeta, possível não foi!!"
}
```

## Listar Planetas

**Método**= GET </br>
**EndPoint**= http://localhost:3003/planets/ </br>

**Retorno Sucesso** </br>
Busca realizada com sucesso.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
```json
[
    {
        "_id": "60a138a438f8b23a1bbd8e6f",
        "Planeta": "Felucia",
        "Clima": "hot, humid",
        "Terreno": "fungus forests",
        "Filmes": "1",
        "__v": 0
    },
    {
        "_id": "60a254032e1ff518a7079b59",
        "Planeta": "Alderaan",
        "Clima": "temperate",
        "Terreno": "grasslands, mountains",
        "Filmes": "2",
        "__v": 0
    },
    {
        "_id": "60a25c7a000b221b817ff459",
        "Planeta": "Yavin IV",
        "Clima": "temperate, tropical",
        "Terreno": "jungle, rainforests",
        "Filmes": "1",
        "__v": 0
    }
] 
```

**Retorno Erro** </br>
Erro ao realizar a busca. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
```json
{
    "error_message": "Possível não foi, planeta achar!"
}
```

## Buscar Planeta Pelo ID

**Método**= GET </br>
**EndPoint**= http://localhost:3003/planet/id/60a25c7a000b221b817ff459 </br>

**Retorno Sucesso** </br>
Busca realizada com sucesso.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
```json
{ 
    "_id": "60a25c7a000b221b817ff459",
    "Planeta": "Yavin IV",
    "Clima": "temperate, tropical",
    "Terreno": "jungle, rainforests",
    "Filmes": "1",
    "__v": 0
}
```
 
**Retorno Erro** </br>
Erro ao realizar a busca. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
```json
{
    "error_message": "Possível não foi, planeta achar!"
}
```

## Buscar Planeta Pelo Nome

**Método**= GET </br>
**EndPoint**= http://localhost:3003/planet/name/Cato Neimoidia

**Retorno Sucesso** </br>
Busca realizada com sucesso.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
```json
{ 
    "_id": "60a260e1000b221b817ff45b", 
    "Planeta": "Cato Neimoidia", 
    "Clima": "temperate, moist", 
    "Terreno": "mountains, fields, forests, rock arches", 
    "Filmes": "1", 
    "__v": 0 
} 
```
 
**Retorno Erro** </br>
Erro ao realizar a busca. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
```json
{
    "error_message": "Possível não foi, planeta achar!"
}
```

## Deletar Planeta

**Método**= DELETE
**EndPoint**= http://localhost:3003/planet/name/Cato Neimoidia

**Retorno Sucesso** </br>
Sucesso ao deletear o planeta.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
```json
{
    "message": "Sucesso é. Deletado o planeta!"
}
```
 
**Retorno Erro** </br>
Erro ao deletar o planeta. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) 
```json
{
    "message": "Deletado não foi!"
}
```
