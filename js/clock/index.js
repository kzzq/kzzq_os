var timeDisplay = document.getElementById("clock");


    function refreshTime() {
      var dateString = new Date().toLocaleString("en-US");
      var formattedString = dateString.replace(", ", " - ");
      timeDisplay.innerHTML = formattedString;
    }
    
    setInterval(refreshTime, 100);