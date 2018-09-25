
  function confirmSubmit(evt)
  {
  var fullname = document.getElementById("firstname");
  var button = document.getElementById('submission');

  button.onclick = function()
  {
    style.display = "block";
  }
  alert("Thanks " + firstname.value + " for joining us");
  }
  
  var Indexed = 1;
showSlides(slideIndex);

function changeSlides(n) 
{
  showSlides(slideIndex += n);
}

function presentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n)
 {
  var i;
  var slide = document.getElementsByClassName("gallery");
  var dots = document.getElementsByClassName("circle");
  if (n > slide.length) {Indexed = 1} 
  if (n < 1) {Indexed = slide.length}
  for (i = 0; i < slide.length; i++) 
  {
      slide[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++)
	  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
