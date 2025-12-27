function createItemGrid(items) {
    const gridContainer = document.getElementById('grid');
    items.forEach(item => {
        const [name, id, r, imageurl, isExclusive] = item;

        const card = document.createElement('div');
        card.classList.add('item-card');
        card.setAttribute('data-id', id);

        if (isExclusive) {
            card.classList.add('exclusive');
        } else {
            card.classList.add('non-exclusive');
        }

        const img = document.createElement('img');
        img.src = imageurl;
        img.alt = name;
        img.loading = "lazy";
        img.setAttribute('data-id', id);
        img.classList.add('grayscale');

        const itemName = document.createElement('p');
        itemName.textContent = name;
        card.style.display = 'none';
        card.appendChild(img);
        card.appendChild(itemName);

        gridContainer.appendChild(card);
    });
}

function clearGrid() {
    document.getElementById('grid').innerHTML =``;
}

function toggleGreyscaleById(id) {
    const img = document.querySelector(`img[data-id='${id}']`);
    if (img) {
        img.classList.remove('grayscale');

        const card = img.closest('.item-card');
        if (card) {
            if(card.style.display === 'none')
            card.style.display = '';
        }

    }
}

function toggleHideGreyscaleCards() {
    const greyscaleImages = document.querySelectorAll('img.grayscale');
    greyscaleImages.forEach(img => {
        const card = img.closest('.item-card');
        if (card) {
            card.style.display = (card.style.display === 'none') ? '' : 'none';
        }
    });
}