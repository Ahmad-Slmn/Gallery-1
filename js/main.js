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
        imageContainer.appendChild(img);
        imageContainer.appendChild(downloadLink);
        overlay.appendChild(imageContainer);

        // Add drag and drop functionality
        img.setAttribute('draggable', true);
        img.addEventListener('dragstart', () => {
            img.classList.add('dragging');
        });
        img.addEventListener('dragend', () => {
            img.classList.remove('dragging');
        });

        overlay.addEventListener('dragover', e => {
            e.preventDefault();
            imageContainer.classList.add('dragover');
        });
        overlay.addEventListener('dragleave', () => {
            imageContainer.classList.remove('dragover');
        });
        overlay.addEventListener('drop', e => {
            e.preventDefault();
            const droppedImg = e.dataTransfer.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                img.src = reader.result;
            };
            reader.readAsDataURL(droppedImg);
        });

        closeImg.addEventListener('click', () => {
            overlay.remove();
        });
    });
});
