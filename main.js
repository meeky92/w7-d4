{
    let form = document.getElementById('pokeForm');
    console.log(form);

    async function handleSubmit(e){
        e.preventDefault();
        // console.log(e);
        let pokemon = e.target.pokemon.value;
        // console.log(pokemon);
        let pokemonInfo = await getPokemonInfo(pokemon);
        buildPokedex(pokemonInfo);
        console.log(pokemonInfo)
        // to clear input:
        e.target.pokemon.value = '';
    }
    async function getPokemonInfo(pokemon){
        let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        // console.log(response);
        let data = await response.json()
        // console.log(data);
        return data
    }

    // function buildPokedex(pokeInfo){
    //     let card = document.createElement('div');
    //     card.className = 'card';

    //     let cardBody = document.createElement('div');
    //     cardBody.className = 'card-body'

    //     let pokeName = document.createElement('h5');
    //     pokeName.className = 'card-title';
    //     pokeName.innerHTML = pokeInfo.name;

    //     let pokeStats = document.createElement('h6');
    //     pokeStats.className = 'card-subtitle mb-2 text-muted';
    //     pokeStats.innerHTML = pokeInfo.height;
    //     pokeStats.innerHTML = pokeInfo.weight;

    //     let pokeMoves = document.createElement('p');
    //     pokeMoves.className = "card-text";
    //     pokeMoves.innerHTML = pokeInfo.moves[0].move;

    //     cardBody.append(pokeName);
    //     cardBody.append(pokeStats);
    //     cardBody.append(pokeMoves);

    //     card.append(cardBody);

    //     let col = document.createElement('div');
    //     col.className = 'col-12 col-md-6 col-lg-3';

    //     col.append(card);

    //     let display = document.getElementById('pokeGallery');
    //     display.append(col);

    // }
    function buildPokedex(pokeInfo){
        let card = document.createElement('div');
        card.className = 'card';

        let image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = pokeInfo.sprites.front_shiny;
        card.append(image);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let pokeName = document.createElement('h5');
        pokeName.className = 'card-title';
        pokeName.innerHTML = `Name: ${pokeInfo.name}`;

        let pokeHeight = document.createElement('p');
        pokeHeight.className = 'card-text';
        pokeHeight.innerHTML = `Height: ${pokeInfo.height}cm`;
        
        let pokeWeight = document.createElement('p');
        pokeWeight.className = "card-text";
        pokeWeight.innerHTML = `Weight: ${pokeInfo.weight}kg`;

        cardBody.append(pokeName);
        cardBody.append(pokeHeight);
        cardBody.append(pokeWeight);

        card.append(cardBody);

        let col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3 my-3';

        col.append(card);

        let display = document.getElementById('pokeGallery');
        display.append(col);

    }


    form.addEventListener('submit', handleSubmit);
}
