document.getElementById("anketForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle

    var secilen = document.querySelector('input[name="yemek"]:checked');
    var sonucAnket = document.getElementById("sonucAnket");

    if (secilen) {
        sonucAnket.textContent = "Teşekkürler! Oy verdiğiniz yemek: " + secilen.value;
    } else {
        sonucAnket.textContent = "Lütfen bir seçenek seçiniz.";
    }
});