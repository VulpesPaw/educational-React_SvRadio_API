import React, { useState, useEffect } from 'react';
// allows SPA routing
import { BrowserRouter as Router, Switch, Link, route } from 'react-router-dom';
// page elemetn imports
import Header from './spare_parts/Header';
import Main from './spare_parts/Main';
import Footer from './spare_parts/Footer';
// imports contect
import Contex from './components';

export default function App() {
    // an array for React
    const [channels, setChannels] = useState([]);

    // fetches API data
    useEffect(async () => {
        let data = await fetch('https://api.sr.se/api/v2/channels/?format=json');
        // turns data-string to json-object
        let radio_object = await data.json();
        //exctracrs channeles from data-object
        let channel_array = radio_object.channels;
        // pushes data into channel array
        setChannels(channel_array);
    }, []);

    // page content
    return (
        // Context provide makes channels more accessible
        <Contex.Provider value={{ channels, setChannels }}>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </Contex.Provider>
    );
}
