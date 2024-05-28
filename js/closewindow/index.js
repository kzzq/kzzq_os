var settingsWindow = document.getElementById("draggablewindow_settings");

function closesettings() {
    settingsWindow.style.animation = "0.5s windowdisappear cubic-bezier(.79,.14,.15,.86)";
    setTimeout(() => {
        settingsWindow.style.display = "none";
        settingsWindow.classList.toggle("show");
      }, 500);
      if (settingsWindow.style.display = "none") {
              settingsWindow.style.display = "block";
              settingsWindow.classList.add("show");
       }
}