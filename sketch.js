function setup() {
  createCanvas(800, 600);
  background(200, 255, 200); // Fundo suave
}
// Variáveis para a árvore
let treeX, treeY, treeSize;

function setup() {
  createCanvas(800, 600);
  // Configurações iniciais
  background(200, 255, 200); // Fundo verde claro
  // Posições e tamanhos da árvore
  treeX = width / 5;
  treeY = height - 100;
  treeSize = 150;
}

function draw() {
  // Desenha o cenário
  drawBackground();
  drawTree(treeX, treeY, treeSize);
}

// Função para desenhar o fundo
function drawBackground() {
  background(200, 255, 200); // Cor do céu
  noStroke();
  fill(34, 139, 34); // Cor do campo
  rect(0, height / 2, width, height / 2);
}

// Função para desenhar a árvore
function drawTree(x, y, size) {
  // Tronco
  fill(139, 69, 19);
  rect(x - size / 10, y - size / 2, size / 5, size);

  // Folhas
  fill(34, 139, 34);
  ellipse(x, y - size, size * 1.2, size * 1.2);
  ellipse(x - size / 2, y - size / 2, size * 0.8, size * 0.8);
  ellipse(x + size / 2, y - size / 2, size * 0.8, size * 0.8);
}

// Opcional: clicar para mover a árvore
function mousePressed() {
  treeX = mouseX;
  treeY = mouseY;
}
