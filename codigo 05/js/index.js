var numero = 7;

if(numero == 1){
	document.write("Alimento não-perecível");
}else if((numero >=2) && (numero <= 4)){
	document.write("Alimento perecível");
}else if((numero >=5) && (numero <= 6)){
	document.write("Vestuário");
}else if(numero ==7){
	document.write("Higiene Pessoal");
}else if((numero >=8) && (numero <= 15)){
	document.write("Limpeza e Utensílios Domésticos")
}else{
	document.write("Código inválido")
}