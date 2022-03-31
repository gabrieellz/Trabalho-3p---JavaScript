var produto = "Tênis";
var quantidade = 17;
var precoEunidade = 20;
var total = quantidade * precoEunidade;
var totalpag = total - desconto;
var desconto = 72 * 0.03;

document.write("Produto: "+ produto);
document.write("<br>Quantidades: " + quantidade );
document.write("<br>Preço por unidade: " + precoEunidade);
document.write("<br>Total: " + total);
document.write("<br>Desconto: " + desconto);
document.write("<br>Total a pagar pós desconto: " + totalpag);

if (quantidade <=5) {
	document.write("<br>Seu desconto será de 2% pela compra de "+quantidade+" Tênis")
}else if (quantidade >5 && quantidade <=10) {
	document.write("<br>Seu desconto será de 3% pela compra de "+quantidade+" Tênis")
}else if (quantidade >10){
	document.write("<br>Seu desconto será de 5% pela compra de "+quantidade+" Tênis")
}