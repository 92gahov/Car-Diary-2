import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Loader from '../Loader';

const Insurance = ({ urlInsurance }) => {

    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showNew, setShowNew] = useState(false);
    const [inputDateF, setInputDateF] = useState("");
    const [inputDateS, setInputDateS] = useState("");
    const [inputPrice, setIputPrice] = useState("");

    let dateSplitF = inputDateF.split("-");
    let dateFormatF = `${dateSplitF[2]}.${dateSplitF[1]}.${dateSplitF[0]}`;
    let dateSplitS = inputDateS.split("-");
    let dateFormatS = `${dateSplitS[2]}.${dateSplitS[1]}.${dateSplitS[0]}`;

    const getDocs = () => {
        axios.get(urlInsurance)
            .then((res) => {
                setDocs(res.data);
                setLoading(false);
            })
    };

    const addDocs = (e) => {
        e.preventDefault();
        axios.post(urlInsurance, {
            from: dateFormatF,
            until: dateFormatS,
            price: inputPrice,
            doc: "Insurance"
        })
            .then((res) => {
                setDocs([...docs, res.data])
            })
        setShowNew(false);
        setInputDateF("");
        setInputDateS("");
        setIputPrice("");
    };

    const deleteDocs = (id) => {
        const newDocs = docs.filter((doc) => doc.id !== id);
        axios.delete(urlInsurance + "/" + id);
        setDocs(newDocs);
    };

    const inputDateHandlerF = (e) => {
        setInputDateF(e.target.value);
    };

    const inputDateHandlerS = (e) => {
        setInputDateS(e.target.value);
    };

    const inputPriceHandler = (e) => {
        setIputPrice(e.target.value);
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
            <h4>Valid from</h4>
            <input type="date"
                value={inputDateF}
                onChange={inputDateHandlerF}
                required></input>
            <h4>Valid until</h4>
            <input type="date"
                value={inputDateS}
                onChange={inputDateHandlerS}
                required></input>
            <h4>Price</h4>
            <input type="number"
                value={inputPrice}
                onChange={inputPriceHandler}
                min="1"
                step="any"
                required></input>
            <br></br>
            <button type='submit'>OK</button>
        </form>
    </div>

    return (
        <div>
            <div className='docs-heading'>
                <h2>INSURANCE</h2>
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
                                                <h3>VALID FROM</h3>
                                                <h3>{doc.from}</h3>
                                            </div>
                                            <div className='div'>
                                                <h3>VALID UNTIL</h3>
                                                <h3>{doc.until}</h3>
                                            </div>
                                            <div className='div'>
                                                <h3>PRICE</h3>
                                                <h3>{doc.price}</h3>
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

export default Insurance;