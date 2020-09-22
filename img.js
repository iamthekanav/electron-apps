let upload = document.querySelector("#upload");
let download= document.querySelector("#download");
let targetimg;
upload.addEventListener("change", function (e) {
    let reader = new FileReader();
    reader.readAsDataURL(document.getElementById("imageupload").files[0]);
    reader.onload = function (e) {
        targetimg=e.target.result;
        let imagePad=document.createElement("div");
        let imagenav=document.createElement("div");
        let imageClose=document.createElement("div");
        let imageMinimize=document.createElement("div");
        let imageContent=document.createElement("div");
        let img=document.createElement("img");  
        
        img.setAttribute("src",targetimg);
        img.setAttribute("id","imageuploaded");
        imagePad.setAttribute("class","tobeuploaded");
        imagenav.setAttribute("class","image-nav");
        imageClose.setAttribute("class","img-close");
        imageMinimize.setAttribute("class","nav-minimize");
        imageContent.setAttribute("class","img-content");
        imageClose.textContent="   x   "
        imageMinimize.textContent="  --  "

        imagePad.append(imagenav);
        imagenav.append(imageMinimize);
        imagenav.append(imageClose);
        imagePad.append(imageContent);
        imageContent.append(img);
        document.body.append(imagePad);

        imageClose.addEventListener("click",function(){
            imagePad.remove();
        })
        let isimageOpen=true;
        imageMinimize.addEventListener("click",function(){
        if(isimageOpen){
            imageContent.style.display="none";
            isimageOpen=false
        }
        else{
            imageContent.style.display="block";
            isimageOpen=true;
        }
    })
    let isimageHolded=false;
    let imginitialX;
    let imginitialY;
    imagenav.addEventListener("mousedown",function(e){
        isimageHolded=true;
        imginitialX=e.clientX;
        imginitialY=e.clientY;
    })
    window.addEventListener("mousemove",function(e){
        if(isimageHolded){
            let imgfinalX=e.clientX;
            let imgfinalY=e.clientY;
            let dx=imgfinalX-imginitialX;
            let dy=imgfinalY-imginitialY;
            let{top,left}=imagePad.getBoundingClientRect();
            imagePad.style.top=top+dy+"px";
            imagePad.style.left=left+dx+"px";
            imginitialX=imgfinalX;
            imginitialY=imgfinalY;
        }
    })
    window.addEventListener("mouseup",function(e){
        isPadHolded=false;
        isimageHolded=false;
    })
    

    };   //read the image file as a data URL. 
    
  });
//   <div class="tobeuploaded">
//         <div class="image-nav">
//             <div class="nav-minimize"></div>
//             <div class="img-close"></div>
//         </div>
//         <div class="img-content">
//             <img src="NewIcons/Red_Pencil.svg" id="imageuploaded">
//         </div>
//     </div>
download.addEventListener("click" , function(){
    let a = document.createElement("a");
    let url = canvas.toDataURL("image/png");
    a.setAttribute("href" , url);
    a.setAttribute("download" , "file.png");
    a.click();
    a.remove();
})

