import React from 'react';

export default function Channel({ channel }) {
    const style = {
        backgroundColor: '#' + channel.color,
    };
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
                <audio src='https://http-live.sr.se/p3-mp3-128' preload='metadata' controls></audio>
            </div>
        </>
    );
}
// event.target.toggleClass('display_none');
// look at signal.
// find onClick={(evnet)=>increaseCounter}
// migth find above in teams, could be missing React folder

// + Make onclick to show description

/* § Notes §

API Docs for live aduio (go to 'Lista ljudlänksmallar för direktlyssning (live)')
https://sverigesradio.se/api/documentation/v2/metoder/ljud.html

Example on live audio stream:
https://http-live.sr.se/p3-mp3-128

+ TABLÅ
https://sverigesradio.se/api/documentation/v2/metoder/tabla.html
https://api.sr.se/api/v2/scheduledepisodes?channelid=164&format=json
*/

/*

0: Object { image: "https://static-cdn.sr.se/images/132/2186745_512_512.jpg?preset=api-default-square", imagetemplate: "https://static-cdn.sr.se/images/132/2186745_512_512.jpg", color: "31a1bd", … }
​​
channeltype: "Rikskanal"
​​
color: "31a1bd"
​​
id: 132
​​
image: "https://static-cdn.sr.se/images/132/2186745_512_512.jpg?preset=api-default-square"
​​
imagetemplate: "https://static-cdn.sr.se/images/132/2186745_512_512.jpg"
​​
liveaudio: Object {
    id: 132,
    url: "https://sverigesradio.se/topsy/direkt/srapi/132.mp3",
    statkey: "/app/direkt/p1[k(132)]" }
​​​
id: 132
​​​
statkey: "/app/direkt/p1[k(132)]"
​​​
url: "https://sverigesradio.se/topsy/direkt/srapi/132.mp3"
​​​
<prototype>: Object { … }
​​
name: "P1"
​​
scheduleurl: "https://api.sr.se/v2/scheduledepisodes?channelid=132"
​​
siteurl: "https://sverigesradio.se/p1"
​​
tagline: "Talat innehåll om samhälle, kultur och vetenskap. Kanalen erbjuder nyheter och aktualiteter, granskning och fördjupning men också livsåskådnings-och livsstilsprogram samt underhållning och upplevelser till exempel i form av teater."
​​
xmltvid: "p1.sr.se"

*/
