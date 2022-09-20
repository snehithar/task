
import { Card, Col, Progress, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { progress } from '../../../redux/actionCreator/reportActionCreator';
import { setData } from '../../../redux/actions/reportAction';
import { driveTrain, fuelEmission } from '../../../service/db';
import { round } from '../../../utils/helper';



function ProgressC() {
    const dispatch = useDispatch()
    const [state, setState] = useState({})
    const { progress_loading, targetables, fuel, drive } = useSelector(st => st.report)

    useEffect(() => {
        dispatch(progress())
    }, [])

    useEffect(() => {
        setState({
            targetables,
            fuel: round(100 * fuel / targetables, 2),
            drive: round(100 * drive / targetables, 2)
        })
    }, [targetables, fuel, drive])
    return (
        <Card title={'Targetables : ' + targetables}>
            {
                progress_loading ? <Spin /> : (
                    <> <Row>
                        <Col sm={9}>
                            Care About Fuel Emission
                        </Col>
                        <Col sm={15}>
                            <Progress percent={state.fuel} status="active" strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }} />
                        </Col>
                    </Row>
                        <Row>
                            <Col sm={9}>
                                Drive Train FWD/I Don't Know
                            </Col>
                            <Col sm={15}>
                                <Progress percent={state.drive} status="active" strokeColor={{
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

export default ProgressC
