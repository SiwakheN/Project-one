function subscribe() {
    let name = prompt("What is your name?");
    prompt("What is your email address?");

    alert(
        "Thank you 😁! We will email you a link so you can book your spot"
    );
}

let button = document.querySelector("button");
button.addEventListener("click", subscribe);