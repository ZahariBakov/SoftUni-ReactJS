import { useEffect, useState } from 'react';
import Gamecard from './GameCard';

const GameCatalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(result => {
                setGames(result)
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            { games.map(x => <Gamecard game={x} />) }

            <h3 className="no-articles">No games yet</h3>
        </section>
    );
}

export default GameCatalog;