
let pencil=document.querySelector("#pencil");
let eraser=document.querySelector("#eraser");
let undo=document.querySelector("#undo");
let redobtn=document.querySelector("#redo");
let pencilOptions=document.querySelector("#pencil-options");
let eraserOptions=document.querySelector("#eraser-options");
let black=document.querySelector("#black");
let red=document.querySelector("#red");
let blue=document.querySelector("#blue");
let green=document.querySelector("#green");
let pencilSlider = document.querySelector("#pencil-size");
let eraserSlider = document.querySelector("#eraser-size");
let activeTool="pencil";
ctx.strokeStyle="black";
ctx.lineWidth=8;
let pencilWidth=1;
let eraserWidth=1;
pencil.addEventListener("click",function(){
    if(activeTool=="pencil"){
        if(pencilOptions.classList.contains("active")){
            pencilOptions.classList.remove("active");
        }else{
            pencilOptions.classList.add("active");
        }
    }else{
        activeTool="pencil";
        ctx.strokeStyle="black";
        ctx.lineWidth=pencilWidth;
        pencil.classList.add("active-tool");
        eraser.classList.remove("active-tool");
        eraserOptions.classList.remove("active");
    }
});
eraser.addEventListener("click",function(){
    if(activeTool=="eraser"){
        if(eraserOptions.classList.contains("active")){
            eraserOptions.classList.remove("active");
        }else{
            eraserOptions.classList.add("active");
        }
    }else{
        activeTool="eraser";
        ctx.strokeStyle="whitesmoke";
        ctx.lineWidth=eraserWidth;
        eraser.classList.add("active-tool");
        pencil.classList.remove("active-tool");
        pencilOptions.classList.remove("active");
    }
});
black.addEventListener("click",function(){
    ctx.strokeStyle="black";
})
red.addEventListener("click",function(){
    ctx.strokeStyle="#c0392b";
})
blue.addEventListener("click",function(){
    ctx.strokeStyle="#2980b9";
})
green.addEventListener("click",function(){
    ctx.strokeStyle="#27ae60";
})
undo.addEventListener("click",function(){
    undoPoints();
});
redobtn.addEventListener("click",function(){
    redoLines();
});
pencilSlider.addEventListener("change" , function(){
    // console.log(pencilSlider.value);
    ctx.lineWidth = pencilSlider.value;
    pencilWidth = pencilSlider.value;
})
eraserSlider.addEventListener("change" , function(){
    // console.log(pencilSlider.value);
    ctx.lineWidth = eraserSlider.value;
    eraserWidth = eraserSlider.value;
})
