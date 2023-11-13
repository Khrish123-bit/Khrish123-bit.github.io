function processForm() {
    // Get form input values
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("Lname").value;

    // Display a thank you message in a pop-up
    alert("Thank you for voicing your concerns, " + firstName + " " + lastName + "!");

    // You can also log the message to the console
    console.log("Thank you for voicing your concerns, " + firstName + " " + lastName + "!");
}