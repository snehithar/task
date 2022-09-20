
import { Card, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../../redux/actionCreator/reportActionCreator';
import { round } from '../../../utils/helper';

function SSCard({ name, method, title }) {
    const dispatch = useDispatch()
    const data = useSelector(st => st.report)
    useEffect(() => {
        dispatch(load(name, method))
    }, [])
    return (
        <Card title={title}>
            {data[`${name}_loading`] ? <Spin /> : round(data[name], 2)}

        </Card>
    );
}

export default SSCard
