window.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('currentUsername');
    var user = JSON.parse(localStorage.getItem(username));
    var fotoPerfil = user.fotoPerfil;

    var element = document.getElementById('icone-usuario');
    if (fotoPerfil) {
    element.innerHTML = null;
    element.style.backgroundImage = "url('" + fotoPerfil + "')";
    }
});

function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function voltarInicio() {
        window.location.href = 'pagina-principal.html';
}

    