document.addEventListener("DOMContentLoaded", function() {
    // Play music
    document.getElementById("romanticMusic").play();

    // Generate falling petals
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.getElementById("petals-container").appendChild(petal);
        setTimeout(() => petal.remove(), 5000);
    }
    setInterval(createPetal, 500);

    // Fireflies Effect
    function createFirefly() {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.top = Math.random() * 100 + "vh";
        firefly.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.querySelector(".fireflies-container").appendChild(firefly);
        setTimeout(() => firefly.remove(), 5000);
    }
    setInterval(createFirefly, 800);
});

// Show love message on button click
function propose() {
    document.querySelector(".proposal-container").style.display = "none";
    document.getElementById("loveMessage").style.display = "block";
}
