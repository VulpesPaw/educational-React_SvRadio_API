import React from 'react';

export default function Channel({ channel }) {
    // Makes background same as channel colour
    const style = {
        backgroundColor: '#' + channel.color,
    };
    // Changes visibility for tagline/ description
    function toggle_tagline_display(event) {
        event.preventDefault();
        document.querySelector('#tag_' + channel.id + '_short').classList.toggle('display_none');
        document.querySelector('#tag_' + channel.id + '_long').classList.toggle('display_none');
    }
    return (
        <>
            <div className=' flex_item flex_channel dsc-lgt' id={'cid_' + channel.id} style={style}>
                <div className='flex_channel_item channel_title'>
                    {channel.name} <br />
                    -.-
                </div>

                <div className='flex_channel_item'>
                    <img src={channel.image} />
                </div>
                <div className='flex_channel_item channel_text'>
                    <a href='#' id={'tag_' + channel.id + '_short'} onClick={(event) => toggle_tagline_display(event)}>
                        {channel.tagline.substring(0, 50)}...
                    </a>
                    <a
                        href='#'
                        className='display_none'
                        id={'tag_' + channel.id + '_long'}
                        onClick={(event) => toggle_tagline_display(event)}
                    >
                        {channel.tagline}
                    </a>
                </div>
                {console.log(channel.liveaudio)}
                <audio src={channel.liveaudio.url} preload='metadata' controls></audio>
            </div>
        </>
    );
}

/* § Notes §


+ TABLÅ
https://sverigesradio.se/api/documentation/v2/metoder/tabla.html
https://api.sr.se/api/v2/scheduledepisodes?channelid=164&format=json
*/

