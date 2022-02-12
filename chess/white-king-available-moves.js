function white_king_avail_moves(){
    document.querySelectorAll('button').forEach(ele=>{
        ele.disabled = true;
    });
    document.querySelectorAll("button").forEach(button=>{
        let val1_WK=(Number(selected.dataset.xcoord) - Number(button.dataset.xcoord));
        let val2_WK=(Number(selected.dataset.ycoord) - Number(button.dataset.ycoord));
        if(String(button.dataset.piece)[0] !== 'w'){
            if(( val1_WK === 1 || val1_WK === -1) && (val2_WK === 0)){
                button.disabled = false;
            }
            if(( val1_WK === 0 ) && (val2_WK === 1 || val2_WK === -1)){
                button.disabled = false;
            }
            if(( val1_WK === 1 || val1_WK === -1 ) && (val2_WK === 1 || val2_WK === -1)){
                button.disabled = false;
            }
        }
    });
}