import React, {useState} from 'react';
import './UrlForm.css';

function UrlForm () {
    const [url , setUrl] = useState('');
    const [shortUrlId, setShotUrlId] = useState('');
    
    function onSubmit (event) {
        fetch('http://localhost:3033/url/', {
            method: "POST",
            body: JSON.stringify({ url, shortUrlId }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => {
            if (res.status === 403) return alert("ShorUrl already exist")
            if (res.status === 200) return alert("Short url created")
        });
    }

    return (
        <form onSubmit={onSubmit} className='Url-Form'>
            Url:
            <input 
            type ='text'
            placeholder ='url'
            value = {url}
            onChange = {({ target : { value }}) => setUrl(value)}
            />
            ShortenerUrl:
            <input
            type ='text'
            placeholder ='shortenerUrl'
            value = {shortUrlId}
            onChange = {({ target : { value }}) => setShotUrlId(value)}
            />
            <button type = 'submit'> OK </button>
        </form>
    );

}
 export default UrlForm;