

function optimize_images() {
    let page_images = document.getElementsByTagName("img");
    console.log("Page Images:");
    console.log(page_images);

    if(page_images != null && page_images.length > 0) {
        for(let i = 0; i < page_images.length; i++) {
            let current_image = page_images[i];

            console.log("src: " + current_image.src + ", width: " + current_image.width + ", height: " + current_image.height);
        }
    }
}

optimize_images();