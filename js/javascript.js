// JavaScript code
document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const studentNumber = document.getElementById('studentNumber').value.trim();

  // Check if the input is empty
  if (studentNumber === '') {
    alert('Please enter a student number');
    return;
  }

  // Check if the student number is in the array
  const studentNumbers = ['123', '456', '789']; // Example array
  if (studentNumbers.includes(studentNumber)) {
    // Display success message in modal
    document.getElementById('resultText').textContent = `Alhamdulillah, Nomor Induk Siswa: ${studentNumber} anda telah siap untuk ujian.`;
  } else {
    // Display error message in modal
    document.getElementById('resultText').textContent = `Student number ${studentNumber} does not exist in the system.`;
  }

  // Show the modal
  $('#resultModal').modal('show');
});