// Declaração de variáveis — var, let e const
// var	 Escopo de função; pode ser redeclarada; sofre hoisting      / Evite — legado do ES5
// let	 Escopo de bloco {}; pode ser reatribuída; sem hoisting     /  Variáveis que mudam de valor
// const Escopo de bloco {}; não pode ser reatribuída após criação /   Prefira sempre que possível

// var   nome = 'Ana';   // evitar — escopo amplo demais
// let   idade = 25;     // OK para valores que mudam
// const PI = 3.14159;   // prefira para valores fixos
 
// Exemplo de diferença de escopo:
// if (true) {
    // var x = 10;   // vazamento: x existe fora do bloco
    // let y = 20;   // seguro: y existe só dentro do bloco
// }
// console.log(x); // 10  ✓
// console.log(y); // ReferenceError  ✗


// Tipos de dados
// string  — Textos e caracteres  →  "texto"  ou  'texto'  ou  `template`
// number  — Inteiros e decimais (um só tipo)  →  42  /  3.14  /  -7
// boolean  — Verdadeiro ou falso  →  true  /  false
// null  — Ausência intencional de valor  →  null
// undefined  — Variável declarada sem valor  →  undefined
// object  — Coleções e estruturas complexas  →  { nome: 'Ana' }  /  [1, 2, 3]

// typeof revela o tipo de qualquer valor:
// console.log(typeof "olá");       // Retorna: "string"
// console.log(typeof 42);          // Retorna: "number"
// console.log(typeof true);        // Retorna: "boolean"
// console.log(typeof null);        // Retorna: "object" (bug histórico do JS!)
// console.log(typeof undefined);   // Retorna: "undefined"
// console.log(typeof {});          // Retorna: "object"
// console.log(typeof []);          // Retorna: "object"
// Ex: utilizando o typeof para comparaçoes simples

// let nome  = "Eminem";
// let dados = true;

// if (typeof(nome) === typeof(dados)) {
    // console.log('' + nome + ' é igual a ' + dados);
// } else {
   //  console.log('' + nome + ' é diferente de ' + dados);
// }

// Template literals e concatenação
// const nome  = "Maria";
// const idade = 28;
 
// Concatenação (forma antiga):
// console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
 
// Template literal (ES6 — prefira este):  use crases `
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
// console.log(`Próximo aniversário: ${idade + 1} anos`);

// Operadores
// Aritméticos:
//     + : Adição
//     - : Subtração
//     * : Multiplicação
//     / : Divisão
//     % : Módulo (resto da divisão)
//      : Exponenciação
// Comparação:
//     === : Igualdade estrita (mesmo valor e tipo)
//     !== : Desigualdade estrita (valor ou tipo diferente)
//     > : Maior que
//     < : Menor que
//     >= : Maior ou igual a
//     <= : Menor ou igual a
// Lógicos:
//     && : E (AND)
//     || : OU (OR)
//     ! : NÃO / Negação (NOT)
// Atenção: == vs ===
// 5 == "5"   // true  (compara só valor, converte tipo)
// 5 === "5"  // false (compara valor E tipo) ← sempre use ===
 
// Operador lógico prático:
// const usuarioLogado = false;
// const mensagem = usuarioLogado || "Visitante";
// onsole.log(mensagem); // "Visitante"

// EXERCÍCIO — Módulo 1
//	Declare três variáveis (nome, idade, cidade) com let e const. Imprima uma frase com template literal.
//	Use typeof para verificar o tipo de pelo menos 4 valores diferentes.
//	Calcule a área de um retângulo. Armazene base e altura em const. Exiba o resultado com console.log.
//	Teste a diferença entre == e ===: compare o número 0 com a string "0" das duas formas.

