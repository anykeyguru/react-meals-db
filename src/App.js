import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import NotFound from "./pages/notfound";
import Category from "./pages/category/Category";
import Reciept from "./pages/reciept/Reciept";
import {GIT_BASENAME_URL} from "./config";
import {useState} from "react";


function App() {
    const [categoryDesc, setCategoryDesc] = useState("");

    const defineCatDesc = (desc) => {
        setCategoryDesc(desc);
    }

    return (
        <>
        <Router basename={GIT_BASENAME_URL}>
            <Header/>
            <main className="container content">
                <Switch>
                    <Route exact path="/"><Home defineCatDesc={defineCatDesc}/></Route>
                    <Route path="/about" component={About}/>
                    <Route path="/contacts" component={Contact}/>
                    <Route path="/category/:category" ><Category categoryDesc={categoryDesc}/> </Route>
                    <Route path="/receipt/:rid" component={Reciept}/>
                    <Route path="/*" component={NotFound}/>
                </Switch>
            </main>
            <Footer/>
        </Router>
        </>
    );
}

export default App;
