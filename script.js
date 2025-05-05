
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      if (box.textContent.includes("VORFALL MELDEN")) {
        window.location.href = "meldetypen.html";
      }
    });
  });
});
