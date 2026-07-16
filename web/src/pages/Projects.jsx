import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects-page">

      <span className="hero-badge">
        PRODUCTOS
      </span>

      <h1>
        Proyectos <span>PandaTech</span>
      </h1>

      <p>
        Descubre el ecosistema de herramientas que estamos desarrollando para
        mejorar tu experiencia con Windows, la inteligencia artificial y la
        productividad.
      </p>

      <div className="project-grid">

        <div className="project-card">

          <h2>🐼 Panda Optimizer</h2>

          <p>
            Optimiza, limpia y acelera Windows con un solo clic.
          </p>

          <br />

          <Link to="/optimizer">
            <button>Ver producto</button>
          </Link>

        </div>

        <div className="project-card">

          <h2>🤖 JARVIS AI</h2>

          <p>
            El futuro asistente inteligente del ecosistema PandaTech.
          </p>

          <br />

          <Link to="/jarvis">
            <button>Más información</button>
          </Link>

        </div>

        <div className="project-card">

          <h2>🛠 Panda Utilities</h2>

          <p>
            Una colección de utilidades para usuarios avanzados y entusiastas.
          </p>

          <br />

          <button disabled>
            Próximamente
          </button>

        </div>

      </div>

    </section>
  );
}

export default Projects;