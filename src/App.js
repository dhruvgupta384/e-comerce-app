import './App.css';
import Places from "./Places/Places";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Offers from "./Offers/Offers";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Blogs from "./Blogs/Blogs";

function App() {
    return <div>
        <Navbar/>
        <Home/>
        <Places/>
        <Offers/>
        <About/>
        <Blogs/>
        <Footer/>
    </div>
}

export default App;
