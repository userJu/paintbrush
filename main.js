//detact 'mouse in canvas'
const canvas = document.querySelector('#jsCanvas')

let painting = false;

function stopPainting(){
    painting=false
}
canvas.addEventListener('mousemove',(e)=>{
    const x = e.offsetX;
    const y = e.offsetY;
})
canvas.addEventListener('mousedown',(e)=>{
    painting = true;
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
