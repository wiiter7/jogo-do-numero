
const  palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.umtimoResultado');
const baixoOuAuto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');



function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabens ! Você Acertou";
        
    }
}