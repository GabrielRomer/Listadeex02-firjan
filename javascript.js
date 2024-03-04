// 01

function exibirAlerta() {
  alert("Bem vindos meus amigos, tenham um ótimo dia!");
}

//02

function encontrarMaiorNumero() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    var maiorNumero = Math.max(num1, num2, num3);
    alert("O maior número é: " + maiorNumero);
  }
}

//03

function verificarIdade() {
  var idade = parseInt(document.getElementById("idade").value);

  if (!isNaN(idade)) {
    if (idade < 18) {
      document.getElementById("resultado").innerText = "Você é menor de idade.";
    } else {
      document.getElementById("resultado").innerText = "Você é maior de idade.";
    }
  }
}

//4

function calcularMedia() {
  var numero1 = parseFloat(document.getElementById("numero1").value);
  var numero2 = parseFloat(document.getElementById("numero2").value);
  var numero3 = parseFloat(document.getElementById("numero3").value);

  if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
    var media = (numero1 + numero2 + numero3) / 3;
    document.getElementById("resultado2").innerText =
      "A média é: " + media.toFixed(2);
  } else {
    document.getElementById("resultado2").innerText =
      "Por favor, digite números válidos.";
  }
}

//5
function verificarParOuImpar() {
  var numero = parseInt(document.getElementById("numero").value);

  if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      document.getElementById("resultado3").innerText =
        numero + " é um número PAR.";
    } else {
      document.getElementById("resultado3").innerText =
        numero + " é um número ÍMPAR.";
    }
  }
}

//6
function calcularReajuste() {
  var salario = parseFloat(document.getElementById("salario").value);

  if (!isNaN(salario)) {
    var percentualAumento, valorAumento, novoSalario;

    if (salario <= 280) {
      percentualAumento = 20;
    } else if (salario <= 700) {
      percentualAumento = 15;
    } else if (salario <= 1500) {
      percentualAumento = 10;
    } else {
      percentualAumento = 5;
    }

    valorAumento = (percentualAumento / 100) * salario;
    novoSalario = salario + valorAumento;

    var resultadoDiv = document.getElementById("resultado4");
    resultadoDiv.innerHTML =
      "Salário antes do reajuste: R$ " +
      salario.toFixed(2) +
      "<br>Percentual de aumento aplicado: " +
      percentualAumento +
      "%" +
      "<br>Valor do aumento: R$ " +
      valorAumento.toFixed(2) +
      "<br>Novo salário, após o aumento: R$ " +
      novoSalario.toFixed(2);
  } else {
    alert("Por favor, digite um salário válido.");
  }
}
