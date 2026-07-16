import { Link } from "react-router-dom";
import "../styles/Products.css";


function Products() {


  const products = [


    {
      icon:"🐼",
      name:"Panda Optimizer",
      category:"Windows Utility",
      status:"Beta",
      description:
      "Optimización avanzada para Windows. Limpia archivos, mejora rendimiento y controla tu sistema desde una sola aplicación.",
      link:"/optimizer",
      button:"Explorar producto"
    },



    {
      icon:"🤖",
      name:"JARVIS AI",
      category:"Artificial Intelligence",
      status:"Coming Soon",
      description:
      "Un asistente inteligente creado para ayudarte con tecnología, productividad y control de tu PC.",
      link:"/jarvis",
      button:"Más información"
    },



    {
      icon:"🛠️",
      name:"Panda Utilities",
      category:"Tools",
      status:"Próximamente",
      description:
      "Una colección de herramientas ligeras y potentes para usuarios avanzados.",
      link:"#",
      button:"Ver proyecto"
    }



  ];





  return (


    <main className="products-page">



      <section className="products-hero">



        <span className="products-badge">

          🐼 PandaTech Ecosystem

        </span>




        <h1>

          Software creado
          <br />

          <span>
            para mejorar tu mundo digital
          </span>

        </h1>




        <p>

          Herramientas, inteligencia artificial y soluciones
          diseñadas por PandaTech.

        </p>



      </section>







      <section className="products-grid">


        {products.map((product,index)=>(



          <article
          className="product-card"
          key={index}
          style={{
            animationDelay:`${index * .15}s`
          }}
          >



            <div className="product-top">


              <span className="product-icon">

                {product.icon}

              </span>



              <span className="product-status">

                {product.status}

              </span>



            </div>







            <span className="product-category">

              {product.category}

            </span>






            <h2>

              {product.name}

            </h2>






            <p>

              {product.description}

            </p>







            {product.link.startsWith("/") ? (

              <Link
              className="product-button"
              to={product.link}
              >

                {product.button}
                <span>→</span>

              </Link>

            ) : (


              <a
              className="product-button"
              href={product.link}
              >

                {product.button}
                <span>→</span>

              </a>


            )}




          </article>



        ))}



      </section>




    </main>


  );

}



export default Products;