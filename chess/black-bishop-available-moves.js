function black_bis_avail_moves(){
    let temp_for_black_bishop = 0;
    document.querySelectorAll('button').forEach(ele=>{ele.disabled=true;});
    document.querySelectorAll("button").forEach(button=> {
        let ans_bis_avail_moves = (selected.dataset.xcoord - button.dataset.xcoord) / (selected.dataset.ycoord - button.dataset.ycoord);
        if ((ans_bis_avail_moves === 1 || ans_bis_avail_moves === -1) && (button.dataset.piece === undefined || button.dataset.piece === "")) {
            button.disabled = false;
        }
    });
    document.querySelectorAll("button").forEach(button=>{
        let ans_bis_avail_moves = (selected.dataset.xcoord-button.dataset.xcoord)/(selected.dataset.ycoord-button.dataset.ycoord);
        if((ans_bis_avail_moves === 1 || ans_bis_avail_moves === -1) && (button.dataset.piece === undefined || button.dataset.piece === "")){}
        else if(ans_bis_avail_moves === 1 || ans_bis_avail_moves === -1){
            if(String(button.dataset.piece)[0] === 'w' || String(button.dataset.piece)[0] === 'b'){
                document.querySelectorAll('button').forEach(b=>{
                    let ans_bis_avail_moves_loop = (button.dataset.xcoord-b.dataset.xcoord)/(button.dataset.ycoord-b.dataset.ycoord);
                    if(ans_bis_avail_moves_loop === ans_bis_avail_moves){
                        if(selected.dataset.xcoord < button.dataset.xcoord && selected.dataset.ycoord < button.dataset.ycoord){
                            if(button.dataset.xcoord < b.dataset.xcoord && button.dataset.ycoord < b.dataset.ycoord){
                                b.disabled = true;
                            }
                        }
                        if(selected.dataset.xcoord < button.dataset.xcoord && selected.dataset.ycoord > button.dataset.ycoord){
                            if(button.dataset.xcoord < b.dataset.xcoord && button.dataset.ycoord > b.dataset.ycoord){
                                b.disabled = true;
                            }
                        }
                        if(selected.dataset.xcoord > button.dataset.xcoord && selected.dataset.ycoord < button.dataset.ycoord){
                            if(button.dataset.xcoord > b.dataset.xcoord && button.dataset.ycoord < b.dataset.ycoord){
                                b.disabled = true;
                            }
                        }
                        if(selected.dataset.xcoord > button.dataset.xcoord && selected.dataset.ycoord > button.dataset.ycoord){
                            if(button.dataset.xcoord > b.dataset.xcoord && button.dataset.ycoord > b.dataset.ycoord){
                                b.disabled = true;
                            }
                        }
                    }
                });
                if(String(button.dataset.piece)[0] === 'b'){
                    button.disabled = true;
                }
                if(String(button.dataset.piece)[0] === 'w'){
                    if(temp_for_black_bishop==0){
                        button.disabled = false;
                    }
                }
            }
        }
    });
}