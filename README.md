# 🧑‍💼 Hiring Management Web App

A simplified web application for managing job vacancies and job applications, built as part of a Frontend Engineer Case Study.

---

## 📌 Project Overview

Hiring Management Web App adalah platform yang memungkinkan:

- **Admin (Recruiter)** untuk membuat, mengelola, dan memonitor lowongan serta pelamar.
- **Applicant (Job Seeker)** untuk melihat lowongan aktif dan melamar melalui formulir dinamis berdasarkan konfigurasi backend.

Aplikasi dikembangkan dengan prinsip modular, scalable, dan enterprise-grade.

---

## 🛠 Tech Stack Used

### **Frontend**
- Next.js / React
- TypeScript
- TailwindCSS
- Zustand / Context API (state management)
- React Hook Form + Zod (validasi dinamis)

### **Backend / Data**
- Supabase / Mock API JSON

### **Other Tools**
- Webcam & hand-gesture detection (TensorFlow / MediaPipe)
- Deployment via Vercel
- Playwright / Jest (opsional)

---

## ▶️ How to Run Locally

### 1. Clone Repository
```bash
git clone https://github.com/your-repo/hiring-platform.git
cd hiring-platform
```

### 2. Install Dependencies
```bash
pnpm install
# atau
npm install
# atau
yarn install
```

### 3. Setup Environment

Buat file .env.local dan isi:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_KEY=your_key
```

Jika menggunakan mock API, environment dapat dikosongkan.

### 4. Start Development Server
```bash
pnpm dev
# atau
npm run dev
```

Akses aplikasi di:
http://localhost:3000

---

### ⭐ Key Features Implemented
### 👨‍💼 Admin Side
### 1. Job List Page

Menampilkan semua lowongan

- Sorting & filtering
- Status badge (Active / Inactive / Draft)
- “Manage Job” CTA
- Modal Create Job

### 2. Create Job

- Form metadata lowongan
- Konfigurasi field aplikasi (Mandatory / Optional / Off)
- Validasi form sesuai PRD
- Simpan konfigurasi ke backend

### 3. Candidate Management Page

- Tabel dinamis:

 * Resize column (drag)

Reorder column (drag & drop)

Sorting & filtering

Pagination

Data pelamar tersusun mengikuti backend order

🧑‍💼 Applicant Side
1. Job List Page

Daftar semua job aktif

Status apakah sudah melamar

Navigasi ke Job Detail

2. Apply Job Form

Field dirender dinamis berdasarkan backend:

required: true → mandatory

required: false → optional

field tidak ada → hidden

Validasi adaptif otomatis

3. Webcam Photo + Gesture

Deteksi gesture:

Pose 1 → ready

Pose 2 → focus

Pose 3 → capture otomatis

Preview & confirm photo

4. Feedback State

Success message

Highlight error field pada gagal submit

🚀 Optional Enhancements You Added

Dark mode support

Auto-save form draft

Tooltip pada konfigurasi Admin

Debounce pada pencarian lowongan

Empty state illustration

Loading skeleton (shimmer)

Global error boundary

Optimized image compression untuk profile photo

🧩 Design or Logic Assumptions

Field yang tidak ada di backend dianggap hidden

Photo mandatory hanya untuk full-time positions

Applicant hanya dapat apply sekali per job

Sorting dilakukan di frontend saat menggunakan mock API

Minimal column pelamar: name & email

⚠️ Known Limitations

Akurasi gesture detection tergantung kondisi pencahayaan

Mock API belum mendukung filtering/pagination server-side

Reorder column belum persistent ke backend

Tidak semua edge case PRD tersedia di mock response

🌐 Deployment & Credentials
Live URL

https://yourproject.vercel.app

Admin Credentials
email: admin@example.com
password: 123456

Applicant

Tidak memerlukan login.

📂 GitHub Repository

https://github.com/your-repo/hiring-platform

buat versi mackdown