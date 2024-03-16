function startTime(duration, display) {
  var time = duration,
    hour,
    minutes,
    seconds;
  setInterval(function () {
    hour = parseInt(time / 3600, 10);
    minutes = parseInt((time % 3600) / 60, 10);
    seconds = parseInt(time % 60, 10);

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hour + ":" + minutes + ":" + seconds;

    if (--time < 0) {
      time = duration;
    }
  }, 1000);
}
window.onload = function () {
  var duration = 3600;
  var display = document.querySelector("#time");
  startTime(duration, display);
};

//

// Seleciona os elementos do primeiro carrossel
const prevButton1 = document.getElementById("prev-slide");
const nextButton1 = document.getElementById("next-slide");
const imageList1 = document.querySelector(".image-list");

// Adiciona ouvintes de eventos ao primeiro carrossel
prevButton1.addEventListener("click", function () {
  scrollLeft(imageList1);
});

nextButton1.addEventListener("click", function () {
  scrollRight(imageList1);
});

// Seleciona os elementos do segundo carrossel
const prevButton2 = document.getElementById("prev-slide-dois");
const nextButton2 = document.getElementById("next-slide-dois");
const imageList2 = document.querySelector(".image-list-dois");

// Adiciona ouvintes de eventos ao segundo carrossel
prevButton2.addEventListener("click", function () {
  scrollLeft(imageList2);
});

nextButton2.addEventListener("click", function () {
  scrollRight(imageList2);
});

// Funções para rolar os carrosséis
function scrollLeft(imageList) {
  imageList.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight(imageList) {
  imageList.scrollBy({ left: 300, behavior: "smooth" });
}
