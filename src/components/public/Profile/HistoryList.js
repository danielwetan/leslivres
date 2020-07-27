import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import History from './History';

import {connect} from 'react-redux';

const HistoryList = (props) => {
  const [transactionData, setTransactionData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTransactionData = () => {
    Axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + `transaction/${props.auth.data.id}`
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(HistoryList);