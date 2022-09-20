import React from 'react';
import Age from './Age';
import Gender from './Gender';
import Licence from './Licence';
import FirstCar from './FirstCar';
import DriveTrain from './DriveTrain';
import CarNumber from './CarNumber';
import Fuel from './Fuel';
import MakeAndModel from './MakeAndModel';

const Template = (props) => {
    const template_map = {
        'Age': <Age {...props} />,
        'Gender': <Gender {...props} />,
        'Licence': <Licence {...props} />,
        'FirstCar': <FirstCar {...props} />,
        'DriveTrain': <DriveTrain {...props} />,
        'Fuel': <Fuel {...props} />,
        'CarNumber': <CarNumber {...props} />,
        'MakeAndModel': <MakeAndModel {...props} />,

    };
    return template_map[props.type] || 'ENDDDD';
};

export default Template;
