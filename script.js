document.querySelectorAll('button[data-group]').forEach(button => {
    button.onclick = event => {
        document.querySelectorAll('.page').forEach(element =>{
            console.log(element)
            element.classList.toggle('show',element.id === event.currentTarget.dataset.target);
        })
    }
})
const randomPicBtn = document.querySelector('.butt3');
const blockImg = document.querySelector('.blockImg');
const imgTag = blockImg.querySelector('img');

async function getRandomPic() {
    try {
        imgTag.alt = "Ждём...";
        const response = await fetch('https://nekos.best/api/v2/neko');
        if (!response.ok) throw new Error('');
        const data = await response.json();
        const imageUrl = data.results[0].url;
        imgTag.src = imageUrl;
        
    } catch (error) {
        console.error('Не удалось загрузить картинку:', error);
        alert('Сегодня без картинок(((');
    }
}
randomPicBtn.addEventListener('click', getRandomPic);

