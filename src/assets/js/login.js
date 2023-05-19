// Espera o documento ser carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos do formulário
    var loginForm = document.getElementById('loginForm');
    var usernameOrEmailInput = document.getElementById('usernameOrEmail');
    var passwordInput = document.getElementById('password');
  
    // Adiciona um evento de envio ao formulário
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Obtém os valores do nome de usuário ou e-mail e senha
      var usernameOrEmail = usernameOrEmailInput.value;
      var password = passwordInput.value;
  
      // Função para verificar o login
      function login(usernameOrEmail, password) {
        // Verifica se o nome de usuário ou e-mail corresponde aos dados armazenados no localStorage
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var user = JSON.parse(localStorage.getItem(key));
  
          // Verifica se o nome de usuário ou e-mail e a senha correspondem
          if (
            (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
            user.password === password
          ) {
            // Armazena o nome de usuário atual no localStorage
            localStorage.setItem('currentUsername', user.username);
            return true; // Login bem-sucedido
          }
        }
  
        return false; // Login inválido
      }
  
      if (login(usernameOrEmail, password)) {
        // Redireciona para a terceira página após o login
        window.location.href = 'pagina-principal.html';
      } else {
        alert('Usuário/e-mail ou senha inválidos. Tente novamente.');
      }
    });
  });

// Espera o documento ser carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
  // Obtém o nome de usuário armazenado no localStorage
  var username = localStorage.getItem('currentUsername');

  // Verifica se o nome de usuário está presente
  if (username) {
      window.location.href = 'pagina-principal.html';
      }else{
      console.log('não está logado')
      }
});