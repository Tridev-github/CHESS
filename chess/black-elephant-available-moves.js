function black_ele_avail_moves(){
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
                    else if(String(button.dataset.piece)[0] === 'w'){
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
                }
            });
}