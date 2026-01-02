# GüvenliÇek: KVKK Uyumlu ve Çevrimdışı Çalışan Yapay Zeka Destekli Yüz Maskeleme Mobil Kamera Uygulaması

Bu proje, TÜBİTAK 2204-B Ortaokul Öğrencileri Araştırma Projeleri Yarışması kapsamında geliştirilmiştir.

## 🟢 CANLI DEMO (Uygulamayı Dene)
Uygulamanın çalışan haline ve offline testine aşağıdaki linkten ulaşabilirsiniz:
👉 https://guvenli-cek.netlify.app

## 🎯 Projenin Amacı
Sosyal medya paylaşımlarında arka planda kalan üçüncü şahısların mahremiyetini korumak amacıyla; "tanıdık" yüzleri net bırakan, "yabancı" yüzleri ise otomatik olarak maskeleyen (bulanıklaştıran) yapay zeka destekli bir mobil kamera uygulamasıdır.

## 🚀 Özellikler
* **Tamamen Çevrimdışı (Offline):** İnternet bağlantısı gerektirmez.
* **KVKK Uyumlu:** Görüntüler sunucuya gitmez, %100 telefonun içinde işlenir (Client-Side).
* **Yapay Zeka:** SSD MobileNet V1 ve FaceNet modelleri kullanılmıştır.
* **PWA Teknolojisi:** Uygulama mağazasına gerek kalmadan kurulabilir.

## 📂 Dosya Yapısı
* `index.html`: Tüm HTML, CSS ve JavaScript kodlarını içerir.
* `/models`: Yapay zeka ağırlık dosyaları.
* `sw.js`: Çevrimdışı çalışma (Service Worker) kodları.
* `face-api.min.js`: Yüz tanıma kütüphanesi.
* `manifest.json`: Mobil uygulama yapılandırma dosyası.

## ⚠️ Yasal Uyarı
Bu proje eğitim ve araştırma amaçlı geliştirilmiştir.
