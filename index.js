function addingEventListener() {
    const input = document.getElementById("button"); 

    if (input) { 
        input.addEventListener("click Me", () => {
            console.log("button was clicked!"); 
        });
    }
}


addingEventListener();



