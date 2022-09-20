
import { Card } from 'antd';
import React from 'react';

function SCard({ title, data }) {

    return (
        <Card title={title}>{data}</Card>
    );
}

export default SCard;
