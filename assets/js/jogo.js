let table = document.getElementById('table');
let bx = document.getElementsByTagName('td');

for(let i = 0; i < bx.length; i++) {
    const box = bx[i];
    box.addEventListener('click', (e) => {
        newGame(e)
    });
}

function xPlayer() {
    let x = 'X';
    return x;
}

function oPlayer() {
    let o = 'O'
    return o;
}

function pointer(e) {
    let pointer = e.target;
    console.log(pointer)
    return pointer;
}

let game = true;

function newGame(e) {
    if(game == true) {
        pointer(e).innerText = xPlayer();
        game = false;
    } else if (game == false) {
        pointer(e).innerText = oPlayer();
        game = true;
    }
}

// Partes para corrigir:
// 1. Ao clicar nas linhas o table não sumir
// 2. Fazer identificar as formas de vitória
// 3. Não poder mudar o simbolo
// 4. 