const messages = ["How are you today?", "You doing good?", "Hope everythings going well today", "The weather today is lovely isn't it?", "How's your family doing","Oi! You alright mate?","I think you need to go out and get some fresh air","This is my first project", "I hope it goes well", "I need to be organized"]

function getRandomMessage() {
    const randomNumber = Math.floor(Math.random() * messages.length);
    return messages[randomNumber];
}

function displayMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = getRandomMessage();
}

window.onload = displayMessage; // Display a message when the page loads