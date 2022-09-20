import { driveTrain, fuelEmission, breakdown } from '../../service/db';
import { setData } from '../actions/reportAction';

export const load = (key, method) => {
    return async dispatch => {
        try {
            dispatch(setData({ [`${key}_loading`]: true }));
            let _data = await method()
            dispatch(setData({ [key]: _data }));
            dispatch(setData({ [`${key}_loading`]: false }));
        } catch (err) {
            dispatch(setData({ [`${key}_loading`]: false }));
            dispatch(setData({ [`${key}_error`]: err.toString() }));
        }
    };
}

export const progress = () => {
    return async dispatch => {
        try {
            dispatch(setData({ 'progress_loading': true }));
            let [fuel, drive] = await Promise.all([fuelEmission(), driveTrain()])
            dispatch(setData({ fuel, drive }))
            dispatch(setData({ 'progress_loading': false }));
        } catch (err) {
            dispatch(setData({ 'progress_loading': false }));
            dispatch(setData({ 'progress_error': err.toString() }));
        }
    };
}
export const breakdownData = () => {
    return async dispatch => {
        try {
            dispatch(setData({ 'breakdown_loading': true }));
            let data = await breakdown()
            dispatch(setData({ breakdown: data }))
            dispatch(setData({ 'breakdown_loading': false }));
        } catch (err) {
            dispatch(setData({ 'breakdown_loading': false }));
            dispatch(setData({ 'breakdown_error': err.toString() }));
        }
    };
}
