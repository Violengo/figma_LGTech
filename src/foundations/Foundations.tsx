import styles from "./Foundations.module.css";

const primitives = [
  { name: "brand/500", varName: "--color-brand-500" },
  { name: "brand/700", varName: "--color-brand-700" },
  { name: "brand/900", varName: "--color-brand-900" },
  { name: "neutral/0", varName: "--color-neutral-0" },
  { name: "neutral/100", varName: "--color-neutral-100" },
  { name: "neutral/900", varName: "--color-neutral-900" },
];

const semanticColors = [
  { name: "color/bg/page", varName: "--color-bg-page" },
  { name: "color/bg/subtle", varName: "--color-bg-subtle" },
  { name: "color/bg/brand", varName: "--color-bg-brand" },
  { name: "color/bg/brand-strong", varName: "--color-bg-brand-strong" },
  { name: "color/text/primary", varName: "--color-text-primary" },
  { name: "color/text/link", varName: "--color-text-link" },
];

const spacingSteps = [
  { name: "spacing/8", varName: "--spacing-8", px: 8 },
  { name: "spacing/16", varName: "--spacing-16", px: 16 },
  { name: "spacing/32", varName: "--spacing-32", px: 32 },
  { name: "spacing/64", varName: "--spacing-64", px: 64 },
];

const radiusSteps = [
  { name: "radius/0", varName: "--radius-0" },
  { name: "radius/8", varName: "--radius-8" },
  { name: "radius/16", varName: "--radius-16" },
  { name: "radius/24", varName: "--radius-24" },
  { name: "radius/full", varName: "--radius-full" },
];

function Swatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div className={styles.swatch}>
      <div className={styles.swatchColor} style={{ backgroundColor: `var(${varName})` }} />
      <span className={styles.swatchLabel}>{name}</span>
    </div>
  );
}

export function Foundations() {
  return (
    <div className={styles.section}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Colors</h2>
        <p className={styles.groupLabel}>Primitives</p>
        <div className={styles.swatchRow}>
          {primitives.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
        <p className={styles.groupLabel}>Semantic colors</p>
        <div className={styles.swatchRow}>
          {semanticColors.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Typography</h2>
        <div>
          <div className={styles.specimen}>
            <p className={styles.specimenLabel}>DISPLAY/XL</p>
            <p className={styles.displayXl}>La technologie, simplement.</p>
          </div>
          <div className={styles.specimen}>
            <p className={styles.specimenLabel}>HEADING/H1</p>
            <p className={styles.headingH1}>Votre IT, partenaire de votre croissance</p>
          </div>
          <div className={styles.specimen}>
            <p className={styles.specimenLabel}>HEADING/H2</p>
            <p className={styles.headingH2}>Une infrastructure fiable et évolutive</p>
          </div>
          <div className={styles.specimen}>
            <p className={styles.specimenLabel}>HEADING/H3</p>
            <p className={styles.headingH3}>Sécurité, proximité, réactivité</p>
          </div>
          <div className={styles.specimen}>
            <p className={styles.specimenLabel}>BODY/LARGE</p>
            <p className={styles.bodyLarge}>
              LGTech accompagne les indépendants et PME avec des solutions informatiques adaptées à leur réalité.
            </p>
          </div>
          <div className={styles.specimen}>
            <p className={styles.specimenLabel}>BODY/MEDIUM</p>
            <p className={styles.bodyMedium}>Un interlocuteur local, des solutions claires et un suivi durable.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Dimensions &amp; elevation</h2>
        <p className={styles.groupLabel}>Spacing</p>
        <div className={styles.spacingRow}>
          {spacingSteps.map((step) => (
            <div className={styles.spacingItem} key={step.name}>
              <div className={styles.spacingBar} style={{ width: `var(${step.varName})` }} />
              <span className={styles.spacingLabel}>
                {step.name} · var({step.varName})
              </span>
            </div>
          ))}
        </div>
        <p className={styles.groupLabel}>Radius</p>
        <div className={styles.radiusRow}>
          {radiusSteps.map((step) => (
            <div className={styles.radiusItem} key={step.name}>
              <div className={styles.radiusSwatch} style={{ borderRadius: `var(${step.varName})` }} />
              <span className={styles.radiusLabel}>{step.name}</span>
            </div>
          ))}
        </div>
        <p className={styles.groupLabel}>Elevation</p>
        <div className={styles.elevationRow}>
          <div className={styles.elevationCard} style={{ boxShadow: "var(--elevation-100)" }}>
            Elevation/100
          </div>
          <div className={styles.elevationCard} style={{ boxShadow: "var(--elevation-200)" }}>
            Elevation/200
          </div>
          <div className={styles.elevationCard} style={{ boxShadow: "var(--elevation-300)" }}>
            Elevation/300
          </div>
        </div>
      </section>
    </div>
  );
}
