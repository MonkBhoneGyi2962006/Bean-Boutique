document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 3000; // Time between image changes (in milliseconds)

    images[0] = "image/ACC_Website-2-Header_1500x750_blog-9_1280x640.jpg.webp";
    images[1] = "image/slideshow.webp";
    images[2] = "image/slideshow2.jpg";

    function changeImg() {
        var slideElement = document.getElementById("slide");
        console.log(slideElement); // This should log the image element

        slideElement.src = images[i]; // Update the src attribute

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    // Start the slideshow
    changeImg();
});
