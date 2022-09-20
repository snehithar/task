import { Form, Input, Select, Space } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { areas } from '../../utils/constants';
import { isValidBmwModel } from '../../utils/helper';

const CarMake = () => {
    const store = useSelector(st => st.question)
    const [initialValue, setInitialValue] = useState([])
    useEffect(() => {
        if (store.carNumber) {
            const init = new Array(parseInt(store.carNumber)).fill().map((e, i) => {
                return { make: "", model: "" }
            })
            setInitialValue(init)
        }
    }, [store.carNumber]);

    return (

        <div className='makeAndModel'>
            {initialValue.length > 0 && (<Form.List name="makeAndModel"
                initialValue={initialValue}  >
                {(fields) => {
                    return (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    className='makeAndModel-middle'
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'make']}
                                        width="30%"

                                        placeholder='Select Car Make'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Car Make',
                                            },
                                        ]}
                                    >
                                        <Select
                                            defaultValue={areas[0]}
                                            style={{ width: 120 }}
                                            placeholder='Select Car Make'>
                                            {areas.map((i) => (
                                                <Select.Option key={i.value}>{i.label}</Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'model']}
                                        placeholder='Select Car Model'
                                        fieldKey={[key, "first"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Model Name',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator() {
                                                    const makeModelObj = getFieldValue("makeAndModel")[key]
                                                    console.log(makeModelObj)
                                                    if (makeModelObj.make === "BMW") {
                                                        if (!isValidBmwModel(makeModelObj.model))
                                                            return Promise.reject("Should be a valid BMW Model");
                                                    }

                                                    return Promise.resolve();
                                                }
                                            })
                                        ]}
                                    >
                                        <Input placeholder='Select Car Model' />
                                    </Form.Item>
                                </Space>
                            ))}

                        </>
                    )
                }
                }
            </Form.List>)
            }
        </div>

    );
}
export default CarMake;
