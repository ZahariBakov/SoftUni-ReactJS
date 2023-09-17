let rootElement = document.getElementById('root');

// let reactElement = React.createElement(
//     'header',
//      { className: 'site-header' },
//      React.createElement('h1', { id: 'main-heading' }, 'Hello React'),
//      React.createElement('h2', {}, 'The best framework in the world!')
// );

let reactElement = (
    <div>
        <header>
            <h1>Hello JSX Modified</h1>
            <h2>The best framework in the world!</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

        </header>

        <footer>All rights reserved &copy; </footer>
    </div>
)
ReactDOM.render(reactElement, rootElement);