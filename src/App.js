import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
    return (
        <div id='container'>
            <Header />
            <main id='site-content'>
              <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
