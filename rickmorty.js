const characterForm = document.getElementById('character-form');
const characterInfo = document.getElementById('character-info');
const characterImage = document.getElementById('character-image');

characterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const characterNameInput = document.getElementById('character-name');
    const characterName = characterNameInput.value;
    getCharacterInfo(characterName);
});

function getCharacterInfo(characterName) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length === 0) {
                characterInfo.innerHTML = 'Character not found.';
                characterImage.src = '';
                characterInfo.style.display = 'block';
                characterImage.style.display = 'none';
            } else {
                const character = data.results[0];
                characterInfo.innerHTML = `
                    <h2>${character.name}</h2>
                    <p><strong>Status:</strong> ${character.status}</p>
                    <p><strong>Species:</strong> ${character.species}</p>
                    <p><strong>Gender:</strong> ${character.gender}</p>
                    <p><strong>Origin:</strong> ${character.origin.name}</p>
                    <p><strong>Location:</strong> ${character.location.name}</p>
                `;
                characterImage.src = character.image;
                characterInfo.style.display = 'block';
                characterImage.style.display = 'block';
            }
        })
        .catch(error => {
            characterInfo.innerHTML = 'An error occurred.';
            characterImage.src = '';
            characterInfo.style.display = 'block';
            characterImage.style.display = 'none';
            console.error('Error fetching data:', error);
        });
}
