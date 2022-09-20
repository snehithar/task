import { Form, Radio } from 'antd';
import React from 'react';


function Gender() {
    return (
        <>
            <Form.Item
                name="gender"
                rules={[{ required: true, message: "Please select an option!" }]}
            >
                <Radio.Group >
                    <Radio value='MALE'>MALE</Radio>
                    <Radio value='FEMLE'>FEMLE</Radio>
                    <Radio value='OTHER'>OTHER</Radio>
                </Radio.Group>
            </Form.Item>
        </>
    );
}

export default Gender;
