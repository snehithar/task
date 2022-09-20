import { Form, Input } from 'antd';
import React from 'react';

const CarNumber = ({ }) => {

    return (
        <>
            <Form.Item
                name="carNumber"
                rules={[
                    { required: true, message: 'Please input your Car Number!' },
                    {
                        pattern: /^(?:\d*)$/,
                        message: "Value should contain just number",
                    }, () => ({
                        validator(_, value) {
                            value = parseInt(value)
                            if (value < 1) {
                                return Promise.reject("Should be greater than 0");
                            }
                            if (value > 30) {
                                return Promise.reject("Should not exceed 30");
                            }
                            return Promise.resolve();
                        },
                    })
                ]}
            >
                <Input type='number' />
            </Form.Item>
        </>
    );
}
export default CarNumber;
