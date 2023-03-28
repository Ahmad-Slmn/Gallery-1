const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
        const closeImg = document.createElement('span');
        closeImg.textContent = "x";
        overlay.appendChild(closeImg);

        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('enlarged');

        const downloadLink = document.createElement('a');
        downloadLink.href = image.src;
        downloadLink.download = image.alt;
        downloadLink.textContent = 'Download';

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        overlay.appendChild(imageContainer);
        imageContainer.appendChild(img);
        imageContainer.appendChild(downloadLink);

        setTimeout(() => {
            overlay.classList.add('active');
            imageContainer.classList.add('active');
        }, 0);

        closeImg.addEventListener('click', () => {
            overlay.classList.remove('active');
            imageContainer.classList.remove('active');
            setTimeout(() => {
                overlay.remove();
            }, 400);
        });
    });
});
