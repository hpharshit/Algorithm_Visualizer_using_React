import React, {Component} from 'react';
import Greet from "./greet";
import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from './footer';

class Home extends Component {
    render() {
        return (
            <>
                <Greet/>
                <TypeWriterC/>
                <Cards/>
                <Footer/>
            </>
        );
    }
}

export default Home;