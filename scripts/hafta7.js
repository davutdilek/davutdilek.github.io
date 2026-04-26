document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Tema Değiştirme Mantığı
    const temaButonu = document.getElementById("temaButonu");
    const htmlElement = document.documentElement; // HTML veya Body kullanılabilir, Bootstrap genelde ikisini de tanır

    temaButonu.addEventListener("click", function () {
        // Mevcut temayı kontrol et
        const currentTheme = document.body.getAttribute("data-bs-theme");

        if (currentTheme === "light") {
            // Koyu moda geç
            document.body.setAttribute("data-bs-theme", "dark");
            temaButonu.textContent = "Açık Temaya Geç";
            temaButonu.className = "btn btn-light btn-lg"; // Buton stilini de değiştir
        } else {
            // Açık moda geç
            document.body.setAttribute("data-bs-theme", "light");
            temaButonu.textContent = "Koyu Temaya Geç";
            temaButonu.className = "btn btn-dark btn-lg";
        }
    });

    // 2. Form Özeti Oluşturma
    const kayitFormu = document.getElementById("kayitFormu");
    const sonucAlani = document.getElementById("sonucAlani");

    if (kayitFormu) {
        kayitFormu.addEventListener("submit", function (e) {
            e.preventDefault();

            const adSoyad = document.getElementById("adSoyad").value;
            const eposta = document.getElementById("eposta").value;
            const sinif = document.getElementById("sinif").value;
            const katilimTuru = document.getElementById("katilimTuru").value;
            const mesaj = document.getElementById("mesaj").value;

            // Özet HTML oluştur
            sonucAlani.className = "alert alert-success mt-4";
            sonucAlani.innerHTML = `
                <h4 class="alert-heading">Başvuru Özeti</h4>
                <hr>
                <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
                <p><strong>E-posta:</strong> ${eposta}</p>
                <p><strong>Sınıf:</strong> ${sinif}</p>
                <p><strong>Katılım Türü:</strong> ${katilimTuru}</p>
                <p><strong>Mesaj:</strong> ${mesaj || "Girilmedi"}</p>
            `;
        });

        // Form temizlendiğinde mesajı sıfırla
        kayitFormu.addEventListener("reset", function () {
            sonucAlani.className = "alert alert-info mt-4";
            sonucAlani.textContent = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.";
        });
    }
});
