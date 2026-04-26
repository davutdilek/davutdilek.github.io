document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Tema Değiştirme Etkileşimi [cite: 38, 77, 92, 111]
    const temaButonu = document.getElementById("temaButonu");
    
    temaButonu.addEventListener("click", function () {
        const bodyElement = document.body;
        const mevcutTema = bodyElement.getAttribute("data-bs-theme");

        if (mevcutTema === "light") {
            bodyElement.setAttribute("data-bs-theme", "dark");
            temaButonu.textContent = "Açık Temaya Geç";
            temaButonu.classList.replace("btn-dark", "btn-light");
        } else {
            bodyElement.setAttribute("data-bs-theme", "light");
            temaButonu.textContent = "Koyu Temaya Geç";
            temaButonu.classList.replace("btn-light", "btn-dark");
        }
    });

    // 2. Form Özeti ve Doğrulama Etkileşimi [cite: 74, 93, 112, 113]
    const kayitFormu = document.getElementById("kayitFormu");
    const sonucAlani = document.getElementById("sonucAlani");

    kayitFormu.addEventListener("submit", function (event) {
        // Form gönderildiğinde sayfanın yenilenmesini engeller [cite: 74, 93]
        event.preventDefault(); 

        // Input elemanlarındaki değerlerin alınması [cite: 35]
        const adSoyad = document.getElementById("adSoyad").value.trim();
        const eposta = document.getElementById("eposta").value.trim();
        const sinif = document.getElementById("sinif").value;
        const katilimTuru = document.getElementById("katilimTuru").value;
        const mesaj = document.getElementById("mesaj").value.trim();
        const onay = document.getElementById("onay").checked;

        // Eksik alan kontrolü ve uyarı verilmesi [cite: 36, 75, 94]
        if (!adSoyad || !eposta || !sinif || !katilimTuru || !onay) {
            alert("Lütfen zorunlu tüm alanları doldurun ve onay kutusunu işaretleyin.");
            return; 
        }

        // Başarılı durumda sonucun HTML içine basılması [cite: 37, 76, 95]
        sonucAlani.classList.replace("alert-info", "alert-success");
        sonucAlani.innerHTML = `
            <h4 class="alert-heading">Başvuru Özeti</h4>
            <hr>
            <p class="mb-1"><strong>Ad Soyad:</strong> ${adSoyad}</p>
            <p class="mb-1"><strong>E-posta:</strong> ${eposta}</p>
            <p class="mb-1"><strong>Sınıf:</strong> ${sinif}</p>
            <p class="mb-1"><strong>Katılım Türü:</strong> ${katilimTuru}</p>
            <p class="mb-0"><strong>Mesajınız:</strong> ${mesaj ? mesaj : "<em>Mesaj bırakılmadı.</em>"}</p>
        `;
    });
    
    // Form temizlendiğinde sonuç alanını da sıfırlama (Opsiyonel ama iyi bir pratik)
    kayitFormu.addEventListener("reset", function() {
        sonucAlani.classList.replace("alert-success", "alert-info");
        sonucAlani.innerHTML = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek. [cite: 214]";
    });
});
