//detact 'mouse in canvas'
const canvas = document.querySelector('#jsCanvas')
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.controls__color')

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle= "#2c2c2c"
ctx.lineWidth = 2.5;
let painting = false;

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
    paint()

})
canvas.addEventListener('mouseup',(e)=>{
    stopPainting()
    paint()
})
canvas.addEventListener('mouseleave',(e)=>{
    stopPainting()
})

function paint(){
    if(painting){
        console.log('paint your dream!')
    } else{
        console.log('painting is end')
    }
}


console.log(colors)
colors.forEach(color => 
    color.addEventListener('click',(e)=>{
        const target = e.target.style.backgroundColor;
        ctx.strokeStyle = target;
    }))

