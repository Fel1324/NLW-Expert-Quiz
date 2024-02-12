const perguntas = [
  {
    id: 1,
    pergunta: "Qual palavra-chave é usada para declarar uma constante em JavaScript?",
    respostas: [
      "var",
      "let",
      "const",
    ],
    correta: 2
  },
  {
    id: 2,
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: [
      "=",
      "==",
      ":=",
    ],
    correta: 0
  },
  {
    id: 3,
    pergunta: "Qual é a sintaxe correta para um comentário de uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correta: 0
  },
  {
    id: 4,
    pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
    respostas: [
      "log()",
      "print()",
      "console.log()",
    ],
    correta: 2
  },
  {
    id: 5,
    pergunta: "Qual é o operador para verificar igualdade em valor e tipo em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    id: 6,
    pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    respostas: [
      "parseInt()",
      "parseFloat()",
      "toInteger()",
    ],
    correta: 0
  },
  {
    id: 7,
    pergunta: "Qual função JavaScript é usada para selecionar elementos HTML?",
    respostas: [
      "getElementById()",
      "selectElement()",
      "queryElement()",
    ],
    correta: 0
  },
  {
    id: 8,
    pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "append()",
      "add()",
    ],
    correta: 0
  },
  {
    id: 9,
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "remove()",
      "pop()",
      "delete()",
    ],
    correta: 1
  },
  {
    id: 10,
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
const acertos = document.querySelector("#acertos");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;

for(const pergunta of perguntas){
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = pergunta.pergunta;

  for(let resposta of pergunta.respostas){
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    
    const label = dt.querySelector("label");
    const input = dt.querySelector("input");
    
    const id = `${pergunta.id}-${resposta}`;

    label.textContent = resposta;
    label.setAttribute("for", id);

    input.setAttribute("name", `pergunta-${perguntas.indexOf(pergunta)}`);
    input.setAttribute("id", id);
    input.value = pergunta.respostas.indexOf(resposta);

    input.onchange = (event) => {
      const estaCorreta = event.target.value == pergunta.correta;

      corretas.delete(pergunta);
      acertos.style.backgroundColor = "#E63535";
      if(estaCorreta){
        corretas.add(pergunta);
        acertos.style.backgroundColor = "#A3E635";
      }
      mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();
  quiz.appendChild(quizItem);
}
