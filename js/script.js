let url_base = 'https://rickandmortyapi.com/api/character'

document.getElementById('searchButton').addEventListener('click', () => {
      const names = document.getElementById('characterEntry').value
      if (names) {
            fetchCharacterData(names)
      }
})

function fetchCharacterData(names){
      fetch(`${url_base}/?name=${names}`)
            .then(response => response.json())
            .then(response => showCharacterData(response.results))
}

function showCharacterData(results) {
      const characterContainer = document.getElementById('characterContainer')
      characterContainer.innerHTML = ''

      results.forEach(result => {
            const characterDiv = document.createElement('div');

            const name = result.name
            const characterName = document.createElement('h1')
            characterName.textContent = name

            const image = result.image
            const characterImage = document.createElement('img')
            characterImage.src = image

            const status = result.status
            const characterStatus = document.createElement('h2')
            characterStatus.textContent = `Status: ${status}`

            const species = result.species
            const characterSpecies = document.createElement('h2')
            characterSpecies.textContent = `Specie: ${species}`

            const gender = result.gender
            const characterGender = document.createElement('h2')
            characterGender.textContent = `Status: ${gender}`

            characterDiv.appendChild(characterName)
            characterDiv.appendChild(characterImage)
            characterDiv.appendChild(characterStatus)
            characterDiv.appendChild(characterSpecies)
            characterDiv.appendChild(characterGender)

            characterContainer.appendChild(characterDiv)
      })
      
}