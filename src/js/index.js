


const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');
           
        character.classList.add('selected');

        const idSelected = character.attributes.id.value;
        const imagePlayer1 = document.getElementById('p1-character');
        imagePlayer1.src = `./src/images/${idSelected}.png`;

        const namePlayer1 = document.getElementById('name-player-1')
        console.log(namePlayer1)
        namePlayer1.innerHTML = 'personagem';
    })
})