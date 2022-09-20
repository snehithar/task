
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';

import { unLicenced } from '../../../service/db'

function UnLicenced() {
    const [data, setData] = useState(false)
    useEffect(() => {
        async function getData() {
            let _data = await unLicenced()
            setData(_data.length)
        }
        getData()
    }, [])

    return (
        <Card title="">{data}</Card>
    );
}

export default UnLicenced;
