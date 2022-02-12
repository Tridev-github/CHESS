function white_hor_avail_moves(){
    document.querySelectorAll('button').forEach(ele=>{
        ele.disabled = true;
    });
    document.querySelectorAll("button").forEach(button=>{
        let val1_WH=(Number(selected.dataset.xcoord) - Number(button.dataset.xcoord));
        let val2_WH=(Number(selected.dataset.ycoord) - Number(button.dataset.ycoord));
        if(String(button.dataset.piece)[0] !== 'w'){
            if(( val1_WH === 2 || val1_WH === -2) && (val2_WH === 1 || val2_WH === -1)){
            button.disabled = false;
            }
            if(( val1_WH === 1 || val1_WH === -1) && (val2_WH === 2 || val2_WH === -2)){
                button.disabled = false;
            }
        }
    });
}