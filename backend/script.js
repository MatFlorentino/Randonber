function raffle(){
    const min = document.getElementById('inf').value
    const sup = document.getElementById('sup').value
    
        var result = 0

    do(result = Math.floor(Math.random() * sup + 1))
    while(result < min)

    document.getElementById('resultado').innerText = result

}

document.addEventListener('keydown', (event) => {

    if(event.key =='Enter'){
        raffle()
    }


})