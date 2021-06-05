//alert("Primeiro Alerta")


//function funcao()
//{
  // alert("Segundo Alerta");
//}
//<input type="button" onclick="funcao()" value="Exibir Alerta" />
var numero1 = prompt("Primeiro Número", "");
var numero2 = prompt("Segundo Número", "");
var numero3 = prompt("Terceiro Número", "");
if (numero1 > numero2 && numero1 > numero3  )
 mensagem = "Primeiro Número é o maior!";
else if  (numero2 > numero1 && numero2 > numero3)
 mensagem = "Segundo Número é o maior!";
else if ( numero3 > numero1 && numero3 > numero2)
 mensagem = "Terceiro Número é o maior!";
else mensagem = "Os Números são iguais ou Não foi informado";
alert(mensagem)
