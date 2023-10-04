import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div id="container">  
        <Header />

        <main id="site-content"></main>

        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
  );
}

export default App;
