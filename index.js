
document.addEventListener("DOMContentLoaded", function() {
    const images = ["image1", "image2", "image3", "image4", "image5"];
    let currentIndex = 0;

    function toggleImages() {
        const currentImage = document.getElementById(images[currentIndex]);
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = document.getElementById(images[nextIndex]);

        currentImage.classList.remove("opacity-100");
        currentImage.classList.add("opacity-0");

        nextImage.classList.remove("opacity-0");
        nextImage.classList.add("opacity-100");

        currentIndex = nextIndex;
    }

    setInterval(toggleImages, 2500);
});





const titles = ["encourage", "Power", "Streamline","Drive","Safeguard"];
let titleIndex = 0;
let index = 1;
let titleElement = document.querySelector('#main_heading');

const typeWriter = () => {
    let name = titles[titleIndex];
    let new_title = name.slice(0, index);
    titleElement.innerText = new_title;

    if (index <= name.length) {
        index++;
    } else {
        index = 1;
        titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(typeWriter, 300);
};

typeWriter();



