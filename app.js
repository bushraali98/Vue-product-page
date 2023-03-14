var app = new Vue({
    el: '#app',
    data: {
        product: 'Fall Limited Edition Sneakers',
        images: [
            {
                id: 1,
                img: 'assets/img1.jpg'
            },
            {
                id: 2,
                img: 'assets/img2.jpg'
            },
            {
                id: 3,
                img: 'assets/img3.jpg'
            },
            {
                id: 4,
                img: 'assets/img4.jpg'
            }

            ],
            img1: 'assets/img1.jpg',
            img2: 'assets/img2.jpg',
            img3: 'assets/img3.jpg',
            img4: 'assets/img4.jpg',
        currentImage: 'assets/img1.jpg'
    },
    // methods: {
    //     changeImg() {
    //         currentImage === 
    //     }
    // }
})
// function currentImg(imgs) {
//     var expandImg = document.getElementById("expandedImg");
//     var imgText = document.getElementById("imgtext");
//     expandImg.src = imgs.src;
//     imgText.innerHTML = imgs.alt;
//     expandImg.parentElement.style.display = "block";
// }