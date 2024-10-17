const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Objetivo básico (círculo)
let target = {
  x: Math.random() * (canvas.width - 50),
  y: Math.random() * (canvas.height - 50),
  radius: 25,
  color: 'red'
};

let score = 0; // Puntuación del jugador
let isGameOver = false; // Estado del juego

// Función para dibujar el objetivo
function drawTarget() {
  ctx.beginPath();
  ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
  ctx.fillStyle = target.color;
  ctx.fill();
  ctx.closePath();
}

// Función para verificar si el clic fue en el objetivo
function isHit(clickX, clickY) {
  const distX = clickX - target.x;
  const distY = clickY - target.y;
  const distance = Math.sqrt(distX * distX + distY * distY);
  
  return distance < target.radius;
}

// Función que mueve el objetivo a una nueva posición aleatoria
function moveTarget() {
  target.x = Math.random() * (canvas.width - target.radius * 2) + target.radius;
  target.y = Math.random() * (canvas.height - target.radius * 2) + target.radius;
}

// Función que actualiza el puntaje
function updateScore() {
  score += 1;
  document.getElementById('score').innerText = `Puntuación: ${score}`;

  // Verifica si el jugador ha ganado
  if (score >= 10) {
    isGameOver = true;
    alert('¡Has ganado!');
    resetGame(); // Reinicia el juego
  }
}

// Reiniciar el juego
function resetGame() {
  score = 0; // Reiniciar la puntuación
  document.getElementById('score').innerText = `Puntuación: ${score}`;
  moveTarget(); // Mover el objetivo a una nueva posición
  isGameOver = false; // Volver a activar el juego
}

// Dibujar todo en el canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas
  drawTarget();  // Dibujar objetivo
}

// Detectar clics en el canvas
canvas.addEventListener('click', (e) => {
  if (isGameOver) return; // Si el juego ha terminado, no hace nada

  // Obtener la posición del clic relativo al canvas
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  // Verificar si el clic fue en el objetivo
  if (isHit(clickX, clickY)) {
    moveTarget();  // Mover el objetivo
    updateScore(); // Actualizar la puntuación
  }
  draw(); // Redibujar después de mover el objetivo
});

// Inicializar el juego dibujando todo
draw();