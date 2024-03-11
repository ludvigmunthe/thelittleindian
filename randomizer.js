
document.addEventListener("DOMContentLoaded", function() {
    getRandomItem(); 
});

function getRandomItem() {
    var randomNumber = Math.random();

    var multipliedNumber = randomNumber * 6;
    
    var randomIndex = Math.floor(multipliedNumber);

    var container = document.getElementById("randomitems");

    switch (randomIndex) {
        case 0:
            container.innerHTML = "<img src='pics/pappadam.jpeg' width='100' height='200' alt='Product1'>"
            break;
        case 1:
            container.innerHTML = "<img src='pics/samosa.jpg' width='100' height='200' alt='Product2'>";
            break;
        case 2:
            container.innerHTML = "<img src='pics/pakora.jpg' width='100' height='200' alt='Product3'>";
            break;
        case 3:
            container.innerHTML = "<img src='pics/springroll.jpg' width='100' height=200' alt='Product4'>";
            break;
        case 4:
            container.innerHTML = "<img src='pics/Chicken-Pakora.jpg' width='100' height='200' alt='Product5'>";
            break;
        case 5:
            container.innerHTML = "<img src='pics/drumstick.jpg' width='100' height='200' alt='Product6'>";
            break;
      default:
        container.innerHTML = "<p>No product found</p>";
    }
}
