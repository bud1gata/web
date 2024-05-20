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
  const studentNumbers = ['123', '456', '789']; // Input array
  if (studentNumbers.includes(studentNumber)) {
    // Display success message in modal
    document.getElementById('resultText').textContent = `Alhamdulillah, Nomor Induk Siswa (NIS): "${studentNumber}" telah dapat mengikuti ujian.`;
  } else {
    // Display error message in modal
    document.getElementById('resultText').textContent = `Mohon maaf Nomor Induk Siswa (NIS): "${studentNumber}" belum dapat mengikuti ujian.`;
  }

  // Show the modal
  $('#resultModal').modal('show');
});