import { Form, Radio } from 'antd';
import React from 'react';

function FirstCar() {
    return (
        <>
            <Form.Item
                name="firstCar"
                rules={[{ required: true, message: "Please select an option!" }]}
            >
                <Radio.Group >
                    <Radio value='YES'>YES</Radio>
                    <Radio value='NO'>No</Radio>
                </Radio.Group>
            </Form.Item>
        </>
    );
}

export default FirstCar;
