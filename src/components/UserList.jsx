import { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            setCharacters(response.data.results);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    if(loading) {
        console.log('Carregando...');
    }

    return(
        <div>
            <img src="/images/Rick_and_Morty.svg.png" alt="" id='logo'/>
            <h2>Characters:</h2>
                {characters.map(character => (
                    <div key={character.id}>
                        <img src={character.image} alt={character.name} id='photos' />
                        <div id='characters'>
                            <p><strong>Name:</strong> {character.name}</p>
                            <p><strong>Status:</strong> {character.status}</p>
                            <p><strong>Species:</strong> {character.species}</p>
                        </div>
                    </div>     
                ))}
        </div>
    )
}