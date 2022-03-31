let empregado = [ 22, 26, 30]
   let anonasc = 1972;
   let anoatual = 2022;
   let idade = anoatual - anonasc;
   let tempodetrabalho = idade - 36;

if(idade >= 62 && tempodetrabalho >=28){
 document.write("Empregado à: "+ empregado[2] + " anos<br>Idade: " + idade + " anos <br> Ingressou na empresa à: " + tempodetrabalho + " anos <br>Requer aposentadoria")
}else if (idade >= 65 || tempodetrabalho >= 30){
 document.write("Empregado à: "+ empregado[2] + " anos<br>Idade: " + idade + " anos <br> Ingressou na empresa à: " + tempodetrabalho + " anos <br>Requer aposentadoria")
}else {
 document.write("Empregado à: "+ empregado[2] + " anos<br>Idade: "  + idade + " anos <br> Ingressou na empresa à: " + tempodetrabalho + " anos <br>Não requer aposentadoria") 
}