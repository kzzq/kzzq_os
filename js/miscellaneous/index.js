const text = "0.283_5892";
const versionletter = "";
document.getElementById("vernumb").textContent = text, versionletter;
document.getElementById("vernumb2").textContent = text, versionletter;
document.getElementById("vernumb3").textContent = text, versionletter;

function toggle_startbutton1() {
    document.getElementById("startbut").style.margin = '-15px -15px';
}
function toggle_startbutton2() {
    document.getElementById("startbut").style.margin = '-25px -25px';
}
function toggle_smalltitlebar() {
    document.getElementById("titlebar").classList.toggle("small");
        }
function toggle_transparenttaskbar() {
    document.getElementById("tb").classList.toggle("transparent");
}
        function openkzqver() {
    document.getElementById("startyMenu").classList.remove("show");
    document.getElementById("draggablewindow_kzqver").classList.toggle("show");
        }
        function togglekzqver_ok() {
            document.getElementById("draggableWindow").classList.remove("show");
        }
        function opensettings() {
            document.getElementById("startyMenu").classList.remove("show");
            document.getElementById("draggablewindow_settings").classList.toggle("show");
        }

        function getQueryParams() {
            const params = new URLSearchParams(window.location.search);
            return Object.fromEntries(params.entries());
        }

function toggle_theme_alpha() {
    var versionletter = "a";
    document.getElementById("draggablewindow_settings").style.background = 'var(--bg-alpha-subpart2)';
    document.getElementById("titlebar").style.background = 'var(--bg-alpha-subpart1)';
    document.getElementById("body-bg").style.background = 'var(--bg-alpha)';
    document.getElementById("startbut").style.background = 'var(--bg-alpha)';
    document.title = "kzzQ | α";
    document.getElementById('bg-text').textContent = 'α';
}
function toggle_theme_beta() {
    var versionletter = "b";
    document.getElementById("draggablewindow_settings").style.background = 'var(--bg-beta-subpart2)';
    document.getElementById("titlebar").style.background = 'var(--bg-beta-subpart1)';
    document.getElementById("body-bg").style.background = 'var(--bg-beta)';
    document.getElementById("startbut").style.background = 'var(--bg-beta)';
    document.title = "kzzQ | β";
    document.getElementById('bg-text').textContent = 'β';
    document.getElementById("vernumb").textContent = text, versionletter;
    document.getElementById("vernumb2").textContent = text, versionletter;
}
function toggle_theme_default() {
    var versionletter = "";
    document.getElementById("draggablewindow_settings").style.background = 'var(--bg-default-subpart2)';
    document.getElementById("titlebar").style.background = 'var(--bg-default-subpart1)';
    document.getElementById("body-bg").style.background = 'var(--bg-default)';
    document.getElementById("startbut").style.background = 'var(--startbutton-bg)';
    document.title = "kzzQ";
    document.getElementById('bg-text').textContent = '';
    document.getElementById("vernumb").textContent = text, versionletter;
    document.getElementById("vernumb2").textContent = text, versionletter;
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.getElementById('settingsForm');
    const checkboxes = settingsForm.querySelectorAll('input[type="checkbox"]', 'input[type="radio"]');
    const smalltitlebarToggle = document.getElementById('smalltitlebar');
    const transparenttaskbarToggle = document.getElementById('transparenttaskbar');
    const displayOn = document.getElementById('startbutton2');
    const displayOff = document.getElementById('startbutton1');

    // Load saved settings
    const savedDisplaySetting = localStorage.getItem('toggleDisplay');
    if (savedDisplaySetting) {
        if (savedDisplaySetting === '1') {
            displayOn.checked = true;
            document.getElementById("startbut").style.margin = '-15px -15px';
            enableDragging(colorBox);
        } else if (savedDisplaySetting === '2') {
            displayOff.checked = true;
            document.getElementById("startbut").style.margin = '-25px -25px';
        }
    }

    checkboxes.forEach(checkbox => {
        const savedValue = localStorage.getItem(checkbox.id);
        if (savedValue !== null) {
            checkbox.checked = JSON.parse(savedValue);
        }
    });


    const smalltitlebarToggleState = JSON.parse(localStorage.getItem('smalltitlebar'));
    if (smalltitlebarToggleState) {
        document.getElementById("titlebar").classList.toggle("small");
    }
    const transparenttaskbarToggleState = JSON.parse(localStorage.getItem('transparenttaskbar'));
    if (transparenttaskbarToggleState) {
        document.getElementById("tb").classList.toggle("transparent");
    }


    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        checkboxes.forEach(checkbox => {
            localStorage.setItem(checkbox.id, JSON.stringify(checkbox.checked));
        });
        if (smalltitlebarToggle.checked) {
            document.getElementById("titlebar").classList.add("small");
        } else {
            document.getElementById("titlebar").classList.remove("small");
        }
        if (transparenttaskbarToggle.checked) {
            document.getElementById("tb").classList.add("transparent");
        } else {
            document.getElementById("tb").classList.remove("transparent");
        }
        if (displayOn.checked) {
            localStorage.setItem('togglesbStyle', '1');
            document.getElementById("startbut").style.margin = '-15px -15px';
        } else if (displayOff.checked) {
            localStorage.setItem('togglesbStyle', '2');
            document.getElementById("startbut").style.margin = '-25px -25px';
        }
        alert('Settings saved!');
    });
});
