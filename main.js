//Função que calcula a média de 4 notas
function mediaNotas(n1 = 5, n2 = 7, n3 = 9, n4 = 6)
{
    return (n1 + n2 + n3 + n4) / 4;
}
console.log (mediaNotas ())

//Função que converte de graus e Celsius para Fahrenheit
console.clear();
function convertGraus(c = 25)
{
    return (1.8 * c) + 32;
};
console.log(convertGraus());

//Alerta do botão
console.clear();
function alertCookie()
{
    alert('Você quer um cookie')
    console.log('Você quer um cookie')
};

//Alerta sucesso
console.clear();
const alertSucesso = () => 
{
    alert('Mensagem gerada com sucesso');
    console.log('Mensagem gerada com sucesso');
};

//Adicionando objeto Notebook
console.clear();
const notebook =
{
    Tipo: "Dell",
    Modelo: "Inspiron 15 3000",
    Ano:"2021",
    Cor:"Prata",
    Memoria:"8GB"
};
console.log(notebook);

//Calculo da conversão de anos para dias
console.clear();
function convertDias(an= 10, di = 365 )
{
    return an * di;
};
console.log (convertDias())