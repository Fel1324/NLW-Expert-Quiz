const perguntas = [
  {
    pergunta: "Qual palavra-chave é usada para declarar uma constante em JavaScript?",
    respostas: [
      "var",
      "let",
      "const",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: [
      "=",
      "==",
      ":=",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a sintaxe correta para um comentário de uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
    respostas: [
      "log()",
      "print()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador para verificar igualdade em valor e tipo em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    respostas: [
      "parseInt()",
      "parseFloat()",
      "toInteger()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual função JavaScript é usada para selecionar elementos HTML?",
    respostas: [
      "getElementById()",
      "selectElement()",
      "queryElement()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "append()",
      "add()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "remove()",
      "pop()",
      "delete()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função JavaScript é usada para converter um número em uma string?",
    respostas: [
      "toString()",
      "stringify()",
      "convertToString()",
    ],
    correta: 0
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;

for(const item of perguntas){
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute("name", `pergunta-${perguntas.indexOf(item)}`);
    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if(estaCorreta){
        corretas.add(item);
      }
      mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();
  quiz.appendChild(quizItem);
}
