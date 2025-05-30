// Variaveis para armazenar dados de login temporariamente
let username;
let password;
//Lista de contatos cadastrados (usuarios), com um usuario de exemplo
let contatos = [
    {
        Id: 1,
        nome: 'Aline Almeida',
        username: 'aline@almeida.com',
        senha: '1234'
    }
];
// Objeto para armazenar temporariamente os dados de um novo contato no cadastro
let novoContato = {};
// Variavel que armazenara os dados do usuario logado
let contatoLogado;
// Filme que sera selecionado para alugar
let filmePraAlugar;
// Lista de filmes que ja foram alugados
let filmesAlugados = [
    {
        Id: 2,
        Nome: 'Vingadores: Ultimato',
        Ano: 2019,
        Duracao: '3h 2m',
        DataAluguel: '25/05/2025',
        DataDevolucao: '30/05/2025'
    },
    {
        Id: 4,
        Nome: 'Barbie',
        Ano: 2023,
        Duracao: '1h 54m',
        DataAluguel: '22/05/2025',
        DataDevolucao: '27/05/2025'
    },
];
// Lista completa de filmes disponiveis para alugar

let filmes = [
    {
        Id: 1,
        Nome: 'Titanic',
        Ano: 1997,
        Duracao: '3h 14m'
    },
    {
        Id: 2,
        Nome: 'Vingadores: Ultimato',
        Ano: 2019,
        Duracao: '3h 2m'
    },
    {
        Id: 3,
        Nome: 'O Rei Leão',
        Ano: 2019,
        Duracao: '1h 58m'
    },
    {
        Id: 4,
        Nome: 'Barbie',
        Ano: 2023,
        Duracao: '1h 54m'
    },
    {
        Id: 5,
        Nome: 'Top Gun: Maverick',
        Ano: 2022,
        Duracao: '2h 11m'
    },
    {
        Id: 6,
        Nome: 'Homem-Aranha: Sem Volta pra casa',
        Ano: 2021,
        Duracao: '2h 28m'
    }
];
// Le os valores digitados nos campos de username e password da tela de login

function handleUserNameChange() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
}
// Atualiza o objeto novoContato conforme o usuario digita nos campos do formulario de cadastro
function handleChangeCadastro(event) {
    novoContato[event.name] = event.value;
}
// Verifica os dados do login e redireciona para a home se estiverem corretos

function handleSubmitUser() {
    if(!username || !password) {
        alert('Todos os campos devem estar preenchidos!');
        return;
    }
  // Procura um contato com username e senha correspondentes
    contatoLogado = contatos.find(c => c.username === username && c.senha === password);

    if(!contatoLogado) {
        alert('Usuário ou senha inválida!');
        return;
    }

    goToHome(); // Redireciona para a tela principal
}
 // Cadastra um novo usuario, valida os campos, adiciona a  lista de contatos e redireciona
function handleCadastrarUser() {
    if(!novoContato.username || !novoContato.password || !novoContato.nome) {
        alert('Todos os campos devem estar preenchidos!');
        return;
    }

    contatos.push(novoContato);
    contatoLogado = contatos.find(c => c.username === novoContato.username);
    novoContato = {};

    goToHome(); // Redireciona apos o cadastro
}

function goToLogin() {
    window.location.href = "login.html"; // Vai para a pagina de login

}

function goToHome() {
    window.location.href = "index.html"; // Vai para a pagina inicial
}

function goToFilmesAlugados() {
    window.location.href = "filmesAlugados.html"; // Vai para a lista de filmes alugados
}

function goToCadastrarUsuario() {
    window.location.href = "cadastroUsuario.html";  // Vai para o formulario de cadastro
}
// Seleciona um filme para alugar e redireciona para a tela de confirmação
function alugarFilme(event) {
    let filmeId = event.value;

    filmePraAlugar = filmes.find(f => f.Id === filmeId);
    window.location.href = "alugarFilme.html";
}
// Filtra os filmes exibidos na tela com base no texto digitado

function filtrarFilmes() {
    const input = document.getElementById('filtroFilme').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      const titulo = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = titulo.includes(input) ? 'block' : 'none';
    });
}
// Converte uma data no formato "aaaa-mm-dd" para "dd/mm/aaaa"

function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}
// Confirma o aluguel do filme, verificando se as datas foram preenchidas
function confirmarAluguel() {
    const dataAluguel = document.getElementById('dataAluguel').value;
    const dataDevolucao = document.getElementById('dataDevolucao').value;

    if (!dataAluguel || !dataDevolucao) {
        alert("Por favor, preencha todas as datas.");
        return;
    }

    this.goToFilmesAlugados(); // Redireciona para filmes alugados

}
// Remove um filme da lista de alugados e esconde o card correspondente da interface
function handleDeletar(event) {
    filmesAlugados = filmesAlugados.filter(f => f.Id != event.value);

    const elemento = document.getElementById(event.value);
    elemento.style.display = "none";
}