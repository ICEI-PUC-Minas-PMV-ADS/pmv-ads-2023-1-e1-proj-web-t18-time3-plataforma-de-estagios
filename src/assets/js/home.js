if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./pmv-ads-2023-1-e1-proj-web-t18-time3-plataforma-de-estagios/src/pages/login.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "http://127.0.0.1:5500/pmv-ads-2023-1-e1-proj-web-t18-time3-plataforma-de-estagios/src/pages/login.html";
  }