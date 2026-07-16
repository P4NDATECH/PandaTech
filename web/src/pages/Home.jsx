import { Link } from "react-router-dom";
import "../styles/Home.css";


function Home() {


  return (


    <section className="home">



      <div className="home-content">



        <span className="hero-badge">

          🚀 Tecnología • IA • Optimización

        </span>





        <h1>

          Panda<span>Tech</span>

        </h1>





        <h2>

          La tecnología no debería ser complicada.

        </h2>





        <p>

          Herramientas, optimizaciones e inteligencia artificial
          creadas para sacar el máximo rendimiento a tu mundo digital.

        </p>







        <div className="buttons">


          <Link to="/productos">


            <button className="primary-btn">

              Ver ecosistema

            </button>


          </Link>






          <a

          href="https://youtube.com/@panduchiz?si=ATxXaclmviy-RCNp"

          target="_blank"

          rel="noopener noreferrer"

          >


            <button className="secondary-btn">

              YouTube

            </button>


          </a>




        </div>







        <div className="hero-stats">



          <div>

            <h3>
              3+
            </h3>

            <span>
              Productos
            </span>


          </div>






          <div>

            <h3>
              ∞
            </h3>

            <span>
              Ideas
            </span>


          </div>






          <div>

            <h3>
              24/7
            </h3>

            <span>
              Innovando
            </span>


          </div>




        </div>






      </div>









      <div className="hero-interface">



        <div className="optimizer-preview">



          <div className="preview-header">


            <span>

              🐼 Panda Optimizer

            </span>


            <small>

              Beta v0.1

            </small>


          </div>






          <div className="preview-health">


            <p>

              Estado del equipo

            </p>


            <strong>

              98%

            </strong>


          </div>






          <div className="preview-bar">

            <span></span>

          </div>







          <div className="preview-info">



            <div>

              <small>
                CPU
              </small>

              <b>
                24%
              </b>


            </div>





            <div>

              <small>
                RAM
              </small>

              <b>
                42%
              </b>


            </div>






            <div>

              <small>
                SSD
              </small>

              <b>
                78%
              </b>


            </div>




          </div>






        </div>


      </div>






    </section>


  );


}


export default Home;