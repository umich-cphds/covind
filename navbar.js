window.onload = function () {
    document.addEventListener("click", function(e) {
        if (e.target.id == "States")
        {
            document.getElementById("dropdown-content").classList.toggle("dropdown-active");
            document.getElementById("States").classList.toggle("States-active");
        }
        else if (document.getElementById("dropdown-content").classList.contains("dropdown-active")){
            document.getElementById("dropdown-content").classList.toggle("dropdown-active");
            document.getElementById("States").classList.toggle("States-active");

        }
    })
}