function hitung() {

    var idnama = document.getElementById("nama").value;
    var idhari = document.getElementById("hari").value;
    var idtanggal = document.getElementById("tanggal").value;
    var idtahun = document.getElementById("tahun").value;
    var idayah = document.getElementById("ayah").value;
    var idibu = document.getElementById("ibu").value;
    var idlain = document.getElementById("lain").value;

    var totalnama = 0
    var kecil = 'abcdefghijklmnopqrstuvwxyz'
    var besar = kecil.toUpperCase()
    var arr = []
    //aiueo
    var nilai = [1, 2, 3, 4, 1, 80, 20, 5, 10, 3, 20, 30, 40, 50, 6, 80, 100, 200, 60, 400, 6, 80, 6, 60, 11, 700]
    for (var a = 0; a < idnama.length; a++) {
        for (var b = 0; b < kecil.length; b++) {
            if (idnama[a] == 'i' && a == 0 || idnama[a] == 'i' && idnama[a - 1] == ' ') {
                arr.push([1, idnama[a]])
                totalnama += 1
                break
            } else if (idnama[a] == 'o' && a == 0 || idnama[a] == 'o' && idnama[a - 1] == ' ') {
                arr.push([7, idnama[a]])
                totalnama += 7
                break
            } else if (idnama[a] == 'u' && a == 0 || idnama[a] == 'u' && idnama[a - 1] == ' ') {
                arr.push([7, idnama[a]])
                totalnama += 7
                break
            } else if (idnama[a] == kecil[b] || idnama[a] == besar[b]) {
                arr.push([nilai[b], idnama[a]])
                totalnama += nilai[b]

            }
        }
    }
    // document.getElementById('hasil').value = 'nama : ' + idnama + '\n' + ' total : ' + totalnama + ' / ' + (totalnama % 9) + '\n'
    //     + ' hari lahir : ' + idhari + '\n' + ' tanggal : ' + idtanggal + '\n' + ' tahun : '
    //     + idtahun + '\n' + ' ayah : ' + idayah + '\n' + ' ibu : ' + idibu + '\n' + ' lain lain : ' + idlain + '\n' + arr;
    // document.getElementById('hasil').style.display = 'block'
    alert('nama : ' + idnama + '\n' + ' total : ' + totalnama + '  /  ' + (totalnama % 9) + '\n'
        + ' hari lahir : ' + idhari + ' tanggal : ' + idtanggal + ' tahun : '
        + idtahun + ' ayah : ' + idayah + ' ibu : ' + idibu + '\n' + ' tujuan : ' + idlain + '\n' + arr + '\n' + '\n' + '\n' + '\n')
}
function aturan() {
    alert(' lain lain isikan tujuan perhitungan  setelah itu pilih menu hitung  akan muncul pop up hasilnya  screenshot dan kirim lewat wa saya 085280800076')
}