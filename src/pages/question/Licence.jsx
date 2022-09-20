import { Form, Radio } from 'antd';
import React from 'react';

function Licence() {
    
    return (
        <>
            <Form.Item
                name="licence"
                rules={[{ required: true, message: "Please select an option!" }]}
            >
                <Radio.Group >
                    <Radio value='YES'>YES</Radio>
                    <Radio value='NO'>No, I prefer using other transport</Radio>
                </Radio.Group>
            </Form.Item>
        </>
    );
}

export default Licence;
