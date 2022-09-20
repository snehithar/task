
export const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100
export const isValidBmwModel = (text) => {
    let reg1 = /^([M]{1})?(\d{3})([d|i]?)$/g;
    let reg2 = /^([X|Z]{1})(\d{1})/g;

    return reg2.test(text) || reg1.test(text)
}