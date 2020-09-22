let canvas=document.querySelector("#canvas");
let ctx=canvas.getContext('2d');
let db=[];
let redoPoints=[];
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
ctx.strokeStyle="#dfe6e9";
window.addEventListener("resize", function(){
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    if(db.length>0){
        redraw();
    }
})
function redraw(){
    //console.log("called");
    for(let i=0;i<db.length;i++){
        ctx.strokeStyle=db[i].color;
        ctx.lineWidth=db[i].width;
        if(db[i].id=="md"){
            let x=db[i].xc;
            let y=db[i].yc;
            ctx.beginPath();
            ctx.moveTo(x,y);
        }else{
            let x=db[i].xc;
            let y=db[i].yc;
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    }
    ctx.closePath();
}
let isDown=false;
canvas.addEventListener("mousedown",function(event){
    let {top}=canvas.getBoundingClientRect();
    let x=event.clientX;
    let y=event.clientY-top;
    let point={
        color:ctx.strokeStyle,
        width:ctx.lineWidth,
        xc: x,
        yc: y,
        id:"md"
    }
    db.push(point);
    ctx.beginPath();
    ctx.moveTo(x,y);
    isDown=true;
})
canvas.addEventListener("mousemove",function(event){
    if(isDown==true){
        let {top}=canvas.getBoundingClientRect();
        let x=event.clientX;
        let y=event.clientY-top;
        let point={
            color:ctx.strokeStyle,
            width:ctx.lineWidth,
            xc: x,
            yc: y,
            id:"mm"
        }
        db.push(point);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
})
canvas.addEventListener("mouseup",function(event){
    isDown=false;
    ctx.closePath();
})
function undoPoints(){
    let redo=[];
    if(db.length>=2){
        let idx=db.length-1;
            while(db[idx].id!="md"){
                redo.unshift(db.pop());
                idx--;
            }
        redo.unshift(db.pop());
        }
        redoPoints.push(redo);
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        redraw();
};
function redoLines(){
    if(redoPoints.length>=1){
        let redoPoint=redoPoints.pop();
        for(let i=0;i<redoPoint.length;i++){
            db.push(redoPoint[i]);
        }
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        redraw();
    }

}