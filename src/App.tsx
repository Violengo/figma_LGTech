import { Button } from "./components/Button/Button";
import { Select } from "./components/Select/Select";
import { Foundations } from "./foundations/Foundations";
import "./App.css";

const companySizeOptions = [
  { value: "1-10", label: "1–10 collaborateurs" },
  { value: "11-50", label: "11–50 collaborateurs" },
  { value: "51-250", label: "51–250 collaborateurs" },
  { value: "250+", label: "Plus de 250" },
];

function App() {
  return (
    <main className="gallery">
      <h1>LGTech Design System</h1>
      <p>Aperçu vivant des composants — généré à partir du fichier Figma "_AI_ Design System".</p>

      <section className="section">
        <Foundations />
      </section>

      <section className="section">
        <h2>Button</h2>
        <p>Primary pour l'action principale, Secondary pour une alternative, Tertiary pour une action discrète.</p>
        <div className="row">
          <Button variant="primary" size="medium">Demander un audit</Button>
          <Button variant="secondary" size="medium">Demander un audit</Button>
          <Button variant="tertiary" size="medium">Demander un audit</Button>
          <Button variant="primary" size="medium" disabled>Demander un audit</Button>
        </div>
        <div className="row">
          <Button variant="primary" size="large">Demander un audit</Button>
          <Button variant="secondary" size="large">Demander un audit</Button>
          <Button variant="tertiary" size="large">Demander un audit</Button>
          <Button variant="primary" size="large" disabled>Demander un audit</Button>
        </div>
      </section>

      <section className="section">
        <h2>Select</h2>
        <p>Permet de choisir une seule valeur dans une liste définie.</p>
        <div className="row">
          <div className="selectSlot">
            <Select label="Taille de l'entreprise" options={companySizeOptions} />
          </div>
          <div className="selectSlot">
            <Select label="Taille de l'entreprise" options={companySizeOptions} defaultValue="11-50" />
          </div>
          <div className="selectSlot">
            <Select
              label="Taille de l'entreprise"
              options={companySizeOptions}
              errorMessage="Sélectionnez une option."
            />
          </div>
          <div className="selectSlot">
            <Select label="Taille de l'entreprise" options={companySizeOptions} disabled />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
