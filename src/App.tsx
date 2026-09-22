import { Button } from "./components/Button/Button";
import { Select } from "./components/Select/Select";
import { Foundations } from "./foundations/Foundations";
import { Icon } from "./icons/Icon";
import { icons, type IconName } from "./icons/registry";
import "./App.css";

const companySizeOptions = [
  { value: "1-10", label: "1–10 collaborateurs" },
  { value: "11-50", label: "11–50 collaborateurs" },
  { value: "51-250", label: "51–250 collaborateurs" },
  { value: "250+", label: "Plus de 250" },
];

const navItems = [
  { href: "#foundations", label: "Foundations" },
  { href: "#button", label: "Button" },
  { href: "#select", label: "Select" },
  { href: "#icons", label: "Icons" },
];

function App() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebarBrand">LGTech DS</div>
        <nav>
          <ul className="navList">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="gallery">
        <h1>LGTech Design System</h1>
        <p>Aperçu vivant des composants — généré à partir du fichier Figma "_AI_ Design System".</p>

        <section className="section" id="foundations">
          <Foundations />
        </section>

        <section className="section" id="button">
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

          <p className="subLabel">Icônes swappables (Material Symbols) — leading, trailing, icon-only</p>
          <div className="row">
            <Button variant="primary" icon="arrow-forward">Demander un audit</Button>
            <Button variant="secondary" icon="download" iconPosition="trailing">Télécharger la plaquette</Button>
            <Button variant="tertiary" icon="mail" iconPosition="leading">Nous écrire</Button>
            <Button variant="primary" icon="call" iconOnly aria-label="Appeler LGTech" />
            <Button variant="secondary" icon="close" iconOnly aria-label="Fermer" />
          </div>
        </section>

        <section className="section" id="select">
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

        <section className="section" id="icons">
          <h2>Icons</h2>
          <p>
            Registre basé sur <code>@material-symbols/svg-400</code> (style outlined), la bibliothèque référencée
            par le Material 3 Design Kit dans Figma. Ajouter une icône = une ligne dans{" "}
            <code>src/icons/registry.ts</code>.
          </p>
          <div className="iconGrid">
            {(Object.keys(icons) as IconName[]).map((name) => (
              <div className="iconTile" key={name}>
                <Icon name={name} size={24} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
