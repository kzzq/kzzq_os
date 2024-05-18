        // script.js
        document.addEventListener('DOMContentLoaded', () => {
            const draggableWindow = document.getElementById('draggablewindow_settings');
            const titleBar = document.getElementById('titlebar');
        
            let isDragging = false;
            let isResizing = false;
            let dragStartX, dragStartY, startX, startY, startWidth, startHeight;
        
            // Dragging functionality
            titleBar.addEventListener('mousedown', (e) => {
                isDragging = true;
                dragStartX = e.clientX;
                dragStartY = e.clientY;
                startX = draggableWindow.offsetLeft;
                startY = draggableWindow.offsetTop;
                document.addEventListener('mousemove', onDrag);
                document.addEventListener('mouseup', stopDrag);
            });
        
            function onDrag(e) {
                if (!isDragging) return;
                const dx = e.clientX - dragStartX;
                const dy = e.clientY - dragStartY;
                draggableWindow.style.left = `${startX + dx}px`;
                draggableWindow.style.top = `${startY + dy}px`;
            }
        
            function stopDrag() {
                isDragging = false;
                document.removeEventListener('mousemove', onDrag);
                document.removeEventListener('mouseup', stopDrag);
            }
        
            function onResize(e) {
                if (!isResizing) return;
                const dx = e.clientX - dragStartX;
                const dy = e.clientY - dragStartY;
                draggableWindow.style.width = `${startWidth + dx}px`;
                draggableWindow.style.height = `${startHeight + dy}px`;
            }
        
            function stopResize() {
                isResizing = false;
                document.removeEventListener('mousemove', onResize);
                document.removeEventListener('mouseup', stopResize);
            }
        });