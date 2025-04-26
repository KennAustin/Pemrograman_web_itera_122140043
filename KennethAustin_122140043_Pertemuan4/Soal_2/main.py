def main():
    # Data mahasiswa dalam bentuk list
    data_mahasiswa = [
        {"nama": "Andi", "nim": "001", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 80},
        {"nama": "Budi", "nim": "002", "nilai_uts": 75, "nilai_uas": 80, "nilai_tugas": 70},
        {"nama": "Cindy", "nim": "003", "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 70},
        {"nama": "Dedi", "nim": "004", "nilai_uts": 50, "nilai_uas": 55, "nilai_tugas": 60},
        {"nama": "Eva", "nim": "005", "nilai_uts": 40, "nilai_uas": 45, "nilai_tugas": 50},
    ]

    # Hitung nilai akhir dan tentukan grade untuk setiap mahasiswa
    for mhs in data_mahasiswa:
        nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
        mhs["nilai_akhir"] = round(nilai_akhir, 2)
        
        if nilai_akhir >= 80:
            mhs["grade"] = "A"
        elif 70 <= nilai_akhir < 80:
            mhs["grade"] = "B"
        elif 60 <= nilai_akhir < 70:
            mhs["grade"] = "C"
        elif 50 <= nilai_akhir < 60:
            mhs["grade"] = "D"
        else:
            mhs["grade"] = "E"

    # Tampilkan data dalam format tabel
    print("\nDaftar Nilai Mahasiswa")
    print("="*70)
    print("| {:<5} | {:<10} | {:<8} | {:<6} | {:<6} | {:<10} | {:<5} |".format(
        "NIM", "Nama", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"))
    print("="*70)
    
    for mhs in data_mahasiswa:
        print("| {:<5} | {:<10} | {:<8} | {:<6} | {:<6} | {:<10} | {:<5} |".format(
            mhs["nim"], mhs["nama"], mhs["nilai_uts"], mhs["nilai_uas"], 
            mhs["nilai_tugas"], mhs["nilai_akhir"], mhs["grade"]))
    print("="*70)

    # Cari mahasiswa dengan nilai tertinggi dan terendah
    tertinggi = max(data_mahasiswa, key=lambda x: x["nilai_akhir"])
    terendah = min(data_mahasiswa, key=lambda x: x["nilai_akhir"])

    print("\nMahasiswa dengan Nilai Tertinggi:")
    print(f"Nama: {tertinggi['nama']}, NIM: {tertinggi['nim']}, Nilai Akhir: {tertinggi['nilai_akhir']}, Grade: {tertinggi['grade']}")
    
    print("\nMahasiswa dengan Nilai Terendah:")
    print(f"Nama: {terendah['nama']}, NIM: {terendah['nim']}, Nilai Akhir: {terendah['nilai_akhir']}, Grade: {terendah['grade']}")

if __name__ == "__main__":
    main()