
import { Card, Col, Progress, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { round } from '../../../utils/helper';

function GroupBreakdown() {
    const [state, setState] = useState({})
    const { progress_loading, adolescents, unlicenced, firstTimer, targetables } = useSelector(st => st.report)

    useEffect(() => {
        setState({
            targetables,
            adolescents: round(100 * adolescents / targetables, 2),
            unlicenced: round(100 * unlicenced / targetables, 2),
            firstTimer: round(100 * firstTimer / targetables, 2)
        })
    }, [adolescents, unlicenced, firstTimer, targetables])
    return (
        <Card title='Breakdown of each respondent group'>
            {
                progress_loading ? <Spin /> : (
                    <> <Row>
                        <Col sm={9}>
                            Adolescents
                        </Col>
                        <Col sm={15}>
                            <Progress percent={state.adolescents} status="active" strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }} />
                        </Col>
                    </Row>
                        <Row>
                            <Col sm={9}>
                                Unlicenced
                            </Col>
                            <Col sm={15}>
                                <Progress percent={state.unlicenced} status="active" strokeColor={{
                                    from: '#108ee9',
                                    to: '#87d068',
                                }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={9}>
                                First-Timer
                            </Col>
                            <Col sm={15}>
                                <Progress percent={state.firstTimer} status="active" strokeColor={{
                                    from: '#108ee9',
                                    to: '#87d068',
                                }} />
                            </Col>
                        </Row>
                    </>
                )}



        </Card>
    );
}

export default GroupBreakdown
