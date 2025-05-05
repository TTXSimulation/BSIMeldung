
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const form = document.getElementById('incidentForm');
  const data = new FormData(form);
  let y = 10;
  doc.setFontSize(14);
  doc.text("Meldung – Frühwarnung (Simulation)", 10, y);
  y += 10;
  for (const [key, value] of data.entries()) {
    doc.text(`${key}: ${value}`, 10, y);
    y += 10;
    if (y > 270) { doc.addPage(); y = 10; }
  }
  doc.save("Fruehwarnung_Meldung.pdf");
}
