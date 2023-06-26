document.addEventListener('DOMContentLoaded', function() {
    
    var registrationForm = document.getElementById('registrationForm');
    var usernameInput = document.getElementById('username');
    var nomeinput = document.getElementById('nome');
    var sobrenomeInput = document.getElementById('sobrenome');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
  
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
    
      var username = usernameInput.value;
      var nome = nomeinput.value;
      var sobrenome = sobrenomeInput.value;
      var email = emailInput.value;
      var password = passwordInput.value;

  
      // Verifica se o nome de usuário já existe no localStorage
      if (isEmailTaken(email)) {
        alert('Já existe uma conta utilizando esse endereço de e-mail.');
      } else if (isUsernameTaken(username)){
        alert('Já existe uma conta utilizando esse nome de usuário.');
      }else{
        // Cria um objeto JSON com os dados do novo usuário
        var user = {
            username: username,
            nome: nome,
            sobrenome: sobrenome,   
            email: email,
            password: password
        };
  
        // Armazena o usuário no localStorage convertendo para JSON
        localStorage.setItem(username, JSON.stringify(user));
  
        alert('Cadastro completo! Agora você pode realizar o seu login');
  
        window.location.href = 'login.html';
      }

      
        // Função para verificar se o e-mail já está cadastrado
        function isEmailTaken(email) {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var user = JSON.parse(localStorage.getItem(key));
                if (user.email === email) {
                    return true;
                }
            }
            return false;
        }

        // Função para verificar se o nome de usuário já está cadastrado
        function isUsernameTaken(username) {
            return localStorage.getItem(username) !== null;
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
  