import { useId } from "react";
import styles from "./TarjetaProducto.module.css";

/**
 * Ilustración SVG por defecto inspirada en el empaque de café artesanal.
 */
function IlustracionCafe() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M27 18H93L97 29H23L27 18Z" fill="#C17A47" />
      <rect x="24" y="31" width="72" height="92" rx="12" fill="#352012" />
      <rect x="37" y="47" width="46" height="54" rx="7" fill="#F9F6F0" />
      <circle cx="60" cy="65" r="11" fill="#C17A47" />
      <ellipse
        cx="60"
        cy="65"
        rx="4"
        ry="6.5"
        transform="rotate(-18 60 65)"
        fill="#352012"
      />
      <rect x="45" y="83" width="30" height="3.5" rx="1.75" fill="#4A3525" />
      <rect x="49" y="90" width="22" height="3" rx="1.5" fill="#7A6657" />
    </svg>
  );
}

/**
 * Tarjeta de producto de especialidad compatible con objeto `producto` o props individuales.
 */
export function TarjetaProducto({
  producto,
  origen,
  tueste,
  calificacion,
  resenas,
  nombre,
  descripcion,
  presentacion,
  precio,
  imagen,
  alt,
  destacado,
  textoBoton = "+ Agregar",
  onAgregar,
  children,
}) {
  const headingId = useId();

  const origenTexto = origen ?? producto?.origen ?? "COLOMBIA • HUILA";
  const tuesteTexto = tueste ?? producto?.tueste ?? "Tueste Medio";
  const calificacionValor = calificacion ?? producto?.calificacion ?? 4.9;
  const resenasValor = resenas ?? producto?.resenas ?? 128;
  const nombreTexto = nombre ?? producto?.nombre ?? "Reserva Especial Huila";
  const descripcionContenido =
    children ??
    descripcion ??
    producto?.descripcion ??
    "Notas a caramelo oscuro, panela, naranja dulce y cacao.";
  const presentacionTexto =
    presentacion ?? producto?.presentacion ?? "Bolsa 340g • Grano / Molido";
  const precioValor = precio ?? producto?.precio ?? 18.5;
  const imagenSrc = imagen ?? producto?.imagen ?? "";
  const imagenAlt = alt ?? producto?.alt ?? nombreTexto;
  const esDestacado = destacado ?? producto?.destacado ?? false;

  const precioNumerico = Number(precioValor);
  const precioFormateado = Number.isNaN(precioNumerico)
    ? `$${precioValor}`
    : `$${precioNumerico.toFixed(2)}`;

  const payload = {
    id: producto?.id,
    nombre: nombreTexto,
    precio: precioNumerico,
    origen: origenTexto,
    presentacion: presentacionTexto,
  };

  return (
    <article
      className={`${styles.card}${esDestacado ? ` ${styles.cardFeatured}` : ""}`}
      aria-labelledby={headingId}
    >
      <div className={styles.imageBox}>
        {origenTexto && <span className={styles.originPill}>{origenTexto}</span>}

        {esDestacado && (
          <span className={styles.featuredBadge}>★ Destacado</span>
        )}

        {imagenSrc ? (
          <img className={styles.image} src={imagenSrc} alt={imagenAlt} />
        ) : (
          <IlustracionCafe />
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.roast}>{tuesteTexto}</span>
          {calificacionValor !== undefined && calificacionValor !== null && (
            <span
              className={styles.rating}
              aria-label={`Calificación ${calificacionValor} de 5${
                resenasValor !== undefined && resenasValor !== null
                  ? ` basada en ${resenasValor} reseñas`
                  : ""
              }`}
            >
              <span className={styles.star} aria-hidden="true">
                ★
              </span>{" "}
              {calificacionValor}
              {resenasValor !== undefined && resenasValor !== null
                ? ` (${resenasValor})`
                : ""}
            </span>
          )}
        </div>

        <h3 id={headingId} className={styles.title}>
          {nombreTexto}
        </h3>

        <p className={styles.description}>{descripcionContenido}</p>

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            {presentacionTexto && (
              <span className={styles.presentation}>{presentacionTexto}</span>
            )}
            <span className={styles.price}>{precioFormateado}</span>
          </div>

          <button
            type="button"
            className={styles.addButton}
            onClick={() => onAgregar?.(payload)}
          >
            {textoBoton}
          </button>
        </div>
      </div>
    </article>
  );
}

export default TarjetaProducto;
