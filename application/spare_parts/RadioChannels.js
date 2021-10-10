import React, { useContext } from 'react';
import Contex from '../components';
import Channel from './Channel';
export default function RadioChannels() {
    //TODO Continue with map function
    // TODO FIX hr Tags, with BABEL?

    const { channels, setChannels } = useContext(Contex);

    console.log(channels);
    let output = channels.map((c) => {
        return `
        ${c.name}
        
`;
    });

    //x!! Fix unique key in Channel.js

    /* 
    Todo §-----§

    + Add audio steam
    + Make beutifull
    + Upload to git
    
    
    */

    /*
let output = channels.map((channel)=>{
    return `
    ${channel.name}   
    
    `;
});*/

    return (
        <div className='flex main_content'>
            {channels.map((c) => (
                <Channel channel={c} key={c.id} />
            ))}
        </div>
    );
}
