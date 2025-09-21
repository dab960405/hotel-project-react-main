export default function Newsletter() {
  return (
    <section
      className="container newsletter mt-5 wow fadeIn"
      data-wow-delay="0.1s"
      aria-labelledby="newsletter-heading"
    >
      <div className="row justify-content-center">
        <div className="col-lg-10 border rounded p-1">
          <div className="border rounded text-center p-1">
            <div className="bg-white rounded text-center p-5">

              {/* Encabezado accesible */}
              <h2 id="newsletter-heading" className="mb-4">
                Suscríbete a nuestro{" "}
                <span className="text-primary text-uppercase">
                  boletín de noticias
                </span>
              </h2>

              {/* Form accesible */}
              <form
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
                aria-describedby="newsletter-desc"
              >
                <label htmlFor="newsletter-email" className="visually-hidden">
                  Correo electrónico
                </label>
                
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  className="form-control w-100 py-3 ps-4 pe-5"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />

                <button
                  type="submit"
                  className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Suscribirse
                </button>

                <p id="newsletter-desc" className="visually-hidden">
                  Ingresa tu correo electrónico para recibir novedades y promociones del Hotel
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}