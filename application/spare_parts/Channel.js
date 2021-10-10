import React from 'react';

export default function Channel({ channel }) {
    const style = {
        backgroundColor: '#' + channel.color,
    };
    return (
        <>
            <div className=' flex_item flex_channel' style={style}>
                <div className='flex_channel_item channel_title'>
                      
                    {channel.name} <br/>
                    -.-
                </div>

                <div className='flex_channel_item'>
                    <img src={channel.image} />
                </div>
            </div>
        </>
    );
}
