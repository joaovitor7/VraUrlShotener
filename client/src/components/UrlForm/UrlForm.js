import React, {useState} from 'react';
import './UrlForm.css';

function UrlForm () {
    const [url , setUrl] = useState('');
    const [shortUrlId, setShotUrlId] = useState('');
    const [registeredUrl, setRegisteredUrl] = useState(null);
    
    function onSubmit (event) {
        fetch('http://localhost:3033/url/', {
            method: "POST",
            body: JSON.stringify({ url, shortUrlId }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => {
            if (res.status === 403) return alert("ShorUrl already exist")
            if (res.status === 200) return alert("Short url created")
            setRegisteredUrl(shortUrlId)
        });
    }

    if(registeredUrl) {
        return (
            <div className='Url-Form'>
                <i className="Label">Shortener url was created:</i>
                <a href={`http://localhost:3033/${registeredUrl}`}>{`http://localhost:3033/${registeredUrl}`}</a>
            </div>
        );
    }
    return (
        <form onSubmit={onSubmit} className='Url-Form'>
            <h1 className="Label">Your Url</h1>
            <input 
            className="Input-Form"
            type ='text'
            placeholder ='url'
            value = {url}
            onChange = {({ target : { value }}) => setUrl(value)}
            />
            <input
            className="Input-Form"
            type ='text'
            placeholder ='shortenerUrl'
            value = {shortUrlId}
            onChange = {({ target : { value }}) => setShotUrlId(value)}
            />
            <button type='submit' className="Buton-Ok"> OK </button>
        </form>
    );

}
 export default UrlForm;