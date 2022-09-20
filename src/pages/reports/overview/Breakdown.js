
import { Card, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { areas } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { breakdownData } from '../../../redux/actionCreator/reportActionCreator';
const Make = areas.map(i => i.value)

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: "The car make and model distribution",
        },
    },
};

const labels = Make

function Breakdown() {
    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    const { breakdown_loading, breakdown } = useSelector(st => st.report)
    useEffect(() => {
        dispatch(breakdownData())
    }, [])
    useEffect(() => {
        if (breakdown) {
            const res = breakdown.reduce((acc, curr) => {
                let makes = curr.makeAndModel ? curr.makeAndModel.map(x => x.make) : []
                const result = makes.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});
                const xx = mergeFruits(acc, result)
                return xx;
            }, {});
            setData({
                labels,
                datasets: [
                    {
                        label: 'Make number',
                        data: Make.map(i => res[i] || 0),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ],
            })
        }
    }, [breakdown])

    const mergeFruits = (base, toMerge) => {
        const result = {};
        const data = [base, toMerge]
        data.forEach(basket => {
            for (let [key, value] of Object.entries(basket)) {
                if (result[key]) {
                    result[key] += value;
                } else {
                    result[key] = value;
                }
            }
        });
        return result;
    };
    return (
        <Card title='The car make and model distribution'>
            {!breakdown_loading && data  ? <Bar options={options} data={data} /> : <Spin/> }
        </Card>
    );
}

export default Breakdown
