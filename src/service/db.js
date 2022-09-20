import { db } from '../lib/firebase'
import { collection, getDocs, addDoc, query, where } from "firebase/firestore/lite";

export const saveAnswer = (data) => {
    const col = collection(db, 'answer');
    return addDoc(col, data)
}
export const under18s = async () => {
    const ref = query(collection(db, "answer"), where("age", "<", 18));
    const citySnapshot = await getDocs(ref);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList.length;
}
export const unLicenced = async () => {
    const ref = query(collection(db, "answer"), where("licence", "==", "NO"));
    const citySnapshot = await getDocs(ref);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList.length;
}
export const firstTimers = async () => {
    const ref = query(collection(db, "answer"), where("firstCar", "==", "YES"));
    const citySnapshot = await getDocs(ref);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList.length;
}
export const targetables = async () => {
    const ref = query(collection(db, "answer"), where("carNumber", ">=", 0));
    const citySnapshot = await getDocs(ref);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList.length
}
export const fuelEmission = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const ref = query(collection(db, "answer"), where("fuel", "==", 'YES'));
            const citySnapshot = await getDocs(ref);
            const cityList = citySnapshot.docs.map(doc => doc.data());
            resolve(cityList.length)
        } catch (e) {
            reject(e)
        }
    })
}
export const driveTrain = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const ref = query(collection(db, "answer"), where("driveTrain", "in", ['FWD', 'UNKNOWN']));
            const citySnapshot = await getDocs(ref);
            const cityList = citySnapshot.docs.map(doc => doc.data());
            resolve(cityList.length)
        } catch (e) {
            reject(e)
        }
    })
}

export const averageCarNumber = async () => {

    const ref = query(collection(db, "answer"), where("carNumber", ">=", 0));
    const citySnapshot = await getDocs(ref);
    const tt = citySnapshot.docs.map(doc => doc.data());
    let totalCars = tt.reduce((sum, x) => {
        return sum + parseInt(x.carNumber || 0)
    }, 0)
    let target = tt.length
    return target ? totalCars / target : 0
}



export const breakdown = async () => {

    const ref = query(collection(db, "answer"), where("carNumber", ">=", 1));
    const citySnapshot = await getDocs(ref);
    const tt = citySnapshot.docs.map(doc => doc.data());

    return tt
}
