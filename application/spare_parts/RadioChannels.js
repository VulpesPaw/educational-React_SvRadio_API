import React, { useContext } from 'react';
import Contex from '../components';
import Channel from './Channel';
export default function RadioChannels() {
    const { channels, setChannels } = useContext(Contex);

    console.log(channels);
    let output = channels.map((c) => {
        return `
        ${c.name}
        
`;
    });

    return (
        <div className='flex main_content'>
            {channels.map((c) => (
                <Channel channel={c} key={c.id} />
            ))}
        </div>
    );
}
