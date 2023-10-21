function openPopup(popupId) {

    var content = document.getElementById("content");
    content.style.opacity = 0.5;

    var popup = document.getElementById(popupId);
    popup.style.display = "block";

    // Закрываем окно при клике в любом месте
    popup.onclick = function() {
        popup.style.display = "none";
        content.style.opacity = 1;
    };
}

document.getElementById("openPopup1").addEventListener("click", function() {
    openPopup("popup_1");
});

document.getElementById("openPopup2").addEventListener("click", function() {
    openPopup("popup2");
});

document.getElementById("openPopup3").addEventListener("click", function() {
    openPopup("popup3");
});
