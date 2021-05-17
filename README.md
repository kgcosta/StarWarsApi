
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
Cadastrado com sucesso, o planeta foi!

```json
{ 
_id: 60a254032e1ff518a7079b59, </br>
Planeta: 'Alderaan', </br>
Clima: 'temperate', </br>
Terreno: 'grasslands, mountains', </br>
Filmes: '2', </br>
__v: 0 
}
```

**Retorno Erro** </br>
Cadastro realizado em duplucidade.(O Mestre Yoda retorna): 

Status: 400 Bad Request

body - (json) </br>
Já existe o planeta, cadastrado não foi!

**Retorno Erro** </br>
Erro ao realizar o cadastro.(O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
Cadastrar planeta, possível não foi!!

## Listar Planetas

**Método**= GET </br>
**EndPoint**= http://localhost:3003/planets/ </br>

**Retorno Sucesso** </br>
Busca realizada com sucesso.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
[</br>
    {
        "_id": "60a138a438f8b23a1bbd8e6f",</br>
        "Planeta": "Felucia",</br>
        "Clima": "hot, humid",</br>
        "Terreno": "fungus forests",</br>
        "Filmes": "1",</br>
        "__v": 0</br>
    },</br>
    {</br>
        "_id": "60a254032e1ff518a7079b59",</br>
        "Planeta": "Alderaan",</br>
        "Clima": "temperate",</br>
        "Terreno": "grasslands, mountains",</br>
        "Filmes": "2",</br>
        "__v": 0</br>
    },</br>
    {</br>
        "_id": "60a25c7a000b221b817ff459",</br>
        "Planeta": "Yavin IV",</br>
        "Clima": "temperate, tropical",</br>
        "Terreno": "jungle, rainforests",</br>
        "Filmes": "1",</br>
        "__v": 0</br>
    }</br>
] </br> 

**Retorno Erro** </br>
Erro ao realizar a busca. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
Possível não foi, planeta achar!

## Buscar Planeta Pelo ID

**Método**= GET </br>
**EndPoint**= http://localhost:3003/planet/id/60a25c7a000b221b817ff459 </br>

**Retorno Sucesso** </br>
Busca realizada com sucesso.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
{ </br>
        "_id": "60a25c7a000b221b817ff459",</br>
        "Planeta": "Yavin IV",</br>
        "Clima": "temperate, tropical",</br>
        "Terreno": "jungle, rainforests",</br>
        "Filmes": "1",</br>
        "__v": 0</br>
}
 
**Retorno Erro** </br>
Erro ao realizar a busca. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
Possível não foi, planeta achar!


## Buscar Planeta Pelo Nome

**Método**= GET </br>
**EndPoint**= http://localhost:3003/planet/name/Cato Neimoidia

**Retorno Sucesso** </br>
Busca realizada com sucesso.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
{ </br>
    "_id": "60a260e1000b221b817ff45b", </br>
    "Planeta": "Cato Neimoidia", </br>
    "Clima": "temperate, moist", </br>
    "Terreno": "mountains, fields, forests, rock arches", </br>
    "Filmes": "1", </br>
    "__v": 0 </br>
} </br> 
 
**Retorno Erro** </br>
Erro ao realizar a busca. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
Possível não foi, planeta achar!

## Deletar Planeta

**Método**= DELETE
**EndPoint**= http://localhost:3003/planet/name/Cato Neimoidia

**Retorno Sucesso** </br>
Sucesso ao deletear o planeta.(O Mestre Yoda retorna):

Status: 200 Ok

body - (json) </br>
"Sucesso é. Deletado o planeta!"

 
**Retorno Erro** </br>
Erro ao deletar o planeta. (O Mestre Yoda retorna):

Status: 500 Internal Server Error

body - (json) </br>
Deletado não foi!
