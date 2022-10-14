import axios from 'axios';
import React, { useEffect, useState } from 'react';
import settings from "../img/settings_icon.png";

const CarName = ({ urlCarName }) => {

    const [showInput, setShowInput] = useState(false);
    const [inputText, setInputText] = useState("");
    const [data, setData] = useState("");

    const handleRename = (e) => {
        setShowInput(current => !current);
    };

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const getNames = () => {
        axios.get(urlCarName)
            .then((res) => {
                setData(res.data[0]);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCarName = inputText;
        axios.patch(`${urlCarName}/1`, {
            name: newCarName
        })
        setTimeout(() => {
            getNames();
        }, 500)
        setShowInput(false);
        setInputText("");
    };

    useEffect(() => {
        getNames();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='name'>
                <div>
                    <h2 key={data.id}>{data.name}</h2>
                </div>
                <div>
                    <img onClick={handleRename} alt='' src={settings}></img>
                </div>
            </div>
            {
                showInput && (
                    <div className='input'>
                        <h3>Change car name</h3>
                        <form onSubmit={handleSubmit}>
                            <input onChange={inputTextHandler}
                                value={inputText}
                                type="text"
                                required
                                autoFocus></input>
                            <br></br>
                            <button type='submit'>OK</button>
                        </form>
                    </div>
                )
            }
        </>
    )
};

export default CarName;