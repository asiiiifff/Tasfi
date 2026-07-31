const firstPage = document.getElementById("firstPage");

const openButton = document.getElementById("openButton");

const confessionPage = document.getElementById("confessionPage");

const messages = document.querySelectorAll(".message");

const finalMessage = document.querySelector(".final");

const questionButton = document.getElementById("questionButton");

const questionPage = document.getElementById("questionPage");

const question = document.querySelector(".question");

const answers = document.querySelector(".answers");

const answerButtons = document.querySelectorAll(".answer");

const loveButton = document.getElementById("loveButton");

const lovePage = document.getElementById("lovePage");

const bigLove = document.querySelector(".big-love");

const loveSticker = document.querySelector(".love-sticker");

const backButton = document.getElementById("backButton");


/* =========================
   PAGE 1 → CONFESSION PAGE
========================= */

openButton.addEventListener("click", function () {

    firstPage.classList.add("hidden");

    confessionPage.classList.remove("hidden");

    messages.forEach((message, index) => {

        setTimeout(() => {

            message.classList.add("show");

        }, index * 700);

    });


    /* Show final confession */

    setTimeout(() => {

        finalMessage.classList.add("show");

    }, messages.length * 700 + 500);


    /* Show next button */

    setTimeout(() => {

        questionButton.classList.remove("hidden");

        questionButton.classList.add("show");

    }, messages.length * 700 + 1200);

});


/* =========================
   CONFESSION → QUESTION PAGE
========================= */

questionButton.addEventListener("click", function () {

    confessionPage.classList.add("hidden");

    questionPage.classList.remove("hidden");


    /* Animate question */

    setTimeout(() => {

        question.classList.add("show");

    }, 300);


    /* Animate answers */

    setTimeout(() => {

        answers.classList.add("show");

    }, 700);

});


/* =========================
   ANSWER BUTTONS
========================= */

answerButtons.forEach((answerButton) => {

    answerButton.addEventListener("click", function () {

        const emoji =
            answerButton.getAttribute("data-emoji");


        /* Disable all answers */

        answerButtons.forEach((button) => {

            button.disabled = true;

            button.style.opacity = "0.6";

        });


        /* Highlight selected answer */

        answerButton.style.background = "#c9637d";

        answerButton.style.borderColor = "#c9637d";

        answerButton.style.color = "#ffffff";

        answerButton.style.opacity = "1";


        /* Create floating emoji */

        createFloatingEmojis(emoji);


        /* Show final read button */

        setTimeout(() => {

            loveButton.classList.remove("hidden");

            loveButton.classList.add("show");

        }, 900);

    });

});


/* =========================
   QUESTION → FINAL LOVE PAGE
========================= */

loveButton.addEventListener("click", function () {

    questionPage.classList.add("hidden");

    lovePage.classList.remove("hidden");


    /* Show love message */

    setTimeout(() => {

        bigLove.classList.add("show");

    }, 300);


    /* Show kissing sticker */

    setTimeout(() => {

        loveSticker.classList.add("show");

    }, 700);


    /* Show back button */

    setTimeout(() => {

        backButton.classList.add("show");

    }, 1300);


    /* More hearts/emojis */

    setTimeout(() => {

        createFloatingEmojis("♡");

    }, 500);

});


/* =========================
   BACK TO BEGINNING
========================= */

backButton.addEventListener("click", function () {

    lovePage.classList.add("hidden");

    firstPage.classList.remove("hidden");


    /* Reset confession animations */

    messages.forEach((message) => {

        message.classList.remove("show");

    });


    finalMessage.classList.remove("show");


    questionButton.classList.add("hidden");

    questionButton.classList.remove("show");


    /* Reset question page */

    question.classList.remove("show");

    answers.classList.remove("show");

    loveButton.classList.add("hidden");

    loveButton.classList.remove("show");


    /* Reset answer buttons */

    answerButtons.forEach((button) => {

        button.disabled = false;

        button.style.opacity = "";

        button.style.background = "";

        button.style.borderColor = "";

        button.style.color = "";

    });


    /* Reset final page */

    bigLove.classList.remove("show");

    loveSticker.classList.remove("show");

    backButton.classList.remove("show");

});


/* =========================
   FLOATING EMOJIS
========================= */

function createFloatingEmojis(emoji) {

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            const floating =
                document.createElement("span");

            floating.className =
                "floating-emoji";

            floating.textContent =
                emoji;


            floating.style.left =
                Math.random() * 100 + "vw";


            floating.style.fontSize =
                16 + Math.random() * 20 + "px";


            floating.style.animationDuration =
                6 + Math.random() * 3 + "s";


            document.body.appendChild(floating);


            setTimeout(() => {

                floating.remove();

            }, 9000);

        }, i * 180);

    }

}