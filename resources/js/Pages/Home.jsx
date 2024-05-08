import React from 'react';
import {NavBar} from "@/Pages/NavBar";
import '../../App.css';
import {Banner} from "@/Pages/Banner";
import {Skills} from "@/Pages/Skills";
import {Projects} from "@/Pages/Projects";
import {Contact} from "@/Pages/Contact";
import {Footer} from "@/Pages/Footer";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <NavBar/>
                <Banner/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}
