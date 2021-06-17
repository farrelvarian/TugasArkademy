const printSegitiga = 'enam'
let n = printSegitiga
let temp = ""
if (typeof printSegitiga == 'number') {
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            temp = temp + " " + j
        }
        console.log(temp);
        temp = "";
    }
} else {
    console.log('Data harus number');
}