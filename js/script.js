document.addEventListener("DOMContentLoaded", () => {

    // Set padding of the section below to be half the size of the image.
    function setPadding() {
        const heroImage = document.querySelector('.hero-image');
        const sellingPoints = document.querySelector('.selling-points');
        let imageHeight = heroImage.clientHeight;
        let paddingTop = imageHeight * 0.5;
        sellingPoints.style.paddingTop = paddingTop + 'px';
    }

    setPadding();

    // Maintain the correct padding upon browser resize
    window.addEventListener('resize', setPadding);

});