import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Chart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 2041,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 4023,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 7026,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 5029,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 6001,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 6070,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div>
                <h2 className='text-2xl font-bold text-orange-500 text-center p-5'>Line-Chart</h2>
                <LineChart width={500} height={350} data={data}>
                    <Line dataKey={"investment"} stroke="#4b5563"></Line>
                    <Line dataKey={"sell"} stroke=""></Line>
                    <Line dataKey={"revenue"} stroke="#34d399"></Line>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                </LineChart>
            </div>

            <div>
                <h2 className='text-2xl font-bold text-orange-500 text-center p-5'>ComposedChart</h2>
                <ComposedChart width={530} height={350} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Chart;