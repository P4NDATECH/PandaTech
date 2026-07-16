import { useState } from "react";
import "../styles/Optimizer.css";


function Optimizer() {


  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);



  const startScan = () => {

    setScanning(true);
    setCompleted(false);
    setProgress(0);


    const timer = setInterval(() => {

      setProgress(prev => {

        if (prev >= 100) {

          clearInterval(timer);
          setScanning(false);
          setCompleted(true);

          return 100;

        }

        return prev + 10;

      });


    },300);


  };





  return (

    <main className="optimizer-page">


      <section className="optimizer-hero">



        <div className="optimizer-content">


          <span className="badge">
            🐼 PandaTech Utility
          </span>




          <h1>
            Panda
            <span>
              Optimizer
            </span>
          </h1>




          <p>
            La herramienta definitiva para optimizar Windows,
            mejorar rendimiento y mantener tu equipo siempre
            en su mejor estado.
          </p>




          <div className="optimizer-buttons">


            <button className="primary-btn">
              Descargar Beta
            </button>



            <button className="secondary-btn">
              Características
            </button>


          </div>


        </div>







        <div className="optimizer-window">



          <div className="app-layout">





            <aside className="app-sidebar">


              <h3>
                🐼 Panda
              </h3>



              <button className="active">
                Dashboard
              </button>



              <button>
                Limpieza
              </button>



              <button>
                Boost
              </button>



              <button>
                Ajustes
              </button>


            </aside>








            <div className="app-main">



              <div className="window-header">


                <strong>
                  Estado del sistema
                </strong>



                <small>
                  Panda Optimizer v0.1 Beta
                </small>


              </div>






              <div className="health">


                <span>
                  Salud del equipo
                </span>



                <strong>
                  {completed ? "100%" : "98%"}
                </strong>



              </div>









              <div className="progress-item">


                <div>

                  <span>
                    CPU
                  </span>


                  <b>
                    24%
                  </b>


                </div>


                <div className="bar">

                  <div className="fill cpu"></div>

                </div>


              </div>








              <div className="progress-item">


                <div>

                  <span>
                    RAM
                  </span>


                  <b>
                    42%
                  </b>


                </div>



                <div className="bar">

                  <div className="fill ram"></div>

                </div>



              </div>








              <div className="progress-item">


                <div>

                  <span>
                    SSD
                  </span>


                  <b>
                    78%
                  </b>


                </div>



                <div className="bar">

                  <div className="fill storage"></div>

                </div>



              </div>









              <div className="system-cards">



                <div className="mini-card">

                  <span>
                    ⚡
                  </span>


                  <strong>
                    Alto
                  </strong>


                  <small>
                    Rendimiento
                  </small>


                </div>








                <div className="mini-card">


                  <span>
                    🧹
                  </span>


                  <strong>
                    2.4GB
                  </strong>


                  <small>
                    Limpieza disponible
                  </small>


                </div>




              </div>









              <button
              className="scan-btn"
              onClick={startScan}
              disabled={scanning}
              >


                {
                  scanning
                  ? "Analizando equipo..."
                  : completed
                  ? "Análisis completado ✓"
                  : "Analizar equipo"
                }



              </button>








              {
                progress > 0 && (

                  <div className="scan-progress">


                    <div className="scan-number">

                      {progress}%

                    </div>





                    <div className="scan-track">


                      <div
                      className="scan-fill"
                      style={{
                        width:`${progress}%`
                      }}
                      />


                    </div>


                  </div>


                )
              }





            </div>


          </div>


        </div>


      </section>









      <section className="features">


        <h2>
          Todo lo que necesitas
        </h2>




        <div className="feature-grid">



          <div className="feature-card">

            <span>
              🚀
            </span>


            <h3>
              Optimización
            </h3>


            <p>
              Ajustes inteligentes para obtener más rendimiento.
            </p>


          </div>







          <div className="feature-card">

            <span>
              🧹
            </span>


            <h3>
              Limpieza
            </h3>


            <p>
              Elimina archivos innecesarios de Windows.
            </p>


          </div>







          <div className="feature-card">

            <span>
              📊
            </span>


            <h3>
              Monitor
            </h3>


            <p>
              Controla el estado de tu ordenador.
            </p>


          </div>




        </div>


      </section>


    </main>


  );


}


export default Optimizer;