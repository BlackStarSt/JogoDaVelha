const box = document.getElementById('box').addEventListener('click', () => {
    for (let i = 1; i <= 9; i++) {
        for (let x = 1; x <= i; x++) {
            if(x == i) {
                console.log(x)
            } else {
                break;
            }
        }
    }
})