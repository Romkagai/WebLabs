function openPopup(popupId) {
    var content = document.getElementById("content");
    content.style.opacity = 0.5;

    var popup = document.getElementById(popupId);
    popup.style.display = "block";

    var popup_overlay = document.getElementById("popup_overlay")
    popup_overlay.style.display = "block";

    popup_overlay.addEventListener("click", function() {
        popup.style.display = "none";
        popup_overlay.style.display = "none";
        content.style.opacity = 1;
    });
}

document.getElementById("open_popup_1").addEventListener("click", function() {
    openPopup("popup_1");
});

document.getElementById("open_popup_2").addEventListener("click", function() {
    openPopup("popup_2");
});

document.getElementById("open_popup_3").addEventListener("click", function() {
    openPopup("popup_3");
});
