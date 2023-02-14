import { useState } from 'react';
import { IRecord } from './IRecord';

const AddingPanel = () => {
    const [type, setType] = useState('');
    const [person, setPerson] = useState('');
    const [details, setDetails] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = ()  => {

        const record: IRecord = {type: type, person: person, details: details, amount: amount};

        fetch('http://localhost:8000/records', {
            method: "POST",
            headers: { "Content-type" : "application/json" },
            body: JSON.stringify(record)
        }).then ( () => {
            console.log('added');
        }
        )
    }

    return ( 
        <div className="adding-panel">
            <form onSubmit={handleSubmit}>
                <label className='label-type'>Type:</label>
                <select 
                    className='input-type'
                    required
                    value={type}
                    onChange={ (e) => setType(e.target.value)}    
                >
                    <option value="Payment">Payment</option>
                    <option value="Invoice">Invoice</option>
                </select>
                <label className='label-person'>To/From:</label>
                <input 
                    className='input-person'
                    type="text"
                    required
                    value={person} 
                    onChange={ (e) => setPerson(e.target.value)}
                />
                <label className='label-details'>Details:</label>
                <input 
                    className='input-details'
                    type="text"
                    required
                    value={details}
                    onChange={ (e) => setDetails(e.target.value)} 
                />
                <label className='label-amount'>Amount($):</label>
                <input 
                    className='input-amount'
                    type="number"
                    min={0}
                    required
                    value={amount}
                    onChange={ (e) => setAmount(parseInt(e.target.value))}
                />
                <button className='add-btn'>Add</button>
                <p>Type: {type}</p>
                <p>Person: {person}</p>
                <p>Details: {details}</p>
                <p>Amount: {amount}</p>
            </form>
        </div>
     );
}
 
export default AddingPanel;