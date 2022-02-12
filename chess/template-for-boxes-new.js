let varForRow = 0;

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('td').forEach((tr)=>{
        
        if(varForRow===1) {
            if(tr.className!=="useless"){
                tr.style.backgroundColor = "#808080";
            }
            varForRow--;
        }
        else{
            varForRow++;
        }
    });
});