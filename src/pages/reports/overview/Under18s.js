
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';

import { under18s } from '../../../service/db'
function Under18s() {
    const [data, setData] = useState(false)
    useEffect(() => {
        async function getData() {
            let _data = await under18s()
            setData(_data.length)
        }
        getData()
    }, [])

    return (
        <Card title="Adolescents">{data}</Card>
    );
}

export default Under18s;
