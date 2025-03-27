function loadLikes() {
    document.getElementById('like1').innerText = localStorage.getItem('like1') || 0;
    document.getElementById('like2').innerText = localStorage.getItem('like2') || 0;
    document.getElementById('like3').innerText = localStorage.getItem('like3') || 0;
}

function likeFood(id) {
    let likes = parseInt(localStorage.getItem(id)) || 0;
    likes++;
    localStorage.setItem(id, likes);
    document.getElementById(id).innerText = likes;
}

loadLikes();