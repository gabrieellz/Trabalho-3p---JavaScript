let codigo = 100
let quantidade = 5
switch (codigo) {
    case 100:
        let cachorroquente = quantidade*1.70
        document.write("<br>O valor de seu(s) cachorro(s)-quente(s) é: R$ " + cachorroquente)
        break;
    case 101:
        let baurusimples = quantidade*2.30
        document.write(" <br>O valor de seu(s) bauru(s) simples é: R$ " + baurusimples)
        break;
    case 102:
        let bauruovo = quantidade*2.60
        document.write("<br>O valor de seu(s) bauru(s) com ovos é: R$ " + bauruovo)
        break;
    case 103:
        let hamburguer = quantidade*2.40
        document.write("<br>O valor de seu(s) hamburguer(s) é: R$ " + hamburguer)
        break;
    case 104:
        let cheeseburguer = quantidade*2.50
        document.write("<br>O valor de seu(s) cheeseburguer(s) é: R$ " + cheeseburguer)
        break;
    case 105:
        let refrigerante = quantidade*1.00
        document.write("<br><br>O valor de seu(s) refrigerante(s) é: R$ " + refrigerante)
        break;
}