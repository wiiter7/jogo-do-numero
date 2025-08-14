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
