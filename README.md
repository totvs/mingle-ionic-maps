# Exemplo de uso do Mingle com Ionic utilizando o serviço do Google Maps

## O que é Mingle?

O Mingle é o middleware mobile da TOTVS que permite a utilização das APIs dos produtos TOTVS com aplicativos mobile sem a necessidade de exposição do backend dos clientes.

## Como usar?

Verifique a documentação em *https://www.npmjs.com/package/@totvs/mobile-mingle*


# Passos para uso do serviço de mapas

Inclua a seguinte tag `script` no `index.html` para carregar os arquivos `javascript` do serviço de mapa do google a partir do Mingle:

```
<script src="http://hom-mingle.totvs.com.br/api/api/v1/services/maps/gmaps?appId=<APP_ID>"></script>
```

Com isso, toda a biblioteca de mapas do google será carregada no aplicativo, e poderá ser usada seguindo a seguinte documentação:

*https://developers.google.com/maps/documentation/javascript/tutorial*
