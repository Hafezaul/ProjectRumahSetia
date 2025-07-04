document.getElementById('exampleDataList').addEventListener('change', function(e) {
    const value = e.target.value;
    let url = '';

    switch(value) {
      case 'Sejarah Yayasan':
        url = 'yayasan.html';
        break;
      case 'Unit Tahfidz':
        url = 'tahfidz.html';
        break;
      case 'Unit Pendidikan':
        url = 'pendidikan.html';
        break;
      case 'Kabar Pondok':
        url = 'berita.html';
        break;
      case 'Artikel':
        url = 'artikel.html';
        break;
        case 'Kajian':
        url = 'kajian.html';
        break;
        case 'Kontak':
        url = 'kontak.html';
        break;
        case 'Poster':
        url = 'poster.html';
        break;
        case 'Galeri':
        url = 'galeri.html';
        break;
        case 'Info PSB':
        url = 'infopsb.html';
        break;
        case 'Setia Peduli':
        url = 'setiapeduli.html';
        break;
      default:
        break;
    }

    if (url) {
      window.location.href = url;
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
  Swal.fire({
    title: "",
    imageUrl: "./psb/psb1.jpg",
    imageWidth: 400,
    imageHeight: 450,
    imageAlt: "Donasi",
    html: '<button id="whatsapp-button" style="padding: 10px 20px; background-color: #001f3f; color: white; border: none; border-radius: 5px; cursor: pointer;">Daftar Sekarang</button>',
    showConfirmButton: false, // Menghilangkan tombol default
    showCloseButton: true,    // Menambahkan tombol silang
    closeButtonHtml: '&times;', // Mengatur ikon silang ke simbol "&times;" (opsional)
    focusConfirm: false
  });

  // Menambahkan event listener ke tombol
  document.addEventListener("click", (e) => {
    if (e.target.id === "whatsapp-button") {
      window.location.href = "https://bit.ly/akusiapnyantri"; // Link pendaftaran
    }
  });
});