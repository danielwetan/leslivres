import React, { useState, useEffect } from 'react';

const History = props => {

  const [status, setStatus] = useState('');

  useEffect(() => {
    if (props.status === 1) {
      setStatus('Borrowed');
    } else {
      setStatus('Returned');
    }
  }, [props])

  return (
    <>
      <tbody className="text-center">
        <tr>
          <th scope="row">{props.book}</th>
          <th>{status}</th>
          <th>{props.borrow_date}</th>
          <th>{props.return_date}</th>
        </tr>
      </tbody>
    </>
  )
}

export default History;