import React, { useState, useEffect } from "react";

const callBackendAPI = async (orderType) => {
  const response = await fetch("/rank-list?order=" + orderType);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

function UserListItem(props) {
  return (
    <div>
      <h3>{props.user.user}</h3>
    </div>
  )
}

function FunnyRankings() {
  // Implement the component for the funny rankings of sales reps

  // The state to maintain data from a response from the backend
  const [data, setData] = useState([]);

  // The state of Funny order type. 0: funniest to the top, 1: funniest to the bottom
  const [orderType, setOrderType] = useState(0);  // If you want to reverse the funnyrank order, please set initial value as 1

  // This is called once when the component is mounted in the DOM to fetch
  // the data from the backend and set the state to the response
  useEffect(() => {
    callBackendAPI(orderType)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>{data.map( user => <UserListItem user={user} />)}</div>;
}

export default FunnyRankings;
