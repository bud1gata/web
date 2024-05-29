// JavaScript code
document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const studentNumber = document.getElementById('studentNumber').value.trim();

  // Check if the input is empty
  if (studentNumber === '') {
    alert('Mohon masukkan Nomor Induk Siswa (NIS) terlebih dahulu');
    return;
  }

  // Check if the student number is in the array
  const studentNumbers = ['1003','1004','1007','1008','1009',
  '1011','1013',
  '1020','1022','1024','1025','1026','1027','1029',
  '1031','1032','1033','1034','1035','1036','1037','1038','1039',
  '1040','1041','1044','1045','1046',
  '2002','2004','2005','2006','2007','2009','2010',
  '2011','2016','2018',
  '2020','2025','2026','2027','2028',
  '2030','2035','2036','2038','2039',
  '2043']; // Input array
  if (studentNumbers.includes(studentNumber)) {
    // Display success message in modal
    document.getElementById('resultText').textContent = `Alhamdulillah, Nomor Kode Ujian : "${studentNumber}" telah dapat mengikuti ujian.`;
    document.getElementById('modalBody').classList.add('bg-info');
    document.getElementById('btnStatus').classList.add('btn-success');
    document.getElementById('btnStatus').textContent = `Ayo ke Halaman Ujian`;
  } else {
    // Display error message in modal
    document.getElementById('resultText').textContent = `Mohon maaf Nomor Kode Ujian: "${studentNumber}" belum dapat mengikuti ujian.`;
    document.getElementById('modalBody').classList.add('bg-danger');
    document.getElementById('btnStatus').classList.add('btn-secondary');
    document.getElementById('btnStatus').textContent = `Halaman Ujian`;    
    document.getElementById('linkUjian').href = "#";
    document.getElementById('btnStatus').disabled=true;
  }

  // Show the modal
  $('#resultModal').modal('show');
});

  // Add event listener to the button
  document.getElementById('refreshButton').addEventListener('click', function() {
    // Reload the page
    location.reload();
  });

  document.getElementById('closeModalButton').addEventListener('click', function() {
    location.reload();
});
// Add event listener to the modal to detect when it's about to be hidden
var myModalEl = document.getElementById('resultModal');
myModalEl.addEventListener('hide.bs.modal', function () {
    // Reload the page when the modal is about to be hidden (closed)
    location.reload();
});
