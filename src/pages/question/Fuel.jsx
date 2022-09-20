import { Form, Radio } from 'antd';
import React from 'react';


function Fuel() {
    return (
        <>
            <Form.Item
                name="fuel"
                rules={[{ required: true, message: "Please select an option!" }]}
            >
                <Radio.Group >
                    <Radio value='YES'>YES</Radio>
                    <Radio value='NO'>NO</Radio>
                </Radio.Group>
            </Form.Item>
        </>
    );
}

export default Fuel;
