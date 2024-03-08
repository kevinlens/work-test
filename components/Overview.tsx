'use client';
import React, { useState } from 'react';
import { Numbers } from '.';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

let data = [];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip bg-[#121418] p-2'>
        <div className='text-center'>
          <h1 className='text-center'>Profit: </h1>
          <p className='text-green-500'>
            {Math.abs(payload[0]?.value).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const Overview = ({ users }:any) => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleUserChange = (event: { target: { value: any; }; }) => {
    const selectedUserId = event.target.value;
    const selectedUser = users.find((user: any) => user.id === selectedUserId);
    setSelectedUser(selectedUser);
  };

  data = selectedUser.loss.map((loss: any, i: string | number) => {
    return { name: i, loss: loss, profit: selectedUser.profit[i] };
  });

  return (
    <>
      <LineChart
        width={630}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' horizontal={false} />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip
          content={<CustomTooltip active={undefined} payload={undefined} />}
        />
        <Legend />
        <Line type='linear' dataKey='profit' stroke='#59bfbf' dot={false} />
        <Line type='linear' dataKey='loss' stroke='#eb4b42' dot={false} />
      </LineChart>
      <div>
        <div>
          Select User
          <select
            className='ml-4 mb-4'
            value={selectedUser.id}
            onChange={handleUserChange}
            style={{
              backgroundColor: '#0f1f2e',
              color: 'white',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
            }}
          >
            {users.map((user: any) => (
              <option key={user.id} value={user.id}>
                {user.fullName}
              </option>
            ))}
          </select>
        </div>
        <Numbers title={'Profit'} numbers={selectedUser.totalProfit} />
        <Numbers title={'Loss'} numbers={selectedUser.totalLoss} />
        <Numbers title={'Balance'} numbers={selectedUser.balance} />
      </div>
    </>
  );
};

export default Overview;
