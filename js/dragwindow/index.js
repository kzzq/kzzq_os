// Get the elements
var draggableDiv1 = document.getElementById('draggablewindow_settings');
var titleBar1 = document.getElementById('titlebar1');
var draggableDiv2 = document.getElementById('draggablewindow_kzqver');
var titleBar2 = document.getElementById('titlebar2');
var showDiv1Button = document.getElementById('opensettings');
var showDiv2Button = document.getElementById('openkzqver');

var offsetX, offsetY, isDragging = false, currentDraggableDiv;


function handleMouseDown(event, draggableDiv) {
    if (getComputedStyle(draggableDiv).display !== 'none') {
        isDragging = true;
        currentDraggableDiv = draggableDiv;
        currentDraggableDiv.style.zIndex = 1000;
        offsetX = event.clientX - draggableDiv.getBoundingClientRect().left;
        offsetY = event.clientY - draggableDiv.getBoundingClientRect().top;
    }
}


function handleMouseMove(event) {
    if (isDragging && currentDraggableDiv) {

        var newX = event.clientX - offsetX;
        var newY = event.clientY - offsetY;


        currentDraggableDiv.style.left = newX + 'px';
        currentDraggableDiv.style.top = newY + 'px';
    }
}


function handleMouseUp() {
    isDragging = false;
    currentDraggableDiv = null;
}


function showDraggableDiv1() {
    draggableDiv1.style.display = 'block';
    draggableDiv1.style.zIndex = 999;
}


function showDraggableDiv2() {
    draggableDiv2.style.display = 'block';
    draggableDiv2.style.zIndex = 999;
}


titleBar1.addEventListener('mousedown', function(event) { handleMouseDown(event, draggableDiv1); });
titleBar2.addEventListener('mousedown', function(event) { handleMouseDown(event, draggableDiv2); });
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);


showDiv1Button.addEventListener('click', showDraggableDiv1);
showDiv2Button.addEventListener('click', showDraggableDiv2);