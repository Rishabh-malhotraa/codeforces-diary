import React from 'react';
import axios from 'axios';
import { USER_INFO, USER_QUESTIONS, USER_RATING } from 'API';

const handle = 'rishgod';

const Dashboard = () => {
  const handleClick = async () => {
    const response = await axios
      .get(USER_INFO, {
        params: {
          handles: handle,
        },
      })
      .catch((error) => console.log(error.response.request._response));

    console.log(response.data);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {' '}
        Click Me
      </button>
      <div className="">Hey</div>
    </div>
  );
};

export default Dashboard;
