import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {


  const discordLink = "https://discord.gg/TU_INVITACION";


  const links = [

    {
      name:"Inicio",
      path:"/"
    },

    {
      name:"Productos",
      path:"/productos"
    },

    {
      name:"JARVIS",
      path:"/jarvis"
    },

    {
      name:"Tutoriales",
      path:"/tutoriales"
    },

    {
      name:"Descargas",
      path:"/descargas"
    }


  ];




  return (


    <nav className="navbar">



      <NavLink
      className="brand"
      to="/"
      >


        <img

        src="/logo.png"

        className="logo"

        alt="PandaTech logo"

        />



        <span>

        PandaTech

        </span>


      </NavLink>







      <div className="links">


      {
        links.map((link,index)=>(


          <NavLink

          key={index}

          to={link.path}

          className={({isActive})=>

          isActive ? "active" : ""

          }

          >

            {link.name}


          </NavLink>


        ))
      }






      <a

      href={discordLink}

      target="_blank"

      rel="noreferrer"

      className="community"

      >

        Comunidad

      </a>




      </div>



    </nav>


  );


}


export default Navbar;