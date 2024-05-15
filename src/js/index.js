
const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        const idSelected = character.attributes.id.value;

        if (idSelected  === 'ultron') return;


        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');
           
        character.classList.add('selected');

        
        const imagePlayer1 = document.getElementById('p1-character');
        imagePlayer1.src = `./src/images/${idSelected}.png`;

        const namePlayer1 = document.getElementById('name-player-1');
        const nameSelected = character.getAttribute('data-name');

        namePlayer1.innerHTML = nameSelected;

    })
})