# Commission Calculator

Aplikasi ini membantu pengguna untuk menghitung komisi yang akan mereka terima saat closing job. Aplikasi ini menyediakan fitur CRUD untuk Job dan dashboard untuk menampilkan grafik jumlah job dan gross profit.

## Fitur
- Kalkulasi komisi (10% dari gross profit)
- Dashboard dengan grafik jumlah job per employee dan gross profit per bulan

## Teknologi yang Digunakan
- Backend: Django
- Frontend: React.js
- Styling: Bootstrap
- Grafik: Chart.js

## Instalasi

### Prasyarat
Pastikan Anda sudah menginstal:
- Python (versi 3.6 atau lebih baru)
- Node.js dan npm

### Backend (Django)
1. Clone repository ini
   ```bash
   git clone <repository-url>
   cd calculator-comission
   ```

2. Buat virtual environment dan aktifkan
   ```bash
   python -m venv venv
   source venv/bin/activate   # Untuk Windows: venv\Scripts\Activate.bat
   ```

3. Install dependencies
   ```bash
   pip install django
   ```

4. Migrasi database
   ```bash
   python manage.py migrate
   ```

5. Jalankan server Django
   ```bash
   python manage.py runserver
   ```

### Frontend (React)
1. Pindah ke direktori frontend
   ```bash
   cd commission-calculator-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Jalankan aplikasi React
   ```bash
   npm start
   ```

Aplikasi sekarang dapat diakses di `http://localhost:3000`.

## Penggunaan
### Create Job
1. Pilih tab "Calculator" di navigasi atas.
2. Isi form dengan memilih employee, tanggal, amount, dan gross profit.
3. Komisi akan otomatis dihitung sebagai 10% dari gross profit.
4. Klik "Create Job" untuk menyimpan job ke database.

### Dashboard
1. Pilih tab "Dashboard" di navigasi atas.
2. Lihat grafik jumlah job per employee dan gross profit per bulan.

## Dummy Data
Untuk kemudahan pengujian, anda perlu siapkan data dummy. Anda dapat menambahkannya melalui Django admin untuk create Employee atau langsung melalui aplikasi.