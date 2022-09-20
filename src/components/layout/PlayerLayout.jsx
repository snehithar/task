import { Col, Row } from 'antd';
import React from 'react';
import MainLayout from './MainLayout';


function PlayerLayout({ children }) {
    return (
        <MainLayout>
            <div style={{ textAlign: 'center', marginTop: "100px" }}>
                <Row>
                    <Col lg={6} sm={2}/>
                    <Col lg={12} sm={20}>{children}</Col>
                    <Col lg={6} sm={2}/>
                </Row>

            </div>
        </MainLayout>
    );
}

export default PlayerLayout;
