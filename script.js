// Anzeige des richtigen Formulars basierend auf URL-Parameter
const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const titleMap = {
  fruehwarnung: "Frühwarnung",
  folgemeldung: "Folgemeldung",
  zwischenbericht: "Zwischenbericht",
  fortschritt: "Fortschrittsbericht",
  abschluss: "Abschlussbericht"
};

if (type && document.getElementById(`${type}Form`)) {
  document.getElementById(`${type}Form`).style.display = "block";
  document.getElementById("formTitle").textContent = `Meldung – ${titleMap[type]}`;
} else {
  document.getElementById("formTitle").textContent = "Unbekannter Meldetyp";
}

// PDF-Generierung für alle Meldetypen
const { jsPDF } = window.jspdf;

const formTypes = [
  "fruehwarnungForm",
  "folgemeldungForm",
  "zwischenberichtForm",
  "fortschrittForm",
  "abschlussForm"
];

formTypes.forEach(formId => {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      let text = "Meldung – " + formId.replace("Form", "") + "\n\n";

      formData.forEach((value, key) => {
        text += `${key}: ${value}\n`;
      });

      const doc = new jsPDF();
      doc.text(text, 10, 10);
      doc.save("Meldung_IT-Sicherheitsvorfall.pdf");
    });
  }
});
