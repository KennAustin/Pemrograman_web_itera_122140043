function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript😁!`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-green-500">${pesan}</p>`;
    }
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    switch (operasi) {
        case "tambah":
            return `${angka1} + ${angka2} = ${angka1 + angka2}`;
        case "kurang":
            return `${angka1} - ${angka2} = ${angka1 - angka2}`;
        case "kali":
            return `${angka1} × ${angka2} = ${angka1 * angka2}`;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            return `${angka1} ÷ ${angka2} = ${angka1 / angka2}`;
        case "pangkat":
            return `${angka1} ^ ${angka2} = ${Math.pow(angka1, angka2)}`;
        case "akar":
            if (angka1 < 0) {
                return "Error: Tidak dapat menghitung akar kuadrat dari angka negatif";
            }
            return `√${angka1} = ${Math.sqrt(angka1)}`;
        case "modulus":
            return `${angka1} % ${angka2} = ${angka1 % angka2}`;
        default:
            return "Operasi tidak valid";
    }
} 

// Event handler untuk tombol operasi matematika
const operasiList = ["tambah", "kurang", "kali", "bagi", "pangkat", "akar", "modulus"];
operasiList.forEach(op => {
    document.getElementById(`btn-${op}`).addEventListener("click", function() {
        const angka1 = parseFloat(document.getElementById("angka1").value);
        const angka2 = parseFloat(document.getElementById("angka2").value);
        
        if (isNaN(angka1) || (op !== "akar" && isNaN(angka2))) {
            document.getElementById("hasil-kalkulator").innerHTML = 
                `<p class="text-red-500">Masukkan angka yang valid!</p>`;
        } else {
            const hasil = hitungKalkulator(angka1, angka2, op);
            document.getElementById("hasil-kalkulator").innerHTML = 
                `<p>Hasil: ${hasil}</p>`;
        }
    });
});