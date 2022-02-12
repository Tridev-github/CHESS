function white_sol_avail_moves(){
    let temp_for_white_sol_avail_moves=0;
    document.querySelectorAll('button').forEach(ele=>{
        ele.disabled = true;
    });
    document.querySelectorAll("button").forEach(button=>{
        if(selected.dataset.xcoord === '1'){
            if((button.dataset.xcoord === '2')&& button.dataset.ycoord === selected.dataset.ycoord){
                if(button.dataset.piece === "" || button.dataset.piece === undefined) {
                    button.disabled = false;
                }
                else {
                    temp_for_white_sol_avail_moves++;
                }
                
            }
            if(( button.dataset.xcoord === '3')&& button.dataset.ycoord === selected.dataset.ycoord){
                if(button.dataset.piece === "" || button.dataset.piece === undefined) {
                    if(temp_for_white_sol_avail_moves === 0){
                        button.disabled = false;
                    }
                }
                
            }
        }
        else{
            if((button.dataset.xcoord === String(Number(selected.dataset.xcoord)+1))&& button.dataset.ycoord === selected.dataset.ycoord){
                if(button.dataset.piece === "" || button.dataset.piece === undefined){
                    button.disabled = false;
                }
            }
        }
        if(String(Number(selected.dataset.xcoord)+1) === button.dataset.xcoord && (Number(selected.dataset.ycoord) - Number(button.dataset.ycoord)) === 1){
            if(String(button.dataset.piece)[0] === 'b'){
                button.disabled = false;
            }
        }
        if(String(Number(selected.dataset.xcoord)+1) === button.dataset.xcoord && (Number(selected.dataset.ycoord) - Number(button.dataset.ycoord)) === -1){
            if(String(button.dataset.piece)[0] === 'b'){
                button.disabled = false;
            }
        }
    });
}