const progressBar = document.getElementById('progress');

progressBar.addEventListener('click', (e) => {
  const clickX = e.clientX - progressBar.offsetLeft;
  const progressWidth = (clickX / progressBar.offsetWidth) * 100;
  progressBar.querySelector('.progress-fill').style.width = `${progressWidth}%`;
});
