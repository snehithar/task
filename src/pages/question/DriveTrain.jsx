import { Form, Radio } from 'antd';
import React from 'react';


function DriveTrain() {
    return (
        <>
            <Form.Item
                name="driveTrain"
                rules={[{ required: true, message: "Please select an option!" }]}
            >
                <Radio.Group >
                    <Radio value='FWD'>FWD</Radio>
                    <Radio value='RWD'>RWD</Radio>
                    <Radio value='UNKNOWN'>I don't know</Radio>
                </Radio.Group>
            </Form.Item>
        </>
    );
}

export default DriveTrain;
