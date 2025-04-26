# Cara 1: Import seluruh modul
import math_operation as mo
from math_operation import celsius_ke_fahrenheit, celsius_ke_kelvin

def tampilkan_hasil(judul, hasil):
    print(f"\n{judul}")
    print("=" * 40)
    print(hasil)
    print("=" * 40)

def main():
    sisi = 5
    tampilkan_hasil("PERSEGI", 
                  f"Sisi: {sisi}\nLuas: {mo.luas_persegi(sisi)}\nKeliling: {mo.keliling_persegi(sisi)}")

    panjang, lebar = 6, 4
    tampilkan_hasil("PERSEGI PANJANG",
                  f"Panjang: {panjang}, Lebar: {lebar}\nLuas: {mo.luas_persegi_panjang(panjang, lebar)}\nKeliling: {mo.keliling_persegi_panjang(panjang, lebar)}")

    jari_jari = 7
    tampilkan_hasil("LINGKARAN",
                  f"Jari-jari: {jari_jari}\nLuas: {mo.luas_lingkaran(jari_jari):.2f}\nKeliling: {mo.keliling_lingkaran(jari_jari):.2f}\n(PI = {mo.PI})")

    celsius = 25
    tampilkan_hasil("KONVERSI SUHU",
                  f"{celsius}°C = {celsius_ke_fahrenheit(celsius):.2f}°F\n"
                  f"{celsius}°C = {celsius_ke_kelvin(celsius):.2f}°K")

    print(f"\nNilai konstanta PI dari modul: {mo.PI}")

if __name__ == "__main__":
    main()