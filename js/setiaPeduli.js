document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
      title: "",
      imageUrl: "setia-peduli/fadhil.jpeg",
      imageWidth: 400,
      imageHeight: 450,
      imageAlt: "Donasi",
      html: '<button id="whatsapp-button" style="padding: 10px 20px; background-color: #25D366; color: white; border: none; border-radius: 5px; cursor: pointer;">Donasi</button>',
      showConfirmButton: false, // Menghilangkan tombol default
      showCloseButton: true,    // Menambahkan tombol silang
      closeButtonHtml: '&times;', // Mengatur ikon silang ke simbol "&times;" (opsional)
      focusConfirm: false
    });

    // Menambahkan event listener ke tombol
    document.addEventListener("click", (e) => {
      if (e.target.id === "whatsapp-button") {
        window.location.href = "https://wa.me/6285600909342"; // Ganti dengan nomor WhatsApp Anda
      }
    });
  });