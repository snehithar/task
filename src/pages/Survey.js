
import { Button, Form, Typography } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import _ from 'lodash'
import { useNavigate } from 'react-router-dom';
import PlayerLayout from '../components/layout/PlayerLayout';
import useQuestion from '../hooks/useQuestion';
import Template from './question/Template';
import Thanks from './Thanks';



const { Title } = Typography;

const QUESTIONS = [
    {
        screen: 'Age', question: "Age ?",
        beforeSubmit: parseInt,
        afterSubmit: (value) => value < 18,
        errorMessage: "Thank you for taking time submit your response"
    },
    {
        screen: 'Gender', question: "Gender ?",
    },
    {
        screen: 'Licence', question: "Do you own a car driving license?",
        afterSubmit: value => value === "NO",
        errorMessage: "Thank you for taking time submit your response"
    },
    {
        screen: 'FirstCar', question: "Is this your first car?",
        skip: (store) => store.age > 25,
        afterSubmit: value => value === "YES",
        errorMessage: "We are targeting more experienced clients, thank you for your interest"
    },
    {
        screen: 'DriveTrain', question: "Which drivetrain do you prefer?",
    },
    {
        screen: 'Fuel', question: " Are you worried about fuel emissions?",
    },
    {
        screen: 'CarNumber', question: "How many cars do you have in your family?",
        beforeSubmit: parseInt,
    },
    {
        screen: 'MakeAndModel', question: "Which car make and model do you drive?",
    }
]


function Survey() {
    const history = useNavigate()
    const [form] = Form.useForm()
    const [id] = useState("id" + Math.random().toString(16).slice(2))
    const { handleFinish, theEnd, module, loading, building } = useQuestion(form, QUESTIONS, id)

    useEffect(() => {
        if (theEnd !== null) {
            if (theEnd) {
                history('/done')
            }
        }
    }, [theEnd])
    useEffect(() => {
        if (theEnd !== null) {
            if (theEnd) {
                history('/done')
            }
        }
    }, [theEnd])



    return (
        <>
            {theEnd === null &&
                (<PlayerLayout>
                    {!building && <Form
                        autoComplete='off'
                        form={form}
                        onFinish={handleFinish}>
                        <Title level={4}>{module.question}</Title>
                        <Template type={module.screen} form={form} />
                        <Button loading={loading} type='primary' htmlType="submit" size='large' shape='round'>
                            Next
                        </Button>
                    </Form>}
                </PlayerLayout>)
            }
            {theEnd !== null && !theEnd && (<Thanks message={module.errorMessage} />)}
        </>
    );
}
export default Survey;
