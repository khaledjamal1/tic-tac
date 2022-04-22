
let canvas = new Array(9).fill(null)


const player = (name,marker) =>{
    return {name,marker}
}

const player1 = player("khaled","x")
const player2 = player("maryam","o")
const can = document.querySelector(".gameboard1")
let currentplayer  = player1

const game= (()=>{
    for (let i = 0; i<9; i++){
        const div = document.createElement("div")
        div.classList.add("tile")
        div.id =(`${i}`)
        can.appendChild(div)
    }
    const changeplayer =()=>{
        if (currentplayer === player1){
            currentplayer = player2
        } else if(currentplayer=== player2){
            currentplayer = player1
        }
    }
    function makemove(i,marker){
        canvas[i]= marker
    }
    function checkwin(){
        if(canvas[0] === canvas[1] && canvas[1] === canvas[2] && canvas[0] !== null){ 
            alert(`${currentplayer.name} won the round`)
        } else if(canvas[3] === canvas[4] && canvas[4] === canvas[5] && canvas[3] !== null){
             alert(`${currentplayer.name} won the round`)
        } else if(canvas[6] === canvas[7] && canvas[7] === canvas[8] && canvas[6] !== null){
             alert(`${currentplayer.name} won the round`)
        } else if(canvas[0] === canvas[3] && canvas[3] === canvas[6] && canvas[0] !== null){
            alert(`${currentplayer.name} won the round`)
        } else if(canvas[1] === canvas[4] && canvas[4] === canvas[7] && canvas[1] !== null){
             alert(`${currentplayer.name} won the round`)
        } else if(canvas[2] === canvas[5] && canvas[5] === canvas[8] && canvas[2] !== null){
             alert(`${currentplayer.name} won the round`)
        } else if(canvas[0] === canvas[4] && canvas[4] === canvas[8] && canvas[0] !== null){
             alert(`${currentplayer.name} won the round`)
        }else if(canvas[2] === canvas[4] && canvas[4] === canvas[6] && canvas[2] !== null){
             alert(`${currentplayer.name} won the round`)
        } else if (canvas[0] !== null && canvas[1] !== null && canvas[2] !== null &&  canvas[3] !== null && canvas[4] !== null && canvas[5] !==null && canvas[6] !== null && canvas[7] !== null &&  canvas[8] !== null){
             alert("tie")
        }
    }
    const can1 = document.querySelectorAll(".tile")
    can1.forEach(tile => tile.addEventListener("click", (e)=>{
        if(tile.innerText.trim()!="") return
        tile.innerText = currentplayer.marker
        let i = parseInt(e.target.id)
        let marker = currentplayer.marker
        makemove(i,marker)
        
        console.log(currentplayer.name,"chose")
        console.log(canvas)
        console.log(parseInt(e.target.id))
        checkwin()
        
        changeplayer()
    }))
    
})



game()
