//detact 'mouse in canvas'
const canvas = document.querySelector('#jsCanvas')
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.controls__color')
const range = document.querySelector('#jsRange')
const mode = document.querySelector('#jsMode');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle= "#2c2c2c"
ctx.fillStyle="#2c2c2c"
ctx.lineWidth = 2.5;
let painting = false;
let filling = false;

function stopPainting(){
    painting=false
}
function startPainting(){
    painting = true
}
canvas.addEventListener('mousemove',(e)=>{
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y)
        ctx.stroke()
    }
})
canvas.addEventListener('mousedown',(e)=>{
    startPainting()
})
canvas.addEventListener('mouseup',(e)=>{
    stopPainting()
})
canvas.addEventListener('mouseleave',(e)=>{
    stopPainting()
})
canvas.addEventListener('click',(e)=>{
    if(filling === false){
    }else {
        ctx.fillRect(0, 0, 700, 700)

    }
})
range.addEventListener("input",(e)=>{
    const size = e.target.value
    ctx.lineWidth = size
})


colors.forEach(color => 
    color.addEventListener('click',(e)=>{
        const target = e.target.style.backgroundColor;
        ctx.strokeStyle = target;
        ctx.fillStyle = target;
    }))


    mode.addEventListener("click",()=>{
        if(filling=== true){
            filling = false
            mode.innerText = 'Fill'
        } else{
            filling = true
            mode.innerText = 'Paint'
            ctx.fillStyle = ctx.fillStyle
        }
    })