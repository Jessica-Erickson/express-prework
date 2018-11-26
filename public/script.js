var colorButton = document.querySelector('.color-button');
var heading = document.querySelector('h1');
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colorButton.addEventListener('click', function (event) {
  var newButtonColor = colors[Math.floor(Math.random() * 7)]
  var newHeadingColor = event.target.style.backgroundColor;

  heading.innerText = 'Not So Static Now!';
  heading.style.color = newHeadingColor;
  colorButton.style.backgroundColor = newButtonColor;
});