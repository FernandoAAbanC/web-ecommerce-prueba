export const formatoCurrency = (number: number) => {
    let value = number.toFixed(2);
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = value.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0].concat('.00');       
}