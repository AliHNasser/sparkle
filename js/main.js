/* Start Portfolio */
const allTypes = document.querySelectorAll(".portfolio .container .shuffel ul li");
const portfolioImages = document.querySelectorAll(".portfolio .gallery .image");

allTypes.forEach((element) => {
    if (element.getAttribute("imageType") === "all") {
        element.addEventListener("click", () => {
            document.querySelector(".portfolio .gallery").innerHTML = "";
            let allImagesOfThisType = [];
            portfolioImages.forEach((image) => {
                allImagesOfThisType.push(image);
            })
            allImagesOfThisType.forEach((image) => {
                document.querySelector(".portfolio .gallery").appendChild(image);
            })
        })
    } else {
        element.addEventListener("click", () => {
            document.querySelector(".portfolio .gallery").innerHTML = "";
            let allImagesOfThisType = [];
            portfolioImages.forEach((image) => {
                allImagesOfThisType.push(image);
            })
            allImagesOfThisType.forEach((image) => {
                if (image.getAttribute("imagetype") === element.getAttribute("imageType")) {
                    document.querySelector(".portfolio .gallery").appendChild(image);
                }
            })
        })
    }
})
/* End Portfolio */