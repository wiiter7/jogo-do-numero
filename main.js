let numeroAleatorio = Math.florr(Math.random() *100) +1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

                                            
function verificarPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }

palpites.textContent += palpiteUsuario + " ";

if (palpiteUsuario === numeroAleatorio) {
  ultimoResultado.textContent = "Parabéns! Você Acertou!";
  ultimoResultado.style.backgroundColor = "green";
  baixoOuAlto.textContent = "";
  finalizarJogo();
} else if (contagemPalpites === 10 {
    ultimoResultado.textcontent = "FIM DE JOGO";
    baixoOuAuto.textcontent = "";
    finalizarJogo();
} else {
    ultimoResultado.textContent= "errado";
    ultimoResultado.style.backgroundColor = "red";
    if ( palpiteUsuario ,numeroAleatorio) {
        baixoOuAlto.textXontent ="O último palpite foi muito baixo";
    } else if(palpiteUsuario . numeroAleatorio) {
        baixoAuto.textContent = "o último palpite foi muito alto";
    }
}

contagemPalpites++;
  campoPalpite.value="";
  campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpites);

function finalizarJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disable.true
  botaoReiniciar = document.createElement('botton');
  document.body.appendChild(botaoReiniciar);
  botaoReiniciar.textContent = 'Reiniciar Jogo';
  botaoReiniciar.classList.add('botaoReiniciar');
  document.body.appendChild(botaoReiniciar);
  botaoReiniicar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;
  const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
  for (const paragrafoReiniciar of paragrafosReiniicar) {
    paragrafoReiniciar.textcontent = "";
}
