import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Loader from '../Loader';

const ServiceBook = ({ urlServiceBook }) => {

    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showNew, setShowNew] = useState(false);
    const [inputDate, setInputDate] = useState("");
    const [inputKm, setInputKm] = useState("");
    const [inputParts, setIputParts] = useState("");

    let dateSplit = inputDate.split("-");
    let dateFormat = `${dateSplit[2]}.${dateSplit[1]}.${dateSplit[0]}`;

    const getDocs = () => {
        axios.get(urlServiceBook)
            .then((res) => {
                setDocs(res.data);
                setLoading(false);
            })
    };

    const addDocs = (e) => {
        e.preventDefault();
        axios.post(urlServiceBook, {
            date: dateFormat,
            km: inputKm,
            part: inputParts
        })
            .then((res) => {
                setDocs([...docs, res.data])
            })
        setShowNew(false);
        setInputDate("");
        setInputKm("");
        setIputParts("");
    };

    const deleteDocs = (id) => {
        const newDocs = docs.filter((doc) => doc.id !== id);
        axios.delete(urlServiceBook + "/" + id);
        setDocs(newDocs);
    };

    const inputDateHandler = (e) => {
        setInputDate(e.target.value);
    };

    const inputKmHandler = (e) => {
        setInputKm(e.target.value);
    };

    const inputPartHandler = (e) => {
        setIputParts(e.target.value);
    };

    useEffect(() => {
        getDocs();
        // eslint-disable-next-line
    }, []);

    const handleShowNew = () => {
        setShowNew(current => !current)
    };

    let addNew = <div className='add-new'>
        <form onSubmit={addDocs}>
            <h4>Date</h4>
            <input type="date"
                value={inputDate}
                onChange={inputDateHandler}
                required></input>
            <h4>Kilometers</h4>
            <input type="number"
                value={inputKm}
                onChange={inputKmHandler}
                min="1"
                required></input>
            <h4>Replaced part</h4>
            <input type="text"
                value={inputParts}
                onChange={inputPartHandler}
                required></input>
            <br></br>
            <button type='submit'>OK</button>
        </form>
    </div>

    return (
        <div>
            <div className='docs-heading'>
                <h2>SERVICE BOOK</h2>
                <button className='add-new-btn' onClick={handleShowNew}>Add new</button>
            </div>
            {
                !loading ? <>{
                    docs.length ? (
                        <>
                            {
                                docs.map((doc) => (
                                    <div className='main' key={doc.id}>
                                        <div className='docs'>
                                            <div className='div'>
                                                <h3>DATE</h3>
                                                <h3>{doc.date}</h3>
                                            </div>
                                            <div className='div'>
                                                <h3>KILOMETERS</h3>
                                                <h3>{doc.km}</h3>
                                            </div>
                                            <div className='div'>
                                                <h3>REPLACED PART</h3>
                                                <h3>{doc.part}</h3>
                                            </div>
                                            <div className='remove'>
                                                <FaTrashAlt onClick={() => deleteDocs(doc.id)} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    ) : (
                        <p className='empty'>This section is empty!</p>
                    )
                }</> : <Loader />
            }
            {
                showNew && addNew
            }
        </div>
    )
};

export default ServiceBook;