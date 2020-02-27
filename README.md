# Projeto previsão do tempo

[DEMO](https://angeloprevisaodotempo.surge.sh/)

-   [x] Implementar a interface da aplicação utilizando React;
-   [x] Utilizar a estrutura Redux-Saga para chamadas à API;
-   [x] Publicar o aplicativo no GitHub e enviar o link do repositório;
-   [x] Publicar quaisquer artefatos que você tenha utilizado na implementação deste teste (Postman Collection, features de testes, etc);
-   [x] Você pode utilizar quaisquer dependências que você tenha conhecimento. Detalhar no README a razão pela qual optou por utilizar a dependência (seja por preferência, conhecimento prévio, etc);
-   [x] Efetuar o cadastro e utilizar a API de previsão de 5 dias do site https://openweathermap.org;

## Dependências

-   moment.js, usada para manipulação de datas e horas e realizar parses entre timezones;
-   xml2js, inicialmente a integração da api estava sendo através de JSON, porém foi percebido que alguns dados que existiam na interface não eram fornecidos pela api no modo json, apenas no modo XML, essas propriedades eram: 'wind direction name' e 'wind direction code'. Em consequência disso foi substituído o 'switch/case' que fazia a verificação para a correta exibição das figuras, essa verificação utilizava a propriedade 'weather description', mas no modo XML, essa não existia, então foi necessário utilizar os codigos do clima (weather) em um 'if';
-   reactotron-redux, reactotron-react-js, debug do estado da aplicação.
-   axios, realizar chamadas a api;
-   eslint-\*, prettier, bibliotecas de padronização de código.
-   react-toastify, fornece toasts prontos que foram utilizados para exibir um alerta de erro quando não foi encontrada nenhuma cidade na busca

## Artefatos

-   Arquivo do insomnia: Insomnia_2020-02-27.json. Contém as requisições utilizadas durante o desenvolvimento;

### Observações

-   Não foi possível seguir a risca o design. A api sugerida só dava direito a previsão dos 5 dias;

-   Ícones. Não foi possível cobrir todas as possibilidades de climas com os 4 ícones fornecidos: cloud, rain, thunderstorm and clear. Seria necessários pelo menos 9 ícones de acordo com a api.
