import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog";
import CreateGame from "./components/CreateGame";
import Login from "./components/Login";
import Register from './components/Register';

function App() {
    const routes = {
        '/home': WelcomeWorld,
        '/games': GameCatalog,
        '/create-game': CreateGame,
        '/login': Login,
        '/register': Register,
    };

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <WelcomeWorld />
            </main>
        </div>
    );
}

export default App;


