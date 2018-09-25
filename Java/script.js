function Submissioncomplete(evt)
{
  var fullname = document.getElementById("first_name");
  var button = document.getElementById('submission');

  button.onclick = function() 
  {
    modal.style.display = "block";
  }
  }
  alert("Congratulations " + firstname.value + " welcome to the Purge.");
  
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
