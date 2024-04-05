import "../style/Meme.css"
import { useEffect, useState } from "react";

export default function Meme(){
    const [display,setDisplay]=useState(false)
    // const [img,setImg]=useState("")
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImg:""
    })
    const [allMeme,setAllMeme]=useState([])

    function handleChange(event){
        const {name,value}=event.target;
        setMeme(prev=>({
            ...prev,
            [name]:value
        }))
    }

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
            .catch(error => console.error('Error fetching memes:', error));
    }, []);

    function getMemeImage(){
        console.log(allMeme)
        let len=allMeme.length;
        let x=Math.floor(Math.random()*len);
        let url=allMeme[x].url;
        setMeme(prev=>({...prev,randomImg:url}));
        setDisplay(true);
    }
    return (
        <main>
            
            <div className="form">
                <div className="form-flex">
                    <div  className="form-label-container">
                    <label htmlFor="top-text" className="form-label"> Top Text </label>
                    <input type="text" id="top-text" className="form-text" placeholder="Shut up" value={meme.topText} name="topText" onChange={handleChange}/>
                    </div>
                    <div className="form-label-container">
                    <label className="form-label" htmlFor="bottom-text"> Bottom text </label>
                    <input type="text" id="bottom-text" className="form-text" placeholder="and hold my money" value={meme.bottomText} name="bottomText" onChange={handleChange}/>
                    </div>
                </div>
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                {meme.randomImg && <img src={meme.randomImg} className="meme--image" />}
                <h2 className="meme--text top">{display && meme.topText}</h2>
                <h2 className="meme--text bottom">{display && meme.bottomText}</h2>
            </div>
        </main>
    )
}