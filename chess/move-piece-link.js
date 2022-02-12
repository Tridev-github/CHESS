let sync = 0;
let sync_player=0;
let selected;
function available_moves(){
    switch (selected.dataset.piece){
        case "white-ele":
            white_ele_avail_moves();
            break;
        case "black-ele":
            black_ele_avail_moves();
            break;
        case "white-hor":
            white_hor_avail_moves();
            break;
        case "black-hor":
            black_hor_avail_moves();
            break;
        case "white-bis":
            white_bis_avail_moves();
            break;
        case "black-bis":
            black_bis_avail_moves();
            break;
        case "white-min":
            white_min_avail_moves();
            break;
        case "black-min":
            black_min_avail_moves();
            break;
        case "white-kin":
            white_king_avail_moves();
            break;
        case "black-kin":
            black_king_avail_moves();
            break;
        case "white-sol":
            white_sol_avail_moves();
            break;
        case "black-sol":
            black_sol_avail_moves();
            break;
        }
}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('button').forEach(button=>{
            if(button.dataset.piece === undefined || button.dataset.piece === ""){
                button.disabled = true;
            }
            else {
                button.disabled = false;
            }
            document.querySelectorAll("button").forEach(b=>{
                if(String(b.dataset.piece)[0] === 'b'){
                    b.disabled = true;
                }
            });
        });
});

function cal_move(but){
    if(sync===0){
        selected = but;
        available_moves();
        sync++;
    }
    else {
        let temp_to_synchronize;
        but.innerHTML=selected.innerHTML;
        but.dataset.piece = selected.dataset.piece;

        selected.dataset.piece="";
        selected.innerHTML="";
        document.querySelectorAll('button').forEach(button=>{
            if(button.dataset.piece === undefined || button.dataset.piece === ""){
                button.disabled = true;
            }
            else {
                button.disabled = false;
            }
        });
        sync--;
        if(sync_player === 0){
            document.querySelectorAll("button").forEach(b=>{
                if(String(b.dataset.piece)[0] === 'w'){
                    b.disabled = true;
                }
            });
            sync_player++;
        }
        else {
            document.querySelectorAll("button").forEach(b=>{
                if(String(b.dataset.piece)[0] === 'b'){
                    b.disabled = true;
                }
            });
            sync_player--;
        }
        check_game_over();
    }
}
