console.log("mumet cok")
document.getElementById('downloadImage').addEventListener('click', function() {
    // URL gambar lokal yang akan diunduh
    const imageUrl = 'psb1.jpg';  // bagian asset yang akan di download oleh user 

    // pembuatan elemen link
    const link = document.createElement('a');
    link.href = imageUrl;

    // Nama file yang akan di download
    link.download = 'psb1.jpg';  // Nama file cokkk

    // user mengunduh gambar 
    link.click();
    // tunggu beberapa saat untuk proses downloadtergantung internet user 🗿
})