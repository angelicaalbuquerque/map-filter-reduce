let amigosFlavio = 
  [
    {"Nome":"Joãozinho","idade":10},
    {"Nome":"Mariazinha","idade":9},
    {"Nome":"Adamastor","idade":63},
    {"Nome":"Ariovaldo","idade":95},
    {"Nome":"Edivanilce","idade":50},
    {"Nome":"Otacílio","idade":35},
    {"Nome":"Cristiane","idade":23}
  ];

// 1 - Acrescentar o atributo "Sexo" em todos os objetos:
let definicaoSexo = amigosFlavio.map(function incluirSexo(item){
    if (item.Nome.substr(-1, 1) == "a" || item.Nome.substr(-1, 1) == "e") {
      item.sexo = 'Feminino'
    } else if (item.Nome.substr(-1, 1) == "o" || "r") {
      item.sexo = "Masculino"
    } else {
      item.sexo = "Não definido"
    }
    return {...item}
});

  console.log(definicaoSexo);

// 2 - Criar um novo array somente com pessoas abaixo de 30 anos:
function under30(validarIdade) {
  return validarIdade.idade <= 30
}

let menoresDe30 = amigosFlavio.filter(under30)

console.log(menoresDe30);

// 3 - Fazer a média das idades de todas as pessoas
let reducer = (acc, atual) => acc += atual.idade 

let menorQue30 = amigosFlavio.reduce(reducer, 0);

console.log(`A média das idades é: ${menorQue30 / amigosFlavio.length}`)
console.log(menorQue30)


// -----------------------------------------------

function ativarBotao() {
  const urlCats = "https://catfact.ninja/facts?limit=3&max_length=140";
  fetch(urlCats)
  .then(valorRetornado => {
    return valorRetornado.json();
  })
  .then(valorRetornado =>{
    console.log(valorRetornado);
    let spanFacts = document.getElementById('fatos');
    spanFacts.innerHTML = JSON.stringify(valorRetornado.data);
  })
}



