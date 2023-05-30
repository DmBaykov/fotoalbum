window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel-3d");
    for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
    }
});
function carousel(root) {
    var figure = root.querySelector("figure"),
    nav = root.querySelector("nav"),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = 2 * Math.PI / n,
    currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
    setupNavigation();
    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;
        for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
        for (i = 0; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
        rotateCarousel(currImage);
    }
    function setupNavigation() {
        nav.addEventListener("click", onClick, true);
        function onClick(e) {
            e.stopPropagation();
            var t = e.target;
            if (t.tagName.toUpperCase() != "BUTTON") return;
            if (t.classList.contains("next")) {
                currImage++;
                } else {
                currImage--;
            }
            rotateCarousel(currImage);
        }
    }
    function rotateCarousel(imageIndex) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
    var xClick;
    var mouseDown;
    /* Смена слайдов мышкой */
    figure.onmousedown = (event) => {
        xClick = event.pageX;
        mouseDown = true;
    };
    figure.onmouseup = (event) => {
        mouseDown = false;
    };
    figure.onmousemove = (event) => {
        if (mouseDown) {
            var xMove = event.pageX;
            if (Math.floor(xClick - xMove) > 5) {
                currImage++;
                rotateCarousel(currImage);
                mouseDown = false;
            }
            else if (Math.floor(xClick - xMove) < -5) {
                currImage--;
                rotateCarousel(currImage);
                mouseDown = false;
            }
        }
    };
    /* Смена слайдов пальцем */
    figure.ontouchstart = (event) => {
        xClick = event.changedTouches[0].pageX;
        mouseDown = true;
    };
    figure.ontouchend = (event) => {
        mouseDown = false;
    };
    figure.ontouchmove = (event) => {
        if (mouseDown) {
            var xMove = event.changedTouches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                currImage++;
                rotateCarousel(currImage);
                mouseDown = false;
            }
            else if (Math.floor(xClick - xMove) < -5) {
                currImage--;
                rotateCarousel(currImage);
                mouseDown = false;
            }
        }
    };
}








 var modal = document.getElementById('myModal');
 var span = document.getElementsByClassName("close")[0];
 span.onclick = function() {
    modal.style.display = "none";
 };
 var img = document.getElementById('myImg');
 var modalImg = document.getElementById("img01");
 var kaptionText = document.getElementById("kaption");



//  var slideIndex = 1;
//  showSlides(slideIndex);
//
// // Next/previous controls
//  function plusSlides(n) {
//    showSlides(slideIndex += n);
//  }

 // Thumbnail image controls
 function currentSlide(n) {

   var idEl = "img"+n;

   var img = document.getElementById(idEl);

   modal.style.display = "block";
   modalImg.src = img.src;
   kaptionText.innerHTML = img.alt;


   // showSlides(slideIndex = n);
 }

 // function showSlides(n) {
 //   var i;
 //   var slides = document.getElementsByClassName("mySlides");
 //   var dots = document.getElementsByClassName("demo");
 //   var captionText = document.getElementById("caption");
 //
 //   if (n > slides.length) {slideIndex = 1}
 //   if (n < 1) {slideIndex = slides.length}
 //   for (i = 0; i < slides.length; i++) {
 //     slides[i].style.display = "none";
 //   }
 //   for (i = 0; i < dots.length; i++) {
 //     dots[i].className = dots[i].className.replace(" active", "");
 //   }
 //   slides[slideIndex-1].style.display = "block";
 //   dots[slideIndex-1].className += " active";
 //   captionText.innerHTML = dots[slideIndex-1].alt;
 //
 // }


// // Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//    modal.style.display = "none";
// }
