const moodboardImages = [
    "images/moodboard/1.jpg",
    "images/moodboard/2.jpg",
    "images/moodboard/3.jpg",
    "images/moodboard/4.jpg",
    "images/moodboard/5.jpg",
    "images/moodboard/6.jpg",
    "images/moodboard/7.jpg",
    "images/moodboard/8.jpg",
    "images/moodboard/9.jpg",
    "images/moodboard/10.jpg",
    "images/moodboard/11.jpg",
    "images/moodboard/12.jpg",
    "images/moodboard/13.jpg",
    "images/moodboard/14.jpg",
    "images/moodboard/15.jpg",
    "images/moodboard/16.jpg",
    "images/moodboard/17.jpg",
    "images/moodboard/18.jpg",
    "images/moodboard/19.jpg",
    "images/moodboard/20.jpg",
    "images/moodboard/21.jpg",
    "images/moodboard/22.jpg",
    "images/moodboard/23.jpg",
    "images/moodboard/24.jpg",
    "images/moodboard/25.jpg",
    "images/moodboard/26.jpg",
    "images/moodboard/27.jpg",
    "images/moodboard/28.jpg",
    "images/moodboard/29.jpg",
    "images/moodboard/30.jpg",
];

const styleImages = [
    "images/style/1.jpg",
    "images/style/2.jpg",
    "images/style/3.jpg",
    "images/style/4.jpg",
    "images/style/5.jpg",
    "images/style/6.jpg",
    "images/style/7.jpg",
    "images/style/8.jpg",
    "images/style/9.jpg",
    "images/style/10.jpg",
    "images/style/11.jpg",
    "images/style/12.jpg",
    "images/style/13.jpg",
    "images/style/14.jpg",
    "images/style/15.jpg",
    "images/style/16.jpg",
    "images/style/17.jpg",
    "images/style/18.jpg",
    "images/style/19.jpg",
    "images/style/20.jpg",
    "images/style/21.jpg",
    "images/style/22.jpg",
    "images/style/23.jpg",
    "images/style/24.jpg",
    "images/style/25.jpg",
    "images/style/26.jpg",
    "images/style/27.jpg",
    "images/style/28.jpg",
    "images/style/29.jpg",
    "images/style/30.jpg",
];

const gothicImages = [
    "images/gothic/1.jpg",
    "images/gothic/2.jpg",
    "images/gothic/3.jpg",
    "images/gothic/4.jpg",
    "images/gothic/5.jpg",
    "images/gothic/6.jpg",
    "images/gothic/7.jpg",
    "images/gothic/8.jpg",
    "images/gothic/9.jpg",
    "images/gothic/10.jpg",
    "images/gothic/11.jpg",
    "images/gothic/12.jpg",
    "images/gothic/13.jpg",
    "images/gothic/14.jpg",
    "images/gothic/15.jpg",
    "images/gothic/16.jpg",
    "images/gothic/17.jpg",
    "images/gothic/18.jpg",
    "images/gothic/19.jpg",
    "images/gothic/20.jpg",
    "images/gothic/21.jpg",
    "images/gothic/22.jpg",
    "images/gothic/23.jpg",
    "images/gothic/24.jpg",
    "images/gothic/25.jpg",
    "images/gothic/26.jpg",
    "images/gothic/27.jpg",
    "images/gothic/28.jpg",
    "images/gothic/29.jpg",
    "images/gothic/30.jpg",
];

function randomImage(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateImages() {
    document.getElementById("moodboard-img").src =
        randomImage(moodboardImages);

    document.getElementById("style-img").src =
        randomImage(styleImages);

    document.getElementById("gothic-img").src =
        randomImage(gothicImages);
}

generateImages();