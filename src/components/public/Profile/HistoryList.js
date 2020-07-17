import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import History from './History';

const HistoryList = () => {
  const [transactionData, setTransactionData] = useState([]);

  const getTransactionData = () => {
    Axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + 'transaction/1'
    })
      .then((res) => {
        // console.log(res.data.body)
        setTransactionData(res.data.body);
        console.log(res.data.body)
      })
      .catch((err) => {
        console.log(err.response);
      })
  }

  useEffect(() => {
    getTransactionData()
  }, [])

  return (
    <>

      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Book</th>
            <th scope="col">Status</th>
            <th scope="col">Borrow Date</th>
            <th scope="col">Return Date</th>
          </tr>
        </thead>
        {transactionData.map((data) => {
          return <History
            key={data.id}
            id={data.id}
            user={data.user}
            book={data.book}
            status={data.status}
            borrow_date={data.borrow_date}
            return_date={data.return_date} />
        })}
      </table>
    </>
  )
}

export default HistoryList;