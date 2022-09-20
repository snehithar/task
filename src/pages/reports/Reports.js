
import { Row, Col } from 'antd';
import React from 'react';
import PlayerLayout from '../../components/layout/PlayerLayout';
import { averageCarNumber, firstTimers, targetables, under18s, unLicenced } from '../../service/db';
import Breakdown from './overview/Breakdown';
import GroupBreakdown from './overview/GroupBreakdown';
import ProgressC from './overview/Progress';
import SSCard from './overview/SSCard';

function Reports() {
    return (
        <PlayerLayout>
            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <SSCard title="Adolescents" method={under18s} name='adolescents' />
                </Col>
                <Col span={6}>
                    <SSCard title="Unlicenced" method={unLicenced} name='unlicenced' />
                </Col>
                <Col span={6}>
                    <SSCard title="First Timers" method={firstTimers} name='firstTimer' />
                </Col>
                <Col span={6}>
                    <SSCard title="Targetables" method={targetables} name='targetables' />
                </Col>
                <Col span={24}>
                    <GroupBreakdown />
                </Col>
                <Col span={16}>
                    <ProgressC />
                </Col>
                <Col span={8}>
                    <SSCard title="Average in a family" method={averageCarNumber} name='averageCars' />
                </Col>
                <Col span={24}>
                    <Breakdown />
                </Col>

            </Row>
        </PlayerLayout>
    );
}

export default Reports;
