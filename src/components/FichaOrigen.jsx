import styles from "./FichaOrigen.module.css";

const FichaOrigen = ({
  fichaOrigen,
  badge,
  title,
  description,
}) => {
  const badgeText = badge || fichaOrigen?.badge || "01 • ORIGEN";
  const titleText = title || fichaOrigen?.title || fichaOrigen?.region || "100% Arábica de Altura";
  const descriptionText =
    description ||
    fichaOrigen?.description ||
    fichaOrigen?.notas ||
    "Granos seleccionados de fincas sostenibles sobre 1,700 msnm.";

  return (
    <article
      className={styles.card}
      aria-labelledby={`ficha-origen-title-${fichaOrigen?.id || "default"}`}
    >
      <span className={styles.badgePill}>{badgeText}</span>

      <h3 id={`ficha-origen-title-${fichaOrigen?.id || "default"}`} className={styles.title}>
        {titleText}
      </h3>

      <p className={styles.description}>{descriptionText}</p>
    </article>
  );
};

export default FichaOrigen;
