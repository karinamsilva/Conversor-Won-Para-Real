var valorEmDolar = prompt("Qual o valor que deseja converter?")

var valorEmReal = parseFloat(valorEmDolar) * 5.50
alert("O valor convertido em R$ é: " + valorEmReal.toFixed(2))