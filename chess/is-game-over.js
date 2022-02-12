function check_game_over(){
    let check_if_white_won=0;
    let check_if_black_won=0;
    document.querySelectorAll("button").forEach(button=>{
        if(button.dataset.piece === "white-kin"){
            check_if_white_won++;
        }
        if(button.dataset.piece === "black-kin"){
            check_if_black_won++;
        }
    });
    if(check_if_white_won === 0){
        let lable_if_won = document.createElement("li");
        lable_if_won.innerHTML = "BLACK WINS";
        let win_list = document.getElementById("win_label");
        win_list.append(lable_if_won);
        document.querySelectorAll("button").forEach(b=>{
            b.disabled = true;
        })
    }
    if(check_if_black_won === 0){
        let lable_if_won = document.createElement("li");
        lable_if_won.innerHTML = "WHITE WINS";
        let win_list = document.getElementById("win_label");
        win_list.append(lable_if_won);
        document.querySelectorAll("button").forEach(b=>{
            b.disabled = true;
        })
    }
}
