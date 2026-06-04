<<<<<<< HEAD


# CLONING WEB X/TWITTER


DESKRIPSI
===================================================================================================================================


Di project ini saya mengcloning web x/twitter sederhana yang dibuat menggunakan react dan tailwind CSS, menggunakan api dan usetate







FITUR
===================================================================================================================================


-user bisa memposting

-user bisa melihat daftar posting yang di ambil dari api

-navigation bar

-sidebar

-rightbar 

-trending view



TECH STACK
===================================================================================================================================



-ReactJS

-Tailwind CSS

-React Hooks (useState, useEffect)




PROJECT STRUCTURE
===================================================================================================================================

![Home](./src/assets/screenshot/STRUCTUREIMG.png)



pada project ini, struktur dibagi menjadi beberapa bagian utama seperti

components untuk komponen UI yang bisa digunakan ulang seperti:

sidebar
======================================================
Fungsi:

Menu samping (kiri)
seperti:

-Home

-Profile

-chat


rightbar
======================================================
Fungsi:

Sidebar kanan
berisi:

-Trending

-today news



navbar
======================================================
Fungsi:

Navigasi atas (for you dan following)
Biasanya ada icon + menu


halaman utaman/mainpage
======================================================
Fungsi:

-main content / feed

-Tempat post muncul


sidebar.css
======================================================
Fungsi:

-Styling khusus sidebar

-Dipisah karena lebih kompleks



CODE EXPLANATION
======================================================

![Home](./src/assets/screenshot/appcode.png)

## Code Explanation (App.jsx)

### Import React & Components
-Mengimpor React dan semua komponen yang digunakan seperti Navbar, Mainpage, Sidebar, dan RightSidebar.

### Navbar Component
-Menampilkan navigasi di bagian atas.

### Main Content (Mainpage)
-Menampilkan konten utama aplikasi.
Wrapper (div pt-20)
Memberikan jarak atas agar konten tidak tertutup Navbar.

### Sidebar Component
-Menampilkan navigasi di sisi kiri.

### RightSidebar Component
-Menampilkan konten tambahan di sisi kanan.


>>>>>>> cccab9d21fea63276269aaa883abae2dd58703ce
