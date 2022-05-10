// var resultado;
// var sinais = ["+", "-", "*", "/", "."];
// var parenteses = ["(", ")"];
// function inserir(numero) {
//   resultado = document.getElementById("res").innerHTML;
//   if (
//     (sinais.includes(numero) && sinais.includes(resultado.slice(-1))) ||
//     (parenteses.includes(numero) && parenteses.includes(resultado.slice(-1)))
//   ) {
//     console.log("Sinal novamente");
//   } else {
//     var numeroAntigo = document.getElementById("res").innerHTML;

//     document.getElementById("res").innerHTML = resultado + numero;
//   }
// }

// function calcular() {
//   resultado = document.getElementById("res").innerHTML;
//   if (resultado == undefined) {
//     resultado.innerHTML = "?";
//   } else {
//     if (sinais.includes(resultado.slice(-1))) {
//       console.log("Terminou em sinal");
//     } else {
//       res.innerHTML = eval(document.getElementById("res").innerHTML);
//     }
//   }
// }

// function limpar() {
//   document.getElementById("res").innerHTML = "";
// }

// // function back() {
// //   resultado = document.getElementById("res").innerHTML;
// //   res.innerHTML = resultado.substring(0, resultado.length - 1);
// // }

//CALCULADORA CIENTÍFICA
var resultado2;
var sinaisOperações = ["+", "-", "*", "/", "%", ".", "(", ")"];
var parenteses = [];

function inserir(numero) {
  resultado = document.getElementById("res").innerHTML;
  if (
    (sinais.includes(numero) && sinais.includes(resultado.slice(-1))) ||
    (parenteses.includes(numero) && parenteses.includes(resultado.slice(-1)))
  ) {
    console.log("Sinal novamente");
  } else {
    var numeroAntigo = document.getElementById("res").innerHTML;

    document.getElementById("res").innerHTML = resultado + numero;
  }
}

function inserir2(numero2) {
  resultado2 = document.getElementById("res2").innerHTML;
    if (
      (sinaisOperações.includes(numero2) &&
        sinaisOperações.includes(resultado2.slice(-1))) //ver se o penúltimo dígito é um sinal
    ) {
      console.log("Sinal novamente");
    } else {
      var numeroAntigo2 = document.getElementById("res2").innerHTML;
      if (numero2 == "Math.PI") {
        if (sinaisOperações.includes(resultado2.slice(-1))) {
          document.getElementById("res2").innerHTML = resultado2 + Math.PI;
        } else {
          document.getElementById("res2").innerHTML = Math.PI;
        }
      } else if (numero2 == "Math.E") {
        if (sinaisOperações.includes(resultado2.slice(-1))) {
          document.getElementById("res2").innerHTML = resultado2 + Math.E;
        } else {
          document.getElementById("res2").innerHTML = Math.E;
        }
      } else {
        document.getElementById("res2").innerHTML = resultado2 + numero2;
      }
      resultado2 = document.getElementById("res2").innerHTML;
    }
}

function calcular2() {
  resultado2 = document.getElementById("res2").innerHTML;
  if (sinaisOperações.includes(resultado2.slice(-1))) {
    //Verifica se terminou em sinal
    console.log("terminou em sinal");
  } else {
    res2.innerHTML = eval(document.getElementById("res2").innerHTML);
  }
}

function calcularSen() {
  resultado2 = document.getElementById("res2").innerHTML;
  res2.innerHTML = Math.sin((resultado2 * Math.PI) / 180).toFixed(4);
}

function calcularCos() {
  resultado2 = document.getElementById("res2").innerHTML;
  res2.innerHTML = Math.cos((resultado2 * Math.PI) / 180).toFixed(4);
}

function calcularTg() {
  resultado2 = document.getElementById("res2").innerHTML;
  res2.innerHTML = Math.tan((resultado2 * Math.PI) / 180).toFixed(4);
}

function calcularFatorial() {
  resultado2 = document.getElementById("res2").innerHTML;
  for (var i = resultado2 - 1; i > 1; i--) {
    resultado2 *= i;
  }
  res2.innerHTML = resultado2;
}

function calcularLog() {
  resultado2 = document.getElementById("res2").innerHTML;
  res2.innerHTML = Math.log10(resultado2);
}

function calcularLn() {
  resultado2 = document.getElementById("res2").innerHTML;
  res2.innerHTML = Math.log(resultado2);
}
function limpar2() {
  document.getElementById("res2").innerHTML = "";
}
function back2() {
  resultado2 = document.getElementById("res2").innerHTML;
  res2.innerHTML = resultado2.substring(0, resultado2.length - 1);
}

// function verificarSeTemErro() {
//   if (isNaN(resultado2)) {
//     res2.innerHTML = "F";
//   } else {
//     res2.innerHTML = resultado2;
//   }
// }
