document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('button').forEach((tr)=>{
        if(tr.dataset.ycoord !== undefined && tr.dataset.xcoord !== undefined){
            if((Number(tr.dataset.xcoord))%2!==(Number(tr.dataset.ycoord)%2)){
                tr.style.backgroundColor = "#808080";
            }
        }
    });
});