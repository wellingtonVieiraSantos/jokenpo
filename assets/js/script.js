const player = document.querySelector('.img')
const rival = document.querySelector('.img2')
const btn = document.querySelector('.btn')
const resultado = document.querySelector('.resultado')
const placarPlayer = document.querySelector('.player')
const placarCpu= document.querySelector('.cpu')
const divRes = document.querySelector('.res')

const placarFinal = 5
btn.disabled = false

let placarPlayer1 = placarPlayer2 = 0

const cpu = ['pedra', 'papel', 'tesoura']
let PLAYER_CHOICE = 'pedra'
let CPU_CHOICE = Math.floor(Math.random()*3)

btn.addEventListener('click', ()=>{
    CPU_CHOICE = Math.floor(Math.random()*3)
    rival.classList.add(cpu[CPU_CHOICE])
    rival.classList.add('img')
    rival.classList.remove('img2')
    btn.disabled = true
    btn.innerText = 'Aguarde'
    setTimeout(()=>{
        rival.classList.remove(cpu[CPU_CHOICE])
        rival.classList.remove('img')
        rival.classList.add('img2')
        btn.disabled = false
        btn.innerText = 'Jogar'
    },2000)
    if((CPU_CHOICE == 0 && PLAYER_CHOICE == 'tesoura') 
    || (CPU_CHOICE == 2 && PLAYER_CHOICE == 'papel')
    || (CPU_CHOICE == 1 && PLAYER_CHOICE == 'pedra')){
        resultado.innerText = 'Você Perdeu!'
        placarPlayer2++
    }else if(cpu[CPU_CHOICE] == PLAYER_CHOICE){
        resultado.innerText = 'Empate!'
    }
    else{
        resultado.innerText = 'Você Ganhou!'
        placarPlayer1++
    }
    placarPlayer.innerText = placarPlayer1
    placarCpu.innerText = placarPlayer2
    verificaVencedor()
})

const verificaVencedor = () =>{
    if(placarPlayer1 == placarFinal){
        resultado.innerText = `Player 1 Ganhou, Parabéns! \n
        Placar: ${placarPlayer1} vs ${placarPlayer2}`
        removeGame()
    }else if(placarPlayer2 == placarFinal){
        resultado.innerText = `Player 2 Ganhou, =( ! \n
        Placar: ${placarPlayer2} vs ${placarPlayer1}`
        removeGame()
    }
}

const removeGame = () =>{
    const container = document.querySelector('.container')
    player.parentNode.remove()
    btn.remove()
    placarCpu.parentNode.parentNode.remove()
    const button = document.createElement('button')
    button.classList.add('recomecar')
    button.innerText = 'Recomeçar'
    button.addEventListener('click', ()=>{

        location.reload()

    })
    container.appendChild(button)
}

player.addEventListener('click', function(){
    if(this.classList.contains('pedra')){
        this.classList.add('papel')
        this.classList.remove('pedra')
        PLAYER_CHOICE = 'papel'
    }
    else if(this.classList.contains('papel')){
        this.classList.add('tesoura')
        this.classList.remove('papel')
        PLAYER_CHOICE = 'tesoura'
    }
    else if(this.classList.contains('tesoura')){
        this.classList.add('pedra')
        this.classList.remove('tesoura')
        PLAYER_CHOICE = 'pedra'
    }
    
})

