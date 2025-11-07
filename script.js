// === HEADER e FOOTER dinâmicos ===
document.addEventListener("DOMContentLoaded", () => {
  carregarHTML("header", "header.html", inicializarMenu);
  carregarHTML("footer", "footer.html");
});



// Função para carregar partes do HTML
async function carregarHTML(id, arquivo, callback) {
  try {
    const response = await fetch(arquivo);
    if (!response.ok) throw new Error(`Erro ao carregar ${arquivo}: ${response.status}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;

    // Executa o callback (ex: inicializarMenu) depois que o HTML foi carregado
    if (callback) callback();
  } catch (error) {
    console.error(error);
  }
}

// Inicializa o menu somente após o header estar carregado
function inicializarMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active"); // usa a mesma classe do seu CSS
    });
  } else {
    console.warn("Elementos do menu não encontrados (menu-toggle / menu).");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("ativo"); // alterna a classe "ativo"
      menuToggle.classList.toggle("ativo"); // muda o ícone se quiser
    });
  }
});

// === BOTÃO DE VOLTAR AO TOPO ===
const btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTopo.style.display = "block"; // aparece quando rola
  } else {
    btnTopo.style.display = "none"; // some no topo
  }
};

btnTopo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // rolagem suave
  });
});


function fechar() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

fecharModal.addEventListener("click", fechar);
overlay.addEventListener("click", fechar);


// Monta o header dinamicamente
document.getElementById("header").innerHTML = `
  <h1>Padaria da Vovó</h1>
  <div class="category-buttons">
    <button class="active" onclick="filtrar('todos')">Todos</button>
    <button onclick="filtrar('Salgados')">Salgados</button>
    <button onclick="filtrar('Doces')">Doces</button>
  </div>
`;

// Monta o footer
document.getElementById("footer").innerHTML = `
  <p>© 2025 Padaria da Vovó — Sabor com tradição!</p>
`;


// ----- CARROSSEL -----
// === Carrossel ===
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel img');
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Troca automática a cada 4s
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 4000);
