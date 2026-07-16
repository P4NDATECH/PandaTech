import "../styles/Tutorials.css";


function Tutorials() {


const videos = [


{
image:"https://img.youtube.com/vi/URKfeOK8Xb4/maxresdefault.jpg",

title:"Optimizar Windows",

category:"Windows Optimization",

desc:
"Aprende a mejorar el rendimiento de tu PC con configuraciones avanzadas y ajustes profesionales.",

link:
"https://youtu.be/URKfeOK8Xb4"

},



{
image:"https://img.youtube.com/vi/O8Ov5DszhSo/maxresdefault.jpg",

title:"Optimizar Minecraft",

category:"Gaming Optimization",

desc:
"Mejora los FPS, configura tu juego y consigue el máximo rendimiento en Minecraft.",

link:
"https://youtu.be/O8Ov5DszhSo"

},



{
image:"https://img.youtube.com/vi/2pjVIwzU9h4/maxresdefault.jpg",

title:"Activar Windows",

category:"Windows Tools",

desc:
"Aprende a configurar Windows y aprovechar todas sus funciones.",

link:
"https://youtu.be/2pjVIwzU9h4"

}



];





return (


<section className="tutorials-page">



<div className="tutorials-header">


<span className="hero-badge">

🎬 PandaTech Academy

</span>



<h1>

Tutoriales <span>PandaTech</span>

</h1>



<p>

Aprende tecnología, optimización y herramientas digitales paso a paso.

</p>



</div>







<div className="tutorial-grid">



{
videos.map((video,index)=>(



<article

className="tutorial-card"

key={index}

>




<div className="tutorial-image">


<img

src={video.image}

alt={video.title}

/>



<div className="play-button">

▶

</div>



</div>







<div className="tutorial-info">



<span className="tutorial-category">

{video.category}

</span>





<h2>

{video.title}

</h2>





<p>

{video.desc}

</p>





<a

href={video.link}

target="_blank"

rel="noopener noreferrer"

className="tutorial-button"

>

Ver tutorial →

</a>




</div>




</article>



))
}



</div>



</section>


);


}



export default Tutorials;