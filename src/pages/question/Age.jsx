import { Form, Input } from 'antd';
import React from 'react';

const Age = () => {

    return (
        <>
            <Form.Item
                name="age"
                rules={[{ required: true, message: 'Please input your age!' },
                {
                    pattern: /^(?:\d*)$/,
                    message: "Value should contain just number",
                }, () => ({
                    validator(_, value) {
                        value = parseInt(value)
                        if (value < 1) {
                            return Promise.reject("Should be greater than 0");
                        }
                        if (value > 150) {
                            return Promise.reject("Should not exceed 150");
                        }
                        return Promise.resolve();
                    },
                })]}
            >
                <Input type='number' />
            </Form.Item>
        </>
    );
}
export default Age;
