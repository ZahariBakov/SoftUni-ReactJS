import { useEffect, useState } from 'react';

import * as gameService from '../../services/gameService';
import Gamecard from './GameCard';

const GameCatalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            gameService.getAll()
                .then(result => {
                    setGames(result);
                });
        }, 1000);
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(x => <Gamecard key={x._id} game={x} />)
                : <h3 className="no-articles">No games yet</h3>
            }
        </section>
    );
}

export default GameCatalog;