// let nome = "Roberto"
// const idade = "23"
// const cidade = "São Paulo"
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Mora em ${cidade}`)

// typeof nome;
// typeof idade
// typeof cidade
// typeof true

// let base = "10"
// let lado = "20"
// const area = base * lado
// console.log(`A area do retangulo é: ${area}`)

// console.log(0 == "0")
// console.log(0 === "0")

// const nota = 72;
 
// if (nota >= 90) {
//    console.log("Aprovado com distinção");
// } else if (nota >= 60) {
//    console.log("Aprovado");
// } else {
//    console.log("Reprovado");
// }
 
// Operador ternário (if/else em uma linha):
// const resultado = nota >= 60 ? "Aprovado" : "Reprovado";

// switch
// Use switch quando comparar uma variável contra múltiplos valores fixos. Mais legível que muitos else if encadeados.
// const diaSemana = "segunda";

// switch (diaSemana) {
//   case "segunda":
//     console.log("Dia útil e trabalho");
//     break;
//   case "terça":
//     console.log("Dia útil e dia de aula");
//     break;
//   case "quarta":
//    console.log("Dia útil e dia de feira");
//     break;
//   case "quinta":
//     console.log("Dia útil e dia de festa");
//     break;
//   case "sexta":
//     console.log("Feriado!!!");
//     break;
//   case "sábado":
//     console.log("Fim de semana!");
//     break;
//   case "domingo":
//     console.log("Fim de semana!");
//    break;
//   default:
//     console.log("Dia inválido");
// }

// Nunca esqueça o break! Sem ele o JS continua executando os cases seguintes (fall-through).
// EXERCÍCIO — Módulo 2
// •	Crie um verificador de faixa etária: "criança" (< 12), "adolescente" (12–17), "adulto" (18–59), "idoso" (60+).
// •	Simule um semáforo com switch: verde, amarelo, vermelho → imprima a instrução correspondente.
// •	Crie um mini-calculadora: peça dois números e uma operação (+, -, *, /) e exiba o resultado.


// Crie um verificador de faixa etária: "criança" (< 12), "adolescente" (12–17), "adulto" (18–59), "idoso" (60+).
// let idade = 35

// if(idade < 12){
//   console.log("Criança")
// }else if(idade >= 12 && idade <= 17){
//   console.log("Adolecente");
// }else if(idade >= 18 && idade <= 59){
//   console.log("Adulto");
// }else{
//   console.log("Idoso");
// }

// Simule um semáforo com switch: verde, amarelo, vermelho → imprima a instrução correspondente.
// let semaforo = "vermelho";

// switch (semaforo) {
//   case "verde":
//     console.log("Prossiga");
//     break;
//  case "amarelo":
//     console.log("Reduza");
//     break;
//   case "vermelho":
//     console.log("Pare!");
//     break;
//   default:
//     console.log("Semáforo com defeito!");
// }

// Crie um mini-calculadora: peça dois números e uma operação (+, -, *, /) e exiba o resultado.
// let num_1 = 12;
// let num_2 = 24;
// let operacao = "soma";

// switch (operacao) {
//   case "+":
//     const soma = num_1 + num_2;
//     console.log(soma);
//     break;
//   case "-":
//     const subtracao = num_1 - num_2;
//     console.log(subtracao);
//     break;
//   case "*":
//     const multiplicacao = num_1 * num_2;
//     console.log(multiplicacao);
//     break;
//   case "/":
//     const resultado = nr2 !== 0 ? nr1 / nr2 : "Erro divisão por zero.";
//     console.log(resultado);
//      break;
//   default:
//    console.log("Operação Invalida")
// }

// Recuperando o botão entrar
// const botaoEntrar = document.getElementById("btnEntrar");

// // Atrelar ao botão um evento
// // Vamos utilizar uma função que escuta eventos.
// // Essa função se chama addEventListener(param1, param2) e recebe dois parâmetros:
// // O primeiro é o evento em si (click ou outro qualquer).
// // O segundo é a função, que pode ser uma função anônima ou uma função declarada.
// // Que será executada quando esse evento acontecer.

// // Ex: botaoEntrar.addEventListener("click", function(){ Coisas aqui dentro da função para serem executadas quando o botão for clicado. });

// botaoEntrar.addEventListener("click",function(){
//     console.log("O botão foi clicado!");
// });

//Exemplo de função

// function nomeDaFuncao(){
//     console.log("Olla");
// }


// Montando um objeto para comparar os dados do formulario
 const usuarios = [
  {
    nome: "Zezinho",
    email: "zezinho@gmail.com",
    senha: "123456",
  },
  {
    nome: "Mariana",
    email: "mariana@gmail.com",
    senha: "12345",
  },
  {
    nome: "Rafael",
    email: "rafael@gmail.com",
    senha: "12345",
  },
  {
    nome: "Beatriz",
    email: "beatriz@gmail.com",
    senha: "12345",
  },
  {
    nome: "Lucas",
    email: "lucas@gmail.com",
    senha: "12345",
  },
  {
    nome: "Camila",
    email: "camila@gmail.com",
    senha: "12345",
  },
  {
    nome: "Thiago",
    email: "thiago@gmail.com",
    senha: "12345",
  },
  {
    nome: "Juliana",
    email: "juliana@gmail.com",
    senha: "12345",
  },
  {
    nome: "Bruno",
    email: "bruno@gmail.com",
    senha: "12345",
  },
  {
    nome: "Fernanda",
    email: "fernanda@gmail.com",
    senha: "12345",
  },
];

//Recuperando o botão entrar
// const botaoEntrar = document.getElementById("btnEntrar");

const botaoEntrar = document.querySelector("button[type='submit']");

//Atrelar ao botão um evento
//Vamos utilizar uma função que escuta eventos.
//Essa função se chama addEventListener(param1, param2) e recebe dois parâmetros:
//O primeiro é o evento em si (click ou outro qualquer).
//O segundo é a função, que pode ser uma função anônima ou uma função declarada.
//Que será executada quando esse evento acontecer.

//Ex: botaoEntrar.addEventListener("click", function(){ Coisas aqui dentro da função para serem executadas quando o botão for clicado. });

botaoEntrar.addEventListener("click", (evento)=> {

  evento.preventDefault();

  try {
    //Recuperando os 2 campos do formulário de login e adicionando em um objeto:
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");

    //Criar o objeto dadosForm:
    const dadosForm = {
      email: email.value,
      senha: senha.value,
    };

    let isValid = false;

    if (usuarios) {
      for (let x = 0; x < usuarios.length; x++) {
<<<<<<< Updated upstream
        if (dadosForm.email === usuarios[x].email && dadosForm.senha === usuarios[x].senha) {
            
          const modal = document.getElementById("meuModal");
          modal.showModal();

          const botaoFecharModal = document.getElementById("fecharModal");
          botaoFecharModal.addEventListener("click", ()=>{
            modal.close();
          });

          const divMsg = document.getElementById("msg");
          divMsg.innerHTML = "<h2>Login realizado com sucesso!</h2><p>Você será redirecionado em 5 segundos...</p>";

          let contador = 5;

          const intervalo = setInterval( ()=>{
            contador--;
            divMsg.innerHTML = `<h2>Login realizado com sucesso!</h2><p>Você será redirecionado em ${contador} segundos...</p>`;
            
            if (contador === 0) {
              clearInterval(intervalo);
              window.location.href = "../index.html"
            }

          },1000);

          ;
          isValid = true;
          break;
        }
      }

      if (!isValid) {
        throw new Error("Email ou senha incorretos!");
        
        if ((email.value === usuarios[x].email) && (senha.value === usuarios[x].senha)) {
          alert("Login realizado com sucesso!");  
          
          // capturando a divMsg atraves de seletores css
          const divMsg = document.querySelector("#msg");
          divMsg.innerHTML = <p>Voce será redirecionado em 5 segundos!</p>;
          divMsg.style.color = "green";
          divMsg.Style.backgroundColor = "#88e388"

          //Criando um contador para o tempo de espera do usuário.
          let contador = 5;
 
          //Capturando a divMsg através de seletores css.
          const divMsg = document.querySelector("#msg");
          divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundos!</p>`;
          divMsg.style.color = "green";
          divMsg.style.backgroundColor = "#88e388";
 
          const intervalo = setInterval( ()=>{
 
            //decrementando o contador
            contador--;
            divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundos!</p>`;
            divMsg.style.color = "green";
            divMsg.style.backgroundColor = "#88e388";
           
            //Verificando se o contador chegou
            if(contador === 0){
              clearInterval(intervalo);
              window.location.href = "../index.html";
            }
 
          }, 1000);

          // window.location.href = "./index.html";
          return usuarios[x];
        } 
      }

      throw new Error("Nome de usuário ou senha incorretos!");

    } else {
      throw new Error("Preencha os campos corretamente!");
    } catch (error) {
    alert(error.message);
  }

  }
