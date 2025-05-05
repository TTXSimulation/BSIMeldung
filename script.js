document.getElementById('incidentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const values = {};
  formData.forEach((val, key) => {
    values[key] = val;
  });

  document.getElementById('confirmation').style.display = 'block';

  document.getElementById('downloadPDF').onclick = function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("BSI - NIS2 Erstmeldung", 10, 10);

    let y = 20;
    for (let key in values) {
      doc.text(`${key}:`, 10, y);
      y += 7;
      const split = doc.splitTextToSize(values[key], 180);
      doc.text(split, 10, y);
      y += split.length * 7 + 2;
    }

    doc.save("BSI_NIS2_Meldung.pdf");
  };
});