function black_king_avail_moves(){
    document.querySelectorAll('button').forEach(ele=>{
        ele.disabled = true;
    });
    document.querySelectorAll("button").forEach(button=>{
        let val1_BK=(Number(selected.dataset.xcoord) - Number(button.dataset.xcoord));
        let val2_BK=(Number(selected.dataset.ycoord) - Number(button.dataset.ycoord));
        if(String(button.dataset.piece)[0] !== 'b'){
            if(( val1_BK === 1 || val1_BK === -1) && (val2_BK === 0)){
                button.disabled = false;
            }
            if(( val1_BK === 0 ) && (val2_BK === 1 || val2_BK === -1)){
                button.disabled = false;
            }
            if(( val1_BK === 1 || val1_BK === -1 ) && (val2_BK === 1 || val2_BK === -1)){
                button.disabled = false;
            }
        }
    });
}