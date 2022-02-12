document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('button').forEach(button=>{
        switch (button.dataset.piece){
            case "white-ele":
                button.innerHTML = '<img width="40" height="40"  src="https://th.bing.com/th/id/OIP.m0sAXcnfweI9CQNxKR1K3QHaHa?pid=ImgDet&rs=1">';
                break;
            case "white-hor":
                button.innerHTML = '<img width="40" height="40"  src="https://th.bing.com/th/id/OIP.Sp2rebu7PJC7rMd0J7p3AgHaJl?pid=ImgDet&rs=1">';
                break;
            case "white-bis":
                button.innerHTML = '<img width="40" height="40"  src="https://th.bing.com/th/id/R.cfd895b5a8b46a170b810062cff6dfd2?rik=YoDHcdH%2fgbZMPA&riu=http%3a%2f%2fwww.iconexperience.com%2f_img%2fi_collection_png%2f512x512%2fplain%2fchess_piece_bishop.png&ehk=cGneQJBm0OMbItjuUxp9EMFxZ1JzcO0xS3vAmcC3J80%3d&risl=&pid=ImgRaw&r=0">';
                break;
            case "white-min":
                button.innerHTML = '<img width="40" height="40"  src="https://th.bing.com/th/id/OIP.VLzaf-CQnduSdMbboMXGvQAAAA?pid=ImgDet&w=224&h=280&rs=1">';
                break;
            case "white-kin":
                button.innerHTML = '<img width="40" height="40"  src="https://www.pngkit.com/png/detail/301-3017945_chess-piece-queen-king-staunton-chess-set-white.png">';
                break;
            case "white-sol":
                button.innerHTML = '<img width="40" height="40"  src="https://cdn2.vectorstock.com/i/thumbs/12/41/chess-pawn-icon-outline-style-vector-23741241.jpg">';
                break;
            case "black-ele":
                button.innerHTML = '<img width="40" height="40"  src="https://assets.onlinelabels.com/images/clip-art/Anonymous/Anonymous_Chesspiece_-_rook.png">';
                break;
            case "black-hor":
                button.innerHTML = '<img width="40" height="40"  src="https://th.bing.com/th/id/R.43e469e1552d2e2cb33e6b73069c2f30?rik=EWGr9zruxIwb%2bQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fknight-chess-piece-silhouette%2fknight-chess-piece-silhouette-17.png&ehk=hr75LRSmZhbgGK2C0FgDw%2faDgPfNB9yMjvlfl5PWzXc%3d&risl=&pid=ImgRaw&r=0">';
                break;
            case "black-bis":
                button.innerHTML = '<img width="40" height="40"  src="https://as2.ftcdn.net/jpg/00/40/10/35/1000_F_40103517_mErjHSUyLNtoYsAQzV6MXyy3cJjeOB11.jpg">';
                break;
            case "black-min":
                button.innerHTML = '<img width="40" height="40"  src="https://www.clker.com/cliparts/f/d/5/a/1194991252507456104chesspieces-queen.svg.med.png">';
                break;
            case "black-kin":
                button.innerHTML = '<img width="40" height="40"  src="https://th.bing.com/th/id/OIP.imN_g_dGnxssNc1lYg7UtAHaO0?pid=ImgDet&rs=1">';
                break;
            case "black-sol":
                button.innerHTML = '<img width="40" height="40"  src="https://th.bing.com/th/id/OIP.WXFlK2we_ptKlriA5nrmrwAAAA?pid=ImgDet&rs=1">';
                break;    
        }
    });
});