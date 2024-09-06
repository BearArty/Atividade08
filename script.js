const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})

let outro = document.getElementById("outros");
outro.onclick = function() {
    document.getElementById("outro").style.display = 'block';
} 
let prop = document.getElementById("proposta");
prop.onclick = function() {
    document.getElementById("outro").style.display = 'none';
} 
let duvida = document.getElementById("duvida");
duvida.onclick = function() {
    document.getElementById("outro").style.display = 'none';
} 

window.onload = function() {
    Inputmask({
        mask: '(99) 99999-9999'
    }).mask(document.getElementById("telefone"));
}
