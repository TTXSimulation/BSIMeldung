
document.getElementById("incidentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("incidentForm").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
});
document.getElementById("downloadPDF").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const form = document.forms["incidentForm"];
  const data = `
Unternehmen: ${form.company.value}
Kontaktperson: ${form.contact.value}
Entdeckt am: ${form.discovery.value}
Standorte: ${form.locations.value}
Systeme: ${form.systems.value}
Vorfalltyp: ${form.incidentType.value}
Analyse: ${form.analysis.value}
Maßnahmen: ${form.actions.value}
Auswirkungen: ${form.impact.value}
`;
  doc.text(data, 10, 10);
  doc.save("Vorfallmeldung_BSI.pdf");
});
