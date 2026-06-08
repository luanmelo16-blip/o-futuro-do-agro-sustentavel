// =============================
// CONTROLE DE FONTE
// =============================

let currentSize = 100;

const increaseBtn =
document.getElementById("increaseFont");

const decreaseBtn =
document.getElementById("decreaseFont");

increaseBtn.addEventListener("click", () => {

    currentSize += 10;

    document.body.style.fontSize =
    currentSize + "%";
});

decreaseBtn.addEventListener("click", () => {

    currentSize -= 10;

    document.body.style.fontSize =
    currentSize + "%";
});

// =============================
// DARK MODE
// =============================

const themeBtn =
document.getElementById("toggleTheme");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// =============================
// LEITURA POR VOZ
// =============================

const readBtn =
document.getElementById("startReading");

const stopBtn =
document.getElementById("stopReading");

let speech;

readBtn.addEventListener("click", () => {

    const content =
    document.getElementById("mainContent")
    .innerText;

    speech =
    new SpeechSynthesisUtterance(content);

    speech.lang = "pt-BR";

    window.speechSynthesis.speak(speech);
});

stopBtn.addEventListener("click", () => {

    window.speechSynthesis.cancel();
});

// =============================
// FORMULÁRIO
// =============================

const form =
document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Inscrição enviada com sucesso!"
    );

    form.reset();
});