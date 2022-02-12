function white_min_avail_moves(){
    let temp_for_white_bishop = 0;
    document.querySelectorAll('button').forEach(ele=>ele.disabled=false);
    document.querySelectorAll('button').forEach(button=>{
                if(selected.dataset.xcoord!==button.dataset.xcoord && selected.dataset.ycoord!==button.dataset.ycoord){
                    button.disabled = true;
                    selected.disabled = true;
                }
                else{
                    selected.disabled = true;
                    if(String(button.dataset.piece)[0] === 'b'){
                        if(button.dataset.xcoord === selected.dataset.xcoord){
                            if(button.dataset.ycoord > selected.dataset.ycoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.xcoord === selected.dataset.xcoord && b.dataset.ycoord > button.dataset.ycoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                            if(button.dataset.ycoord < selected.dataset.ycoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.xcoord === selected.dataset.xcoord && b.dataset.ycoord < button.dataset.ycoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                        }
                        if(button.dataset.ycoord === selected.dataset.ycoord){
                            if(button.dataset.xcoord > selected.dataset.xcoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.ycoord === selected.dataset.ycoord && b.dataset.xcoord > button.dataset.xcoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                            if(button.dataset.xcoord < selected.dataset.xcoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.ycoord === selected.dataset.ycoord && b.dataset.xcoord < button.dataset.xcoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                        }
                    }
                    else if(String(button.dataset.piece)[0] === 'w'){
                        if(button.dataset.xcoord === selected.dataset.xcoord){
                            if(button.dataset.ycoord > selected.dataset.ycoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.xcoord === selected.dataset.xcoord && b.dataset.ycoord >= button.dataset.ycoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                            if(button.dataset.ycoord < selected.dataset.ycoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.xcoord === selected.dataset.xcoord && b.dataset.ycoord <= button.dataset.ycoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                        }
                        if(button.dataset.ycoord === selected.dataset.ycoord){
                            if(button.dataset.xcoord > selected.dataset.xcoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.ycoord === selected.dataset.ycoord && b.dataset.xcoord >= button.dataset.xcoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                            if(button.dataset.xcoord < selected.dataset.xcoord){
                                document.querySelectorAll("button").forEach(b=>{
                                    if(b.dataset.ycoord === selected.dataset.ycoord && b.dataset.xcoord <= button.dataset.xcoord){
                                        b.disabled = true;
                                    }
                                });
                            }
                        }
                    }

                }
            });
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
                if(String(button.dataset.piece)[0] === 'w'){
                    button.disabled = true;
                }
                if(String(button.dataset.piece)[0] === 'b'){
                    if(temp_for_white_bishop==0){
                        button.disabled = false;
                        temp_for_white_bishop++;
                    }
                }
            }
        }
    });
}