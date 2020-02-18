import React, { PureComponent, useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import axios from 'axios';
import LoadingBackdrop from '../../common/LoadingBackdrop';

const Example = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <h4>Show Count</h4>
          <AreaChart
            width={1000}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="click"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
          <h4>QR View Count</h4>
          <AreaChart
            width={1000}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="qr"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </>
      ) : (
        <LoadingBackdrop />
      )}
    </>
  );
};

export default Example;
