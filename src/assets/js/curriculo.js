function salvarCurriculo(curriculo) {
  var curriculos = JSON.parse(localStorage.getItem('curriculos')) || [];
  curriculos.push(curriculo);
  localStorage.setItem('curriculos', JSON.stringify(curriculos));
}

// Função para obter os currículos salvos no LocalStorage
function obterCurriculos() {
  return JSON.parse(localStorage.getItem('curriculos')) || [];
}

// Função para exibir os currículos na lista
function exibirCurriculos() {
  var listaCurriculos = document.getElementById('lista-curriculos');
  listaCurriculos.innerHTML = '';

  var curriculos = obterCurriculos();

  for (var i = 0; i < curriculos.length; i++) {
    var curriculo = curriculos[i];

    var li = document.createElement('li');
    li.textContent =
      'Nome: ' +
      curriculo.nome +
      ', Email: ' +
      curriculo.email +
      ', Telefone: ' +
      curriculo.telefone +
      ', Escolaridade: ' +
      curriculo.escolaridade +
      ', Formação: ' +
      curriculo.formacao +
      ', Endereço: ' +
      curriculo.endereco +
      ', CEP: ' +
      curriculo.cep +
      ', Idiomas: ' +
      curriculo.idiomas +
      ', Habilidades: ' +
      curriculo.habilidades;

    var editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.onclick = (function (index) {
      return function () {
        abrirModalEdicao(index);
      };
    })(i);

    var excluirBtn = document.createElement('button');
    excluirBtn.textContent = 'Excluir';
    excluirBtn.onclick = (function (index) {
      return function () {
        excluirCurriculo(index);
      };
    })(i);

    li.appendChild(editarBtn);
    li.appendChild(excluirBtn);

    listaCurriculos.appendChild(li);
  }
}

// Função para cadastrar um currículo
function cadastrarCurriculo() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var escolaridade = document.getElementById('escolaridade').value;
  var formacao = document.getElementById('formacao').value;
  var endereco = document.getElementById('endereco').value;
  var cep = document.getElementById('cep').value;
  var idiomas = document.getElementById('idiomas').value;
  var habilidades = document.getElementById('habilidades').value;

  var curriculo = {
    nome: nome,
    email: email,
    telefone: telefone,
    escolaridade: escolaridade,
    formacao: formacao,
    endereco: endereco,
    cep: cep,
    idiomas: idiomas,
    habilidades: habilidades
  };

  salvarCurriculo(curriculo);

  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('escolaridade').value = '';
  document.getElementById('formacao').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('cep').value = '';
  document.getElementById('idiomas').value = '';
  document.getElementById('habilidades').value = '';

  exibirCurriculos();
}

function editarCurriculo() {
  // Verifica se o curriculo está cadastrada no Local Storage
  if (localStorage.getItem('curriculo')) {
    // Obtém os dados do curriculo armazenados no Local Storage
    var curriculoJSON = localStorage.getItem('curriculo');
    var curriculo = JSON.parse(curriculoJSON);
    
    // Atualiza os valores dos campos de entrada
    curriculo.Nome = document.getElementById('nome').value;
    curriculo.Email = document.getElementById('email').value;
    curriculo.Telefone = document.getElementById('telefone').value;
    curriculo.Escolaridade = document.getElementById('escolaridade').value;
    curriculo.Formacao = document.getElementById('formacao').value;
    curriculo.Endereco = document.getElementById('endereco').value;
    curriculo.Cep = document.getElementById('cep').value;
    curriculo.Idiomas = document.getElementById('idiomas').value;
    curriculo.habilidades = document.getElementById('habilidades').value;
    
    // Converte o objeto atualizado para uma string JSON
    var curriculoJSONAtualizado = JSON.stringify(curriculo);
    
    // Armazena a string JSON atualizada no Local Storage
    localStorage.setItem('curriculo', curriculoJSONAtualizado);
    
    // Exibe uma mensagem de sucesso
    alert('Dados do currículo atualizados com sucesso!');
  } else {
    // Caso o currículo não esteja cadastrado no Local Storage
    alert('Nenhum currículo cadastrado.');
  }
}
// Função para excluir currículo
function excluirCurriculo(index) {
  var curriculos = obterCurriculos();

  // Remova o currículo do array de currículos
  curriculos.splice(index, 1);

  // Salve os currículos atualizados no LocalStorage
  localStorage.setItem('curriculos', JSON.stringify(curriculos));

  // Atualize a exibição dos currículos na lista
  exibirCurriculos();
}

// Função para inicializar a aplicação
function init() {
  exibirCurriculos();
}

window.onload = init;