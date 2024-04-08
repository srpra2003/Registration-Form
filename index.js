document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    setTimeout(() => {
        const isSuccess = true; 

        if (isSuccess) {
            window.location.href = "success.html";
        } else {
            window.location.href = "error.html";
        }
    }, 1000); 
});

const submitButton = document.querySelector("button[type='submit']");

submitButton.addEventListener("mouseover", function() {
    submitButton.style.backgroundColor = "#0056b3";
});

submitButton.addEventListener("mouseout", function() {
    submitButton.style.backgroundColor = "#007bff";
});

submitButton.addEventListener("click", function() {
    console.log("Button clicked!");
});
