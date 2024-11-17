const texto = `
Minha pessoa favorita,

Desde que te conheci, minha vida mudou completamente. 
Cada dia ao seu lado é uma aventura incrível, cheia de amor e felicidade.

Quero te agradecer por tudo que você é e por tudo que fazemos juntos. 
Você é minha razão de sorrir, minha inspiração e meu maior amor.

Com todo o meu coração, 
Seu eterno admirador. 💖
`;

let index = 0;

function digitarTexto() {
  const elemento = document.getElementById("texto");
  if (index < texto.length) {
    elemento.innerHTML += texto[index];
    index++;
    setTimeout(digitarTexto, 50); // Controla a velocidade da digitação
  }
}

window.onload = digitarTexto;
