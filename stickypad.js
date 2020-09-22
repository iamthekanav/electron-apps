
let stickybtn=document.querySelector("#sticky");
stickybtn.addEventListener("click",function(){
    let stickyPad=document.createElement("div");
    let nav=document.createElement("div");
    let closeBtn=document.createElement("div");
    let minimize=document.createElement("div");
    let content=document.createElement("div");
    let textarea=document.createElement("textarea");

    textarea.setAttribute("cols" , "30");
    textarea.setAttribute("rows" , "10");
    textarea.setAttribute("id" , "notes");
    stickyPad.setAttribute("class" , "stickyPad");
    nav.setAttribute("class" , "nav");
    minimize.setAttribute("class" , "minimize");
    closeBtn.setAttribute("class","close");
    closeBtn.textContent="   x   "
    minimize.textContent=" -- "
    
    content.setAttribute("class" , "content");

    stickyPad.append(nav);
    nav.append(minimize);
    nav.append(closeBtn);
    stickyPad.append(content);
    content.append(textarea);
    document.body.append(stickyPad);

    closeBtn.addEventListener("click" , function(){
        stickyPad.remove();
    })
    let isPadOpen=true;
    minimize.addEventListener("click",function(){
        if(isPadOpen){
            content.style.display="none";
            isPadOpen=false
        }
        else{
            content.style.display="block";
            isPadOpen=true;
        }
    })
    let isPadHolded=false;
    let initialX;
    let initialY;
    nav.addEventListener("mousedown",function(e){
        isPadHolded=true;
        initialX=e.clientX;
        initialY=e.clientY;
    })
    window.addEventListener("mousemove",function(e){
        if(isPadHolded){
            let finalX=e.clientX;
            let finalY=e.clientY;
            let dx=finalX-initialX;
            let dy=finalY-initialY;
            let{top,left}=stickyPad.getBoundingClientRect();
            stickyPad.style.top=top+dy+"px";
            stickyPad.style.left=left+dx+"px";
            initialX=finalX;
            initialY=finalY;
        }
    })
    window.addEventListener("mouseup",function(e){
        isPadHolded=false;
    })
})