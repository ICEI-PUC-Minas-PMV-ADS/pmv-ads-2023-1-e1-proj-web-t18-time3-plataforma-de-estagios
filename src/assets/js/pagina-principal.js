// Espera o documento ser carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referência ao botão de logout
    var logoutButton = document.getElementById('logoutButton');

    // Adiciona um evento de clique ao botão
    logoutButton.addEventListener('click', function() {
    // Remove o nome de usuário do localStorage
    localStorage.removeItem('currentUsername');

    // Redireciona para a página de login
    window.location.href = 'login.html';
    });
});

// Espera o documento ser carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o nome de usuário armazenado no localStorage
    var username = localStorage.getItem('currentUsername');
    console.log(username);

    // Verifica se o nome de usuário está presente
    if (username) {
        var user = JSON.parse(localStorage.getItem(username));

        console.log(user)

        console.log(user.nome)

        // Exibe as informações do usuário na página
        var email = user.email;
        var usename = user.usename;
        var nome = user.nome;
        var sobrenome = user.sobrenome;

        var usernameElement = document.getElementById('username');

        if (usernameElement) {
            usernameElement.innerHTML = '<strong>Usuário:</strong><br>' + username + '<br><strong>Nome:</strong><br> '+ nome + ' ' + sobrenome+ '<br><strong>E-mail:</strong><br>'+email;
        } else {
            console.error("Element with ID 'username' not found on the page.");
        }

        } else {
            // Caso contrário, redireciona para a página de login
            window.location.href = 'login.html';
        }
});
