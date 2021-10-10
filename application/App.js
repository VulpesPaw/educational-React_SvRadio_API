import React, { useState, useEffect } from 'react';
import Header from './spare_parts/Header';
import Main from './spare_parts/Main';
import Footer from './spare_parts/Footer';
import Contex from './components';

export default function App() {
    // Swedish Universal Radio Transever
    const [SURT, setNewSURT] = useState('');

    const [channels, setChannels] = useState([]);

    useEffect(async () => {
        let data = await fetch('https://api.sr.se/api/v2/channels/?format=json');
        let radio_object = await data.json();
        // console.log(await radio_object);
        let channel_array = radio_object.channels;
        // console.log(await channel_array);
        setChannels(channel_array);
    }, []);

    return (
        <Contex.Provider value={{ channels, setChannels }}>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </Contex.Provider>
    );
}
