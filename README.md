# Hqlik

### Docs

1. 

### Routes


1. **[Post]** -> "/quality" , View treatments for the columns provided by the database; 


#### Exemple:

* Using Heroku

1. https://hqlik.herokuapp.com/quality **(post)**

#### Req.json()

```
  "table":"TableA",
	"temp": 1,
	"columns":"CODMOVIMENTO,CODPEDIDOWEB  ,TIPOMOVIMENTO",
	"activityFrom":"Extração",
	"activityStore":"HQ",
	"from":"lib://DataSource",
	"store":"lib://DataSource"
 ```
 
 #### Res.json(data)
 
```
{
  "countColumns": 3,
  "descriptive": "IF(ISNULL(CODMOVIMENTO) OR LEN(TRIM(CODMOVIMENTO)) = 0, '*NÃO PREENCHIDO*', TRIM(CODMOVIMENTO)) as CODMOVIMENTO,IF(ISNULL(CODPEDIDOWEB) OR LEN(TRIM(CODPEDIDOWEB)) = 0, '*NÃO PREENCHIDO*', TRIM(CODPEDIDOWEB)) as CODPEDIDOWEB,IF(ISNULL(TIPOMOVIMENTO) OR LEN(TRIM(TIPOMOVIMENTO)) = 0, '*NÃO PREENCHIDO*', TRIM(TIPOMOVIMENTO)) as TIPOMOVIMENTO",
  "details": [
    {
      "column": "CODMOVIMENTO",
      "descriptive": "IF(ISNULL(CODMOVIMENTO) OR LEN(TRIM(CODMOVIMENTO)) = 0, '*NÃO PREENCHIDO*', TRIM(CODMOVIMENTO)) as CODMOVIMENTO"
    },
    {
      "column": "CODPEDIDOWEB",
      "descriptive": "IF(ISNULL(CODPEDIDOWEB) OR LEN(TRIM(CODPEDIDOWEB)) = 0, '*NÃO PREENCHIDO*', TRIM(CODPEDIDOWEB)) as CODPEDIDOWEB"
    },
    {
      "column": "TIPOMOVIMENTO",
      "descriptive": "IF(ISNULL(TIPOMOVIMENTO) OR LEN(TRIM(TIPOMOVIMENTO)) = 0, '*NÃO PREENCHIDO*', TRIM(TIPOMOVIMENTO)) as TIPOMOVIMENTO"
    }
  ],
  "repetitions": []
}
 ```
