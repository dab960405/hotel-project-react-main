export default function CommonHeading({ heading, title, subtitle }) {
  return (
    <header 
      className="text-center wow fadeInUp" 
      data-wow-delay="0.1s"
      aria-labelledby="section-heading"
    >
      {/* Encabezado principal de la sección */}
      <h2 id="section-heading" className="section-title text-primary">
        {heading}
      </h2>

      {/* Subtítulo de apoyo */}
      <p className="subtitle">
        {subtitle}
        <span className="text-primary">{title}</span>
      </p>
    </header>
  );
}