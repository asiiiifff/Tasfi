const button = document.getElementById("openButton");

const confession = document.getElementById("confession");

const messages = document.querySelectorAll(".message");

const finalMessage = document.querySelector(".final");


button.addEventListener("click", function () {

    button.style.display = "none";

    confession.classList.remove("hidden");


    messages.forEach((message, index) => {

        setTimeout(() => {

            message.classList.add("show");

        }, index * 700);

    });


    setTimeout(() => {

        finalMessage.classList.add("show");

        createHearts();

    }, messages.length * 700 + 500);

});


function createHearts() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("span");

            heart.className = "floating-heart";

            heart.textContent = "♡";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                12 + Math.random() * 18 + "px";

            heart.style.animationDuration =
                3 + Math.random() * 2 + "s";

            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 5000);

        }, i * 180);

    }

}