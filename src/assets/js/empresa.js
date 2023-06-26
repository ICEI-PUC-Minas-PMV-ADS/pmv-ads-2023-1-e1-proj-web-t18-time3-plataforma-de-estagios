// Função para cadastrar a empresa
function cadastrarEmpresa() {
  // Obter os valores dos campos de entrada
  var nomeEmpresa = document.getElementById('nomeEmpresa').value;
  var cnpjEmpresa = document.getElementById('cnpjEmpresa').value;
  var enderecoEmpresa = document.getElementById('enderecoEmpresa').value;
  var telefoneEmpresa = document.getElementById('telefoneEmpresa').value;
  var emailEmpresa = document.getElementById('emailEmpresa').value;
  var nomeContato = document.getElementById('nomeContato').value;
  var cargoContato = document.getElementById('cargoContato').value;
  var telefoneContato = document.getElementById('telefoneContato').value;
  var emailContato = document.getElementById('emailContato').value;
  var descricaoVagas = document.getElementById('descricaoVagas').value;
  var requisitosVagas = document.getElementById('requisitosVagas').value;
  
  // Cria um objeto com os dados da empresa
  var empresa = {
    'Nome': nomeEmpresa,
    'CNPJ': cnpjEmpresa,
    'Endereço': enderecoEmpresa,
    'Telefone': telefoneEmpresa,
    'E-mail': emailEmpresa,
    'Informações do Contato': {
      'Nome do Contato': nomeContato,
      'Cargo do Contato': cargoContato,
      'Telefone do Contato': telefoneContato,
      'E-mail do Contato': emailContato
    },
    'Informações das Vagas': {
      'Descrição das Vagas': descricaoVagas,
      'Requisitos para as Vagas': requisitosVagas
    }
  };
  
  // Converte o objeto para uma string JSON
  var empresaJSON = JSON.stringify(empresa);
  
  // Armazena a string JSON no Local Storage
  localStorage.setItem('empresa', empresaJSON);
  
  // Exibe uma mensagem de sucesso
  alert('Empresa cadastrada com sucesso!');
}
// Função para editar os dados da empresa
function editarEmpresa() {
  // Verifica se a empresa está cadastrada no Local Storage
  if (localStorage.getItem('empresa')) {
    // Obtém os dados da empresa armazenados no Local Storage
    var empresaJSON = localStorage.getItem('empresa');
    var empresa = JSON.parse(empresaJSON);
    
    // Atualiza os valores dos campos de entrada
    empresa.Nome = document.getElementById('nomeEmpresa').value;
    empresa.CNPJ = document.getElementById('cnpjEmpresa').value;
    empresa.Endereço = document.getElementById('enderecoEmpresa').value;
    empresa.Telefone = document.getElementById('telefoneEmpresa').value;
    empresa['E-mail'] = document.getElementById('emailEmpresa').value;
    empresa['Informações do Contato']['Nome do Contato'] = document.getElementById('nomeContato').value;
    empresa['Informações do Contato']['Cargo do Contato'] = document.getElementById('cargoContato').value;
    empresa['Informações do Contato']['Telefone do Contato'] = document.getElementById('telefoneContato').value;
    empresa['Informações do Contato']['E-mail do Contato'] = document.getElementById('emailContato').value;
    empresa['Informações das Vagas']['Descrição das Vagas'] = document.getElementById('descricaoVagas').value;
    empresa['Informações das Vagas']['Requisitos para as Vagas'] = document.getElementById('requisitosVagas').value;
    
    // Converte o objeto atualizado para uma string JSON
    var empresaJSONAtualizada = JSON.stringify(empresa);
    
    // Armazena a string JSON atualizada no Local Storage
    localStorage.setItem('empresa', empresaJSONAtualizada);
    
    // Exibe uma mensagem de sucesso
    alert('Dados da empresa atualizados com sucesso!');
  } else {
    // Caso a empresa não esteja cadastrada no Local Storage
    alert('Nenhuma empresa cadastrada.');
  }
}
