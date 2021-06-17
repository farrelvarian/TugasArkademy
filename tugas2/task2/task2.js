const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 40
const ipa = 69
if (mtk != null && bahasaIndonesia != null && bahasaInggris != null && ipa != null) {
    if (typeof mtk == 'number' && typeof bahasaIndonesia == 'number' && typeof bahasaInggris == 'number' && typeof ipa == 'number') {
        let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
        if (average <= 100) {
            if (average >= 90) {
                console.log(`Rata-rata = ${average} Grade = A`);
            } else {
                if (average >= 80) {
                    console.log(`Rata-rata = ${average} Grade = B`);
                } else {
                    if (average >= 70) {
                        console.log(`Rata-rata = ${average} Grade = C`);
                    } else {
                        if (average >= 60) {
                            console.log(`Rata-rata = ${average} Grade = D`);
                        } else {
                            if (average >= 0) {
                                console.log(`Rata-rata = ${average} Grade = E`);
                            }
                        }
                    }
                }
            }
        } else {
            console.log('input nilai salah');
        }
    } else {
        console.log('input nilai bukan angka');
    }
} else {
    console.log('ada nilai yang kosong');
}