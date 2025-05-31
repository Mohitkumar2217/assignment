// // eg.
// // toggle button
let nodeBtn = document.getElementById("mode");
let body = document.querySelector("body");
let currMode = "Light";
body.classList.add("light");
nodeBtn.addEventListener("click", () => {
    if (currMode === "Light") {
        body.classList.remove("light");
        currMode = "Dark";
        body.classList.add("dark");
        // body.style.backgroundColor = "black";
    } else {
        body.classList.remove("dark");
        currMode = "Light";
        body.classList.add("light");
        // body.style.backgroundColor = "white";
    }
    console.log(currMode);
});

// // eg.
// // submit button 
let subBtn = document.getElementById("submit");
let button = document.querySelector("#submit");
let currStatus = "Not Submitted";
subBtn.addEventListener("click", () => {
    if (currStatus === "Not Submitted") {
        button.classList.add("submitted");
        currStatus = "Submitted";
        console.log(currStatus);
    } else {
        console.log("Already submitted.");
    }
});

let mouseover = document.getElementById("mouseover");
mouseover.onmouseover = () => {
    console.log("cursur on");
}

// // error handling
try {
    let res = 10 / 0;
    if (!isFinite(res)) {
        throw new Error("Something went wrong!");
    }
    console.log(res);
}
catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution complited");
}


function check(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    console.log("Access granted");
}
try {
    check(16);
} catch (error) {
    console.error(error.message);
    // Age must be 18 or above
}

// //jQuery
$(document).ready(function () {
    $("h1").hover(
        function () {
            $(this).css(
                "color",
                "green"
            );
        },
        function () {
            $(this).css(
                "color",
                "blue"
            );
        }
    );
    $("#submit").click(() => {
        // Changing the text of an element with the ID "example"
        $("#example").text("Hello, jQuery!");
        // Adding a click event to a button with the ID "btn"
        alert("Button clicked!");
    });
    // Hiding an element with the class "hide-me" when clicked
    $(".hideme").click(() => {
        //hide button
        $(this).hide();
        //redirect to new page
        window.location.href = "Submitted.html"; 
    });
});
