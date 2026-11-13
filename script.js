// FUNCIONALIDAD 1: Modo Oscuro / Modo Claro
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
  // Alterna la clase 'dark-mode' en el body
  document.body.classList.toggle('dark-mode');

  // Cambia el texto del botón según el estado actual
  if (document.body.classList.contains('dark-mode')) {
    btnTema.textContent = '☀️ Modo Claro';
  } else {
    btnTema.textContent = '🌙 Modo Oscuro';
  }
});

// FUNCIONALIDAD 2: Botón para mostrar y ocultar información
const btnInfo = document.getElementById('btn-info');
const infoExtra = document.getElementById('info-extra');

btnInfo.addEventListener('click', () => {
  if (infoExtra.style.display === 'block') {
    infoExtra.style.display = 'none';
    btnInfo.textContent = 'Ver más información';
  } else {
    infoExtra.style.display = 'block';
    btnInfo.textContent = 'Ocultar información';
  }
});
