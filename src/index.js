module.exports = function toReadable (number) {
    const arr = ['',' one',' two',' three',' four',' five',' six',' seven',' eight',' nine',' ten',' eleven',
    ' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen'];
    const arr2 = ['','',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety']
    
    if (number === 0) return 'zero';
    let strnum = String(number).padStart(3,'0');

    let x  = (strnum[0] === '0') ? '' : arr[strnum[0]] + ' hundred' ;
        x += (Number(strnum.slice(1)) < 20) ? arr[Number(strnum.slice(1))] : 
             arr2[strnum[1]] + arr[strnum[2]];
    return x.trim();
    }  