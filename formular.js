
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const form = document.getElementById("incidentForm");
  const data = new FormData(form);
  let y = 20;
  doc.setFontSize(12);
  doc.text("Meldung – Frühwarnung gemäß §30 BSIG (NIS2)", 10, 10);
  for (const [key, value] of data.entries()) {
    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
    doc.text(`${label}: ${value}`, 10, y);
    y += 10;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  }
  doc.save("Fruehwarnung_Meldung.pdf");
}
