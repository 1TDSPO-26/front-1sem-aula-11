// //Montando um objeto para comparar com os dados do formulário
// const usuario = {
//   nome: "Zezinho",
//   email: "zezinho@gmail.com",
//   senha: "123456",
// };

// //Criando uma lista de objetos para comparar com os dados do formulário:
// const arrayDeCoisas = ["Saab", "Volvo", "BMW", 1, null, {nome:"Ale",idade:50}];
// console.log(arrayDeCoisas);

// console.log(arrayDeCoisas[0]);
// console.log(arrayDeCoisas[1]);
// console.log(arrayDeCoisas[2]);
// console.log(arrayDeCoisas[3]);
// console.log(arrayDeCoisas[4]);
// console.log(arrayDeCoisas[5]);
// console.log(arrayDeCoisas[5].nome);
// console.log(arrayDeCoisas[5].idade);

// //Imprimindo um objeto
// console.log(usuario);
// console.log(usuario.nome);
// console.log(usuario.email);
// console.log(usuario.senha);

//lista de usuários:

// const usuarios = [
//   {
//     nome: "Zezinho",
//     email: "zezinho@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Mariana",
//     email: "mariana@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Rafael",
//     email: "rafael@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Beatriz",
//     email: "beatriz@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Lucas",
//     email: "lucas@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Camila",
//     email: "camila@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Thiago",
//     email: "thiago@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Juliana",
//     email: "juliana@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Bruno",
//     email: "bruno@gmail.com",
//     senha: "12345",
//   },
//   {
//     nome: "Fernanda",
//     email: "fernanda@gmail.com",
//     senha: "12345",
//   },
// ];

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

botaoEntrar.addEventListener("click", function (evento) {
  evento.preventDefault();

  try {
    //Variável de controle
    let isValid = false;

    //Recuperando os 2 campos do formulário de login e imprimir no console:
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");

    //Imprimindo o valor dos campos em tela.
    console.log(email.value);
    console.log(senha.value);

    let usuarios = [];

    fetch("http://localhost:3000/alunos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        usuarios = data;
        console.log(usuarios);

        if (usuarios.length > 0) {
          for (let x = 0; x < usuarios.length; x++) {
            if (
              email.value === usuarios[x].email &&
              senha.value === usuarios[x].senha) {
             
            //Setando a variável de controle como true
            isValid = true;
            
              //Criando um contador para o tempo de espera do usuário.
              let contador = 5;

              //Capturando a divMsg através de seletores css.
              const divMsg = document.querySelector("#msg");
              divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundos!</p>`;
              divMsg.style.color = "green";
              divMsg.style.backgroundColor = "#88e388";

              const intervalo = setInterval(() => {
                //decrementando o contador
                contador--;
                divMsg.innerHTML = `<p>Você será redirecionado em ${contador} segundos!</p>`;
                divMsg.style.color = "green";
                divMsg.style.backgroundColor = "#88e388";

                //Verificando se o contador chegou a zero
                if (contador === 0) {
                  clearInterval(intervalo);
                  window.location.href = "../index.html";
                  return usuarios[x];
                }
              }, 1000);
            }
          }

          if (!isValid) {
            throw new Error("Email ou senha incorretos!");
          }

        } else {
          throw new Error("Preencha os campos corretamente!");
        }

      });
      

    } catch (error) {
      alert(error.message);
    }
    
});
