function openGift() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("surprise").style.display = "block";
    
    document.getElementById("bgMusic").play();

    createHearts();

}

function createHearts() {

    setInterval(function () {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.className = "heart";

        heart.style.left = Math.random() * window.innerWidth + "px";

        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6000);

    }, 300);

}
