function black_hor_avail_moves(){
    document.querySelectorAll('button').forEach(ele=>{
        ele.disabled = true;
    });
    document.querySelectorAll("button").forEach(button=>{
        let val1_BH=(Number(selected.dataset.xcoord) - Number(button.dataset.xcoord));
        let val2_BH=(Number(selected.dataset.ycoord) - Number(button.dataset.ycoord));
        if(String(button.dataset.piece)[0] !== 'b'){
            if(( val1_BH === 2 || val1_BH === -2) && (val2_BH === 1 || val2_BH === -1)){
            button.disabled = false;
        }
        if(( val1_BH === 1 || val1_BH === -1) && (val2_BH === 2 || val2_BH === -2)){
            button.disabled = false;
        }
        }
    });
}