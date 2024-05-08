import React from 'react';
import {NavBar} from "@/Pages/NavBar";
import '../../App.css';
import {Banner} from "@/Pages/Banner";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <NavBar/>
                <Banner/>
            </>
        );
    }
}
