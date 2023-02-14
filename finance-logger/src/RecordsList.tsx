import { useEffect, useState } from "react";
import { IRecord } from "./IRecord";

const RecordsList = () => {

    const [records, setRecords] = useState<Array<IRecord>>([]);

    useEffect( () => {
        fetch('http://localhost:8000/records')
          .then( res => res.json())
          .then( data  => {
            setRecords(data)
            }) 
      }, []);

      const checkIsPayment = (type:string) => {
        if (type === "payment") {
            return true;
        }
        return false;
      }

    return ( 
        <div className="records-list">
            {records.map((record) => (
                <section className="record" key={record.id}>
                    <div className="record-type">{record.type}</div>
                    {checkIsPayment(record.type) ? 
                    (<div> <p>{record.person} is owned {record.amount}$ for {record.details}</p> </div>)
                    :(<div> <p>{record.person} owes {record.amount}$ for {record.details}</p> </div>)}
                </section>
            ) )}
        </div>
     );
}
 
export default RecordsList;