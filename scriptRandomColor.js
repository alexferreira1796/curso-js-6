function randomColor() {
  // Random de 0 a 1 multiplica por FFFFF aumenta o intervalo de aletarios 000 e FFF
  // depois executa toString passando 16 pois é a base hexadecimal
  const hex = Math.floor((Math.random() * 0xFFFFFF)).toString(16);
  return '#'+hex;
}