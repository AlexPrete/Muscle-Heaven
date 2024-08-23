import Navbar from "../components/Navbar";
import "../pages/Body.css";
import b1 from "../images/b1.jpg";
// import b2 from "../images/b2.jpg";
// import aboutbg from "../images/aboutbg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualIntervalsExample from "../components/Carousel";


function Body(){
    return(
        <>
        <Navbar></Navbar>
        
            <div className="container customContainer"></div>
            <h1 className="text-black bodyH1 ">BENVENUTI NELLA PALESTRA DEL FUTURO!</h1>

        <IndividualIntervalsExample></IndividualIntervalsExample>

{/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={b1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={b2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={aboutbg} className="d-block w-100" alt="..."/>
        </div>
    </div>
</div> */}

            <div className="container headerContainer">
                    <img  className="headerImg" src={b1} alt="headerImg" />

                    <p className="text-black headerText">
                        <h5 className="text-center mb-2 ">LE NOSTRE LEZIONI</h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.
                    </p>
            </div>

             <button>clicca qui</button>

             <div className="container headerContainer">
                    

                    <p className="text-black headerText1">
                        <h5 className="text-center mb-2 ">LE NOSTRE LEZIONI</h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab consectetur tempore dolores dolore? Molestias voluptatem maiores adipisci saepe? Ut ratione dignissimos harum in fuga voluptatibus dolorum maxime nihil.
                    </p>
                    
                        

                    <img  className="headerImg1" src={b1} alt="headerImg" />
            </div>

                    

           
        </>
    );

    



            
}

export default Body;


// import Navbar from "../components/Navbar";
// import "../pages/Body.css";
// import logo from "../images/logo.png";
// import telephoneIcon from "../images/telephone.png";
// import mailIcon from "../images/mail.png";
// import locationIcon from "../images/location.png";
// import c1 from "../images/c1.jpg";
// import facebook from "../images/facebook.png";
// import c2 from "../images/c2.jpg";
// import playIcon from "../images/play-icon.png";
// import client1 from "../images/client1.png";
// import client2 from "../images/client2.png";
// import footerImg from "../images/footer-img.jpg";
// import twitter from "../images/twitter.png";
// import linkedin from "../images/linkedin.png";

// function Body() {
//   return (
//     <>
//       <Navbar />
//       <div className="container customContainer">
//         <div className="hero_area">
//           <header className="header_section">
//             <div className="container">
//               <div className="header_nav">
//                 <a className="navbar-brand brand_desktop" href="index.html">
//                   <img src={logo} alt="Logo" />
//                 </a>
//                 <div className="main_nav">
//                   <div className="top_nav">
//                     <ul>
//                       <li>
//                         <a href="#">
//                           <img src={telephoneIcon} alt="Telephone" />
//                           <span>+01 1234567890</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <img src={mailIcon} alt="Mail" />
//                           <span>demo@gmail.com</span>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <img src={locationIcon} alt="Location" />
//                           <span>Den mark Loram ipusum</span>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="bottom_nav">
//                     <nav className="navbar navbar-expand-lg custom_nav-container">
//                       <a className="navbar-brand brand_mobile" href="index.html">
//                         <img src={logo} alt="Logo" />
//                       </a>
//                       <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-toggle="collapse"
//                         data-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                       >
//                         <span className="navbar-toggler-icon"></span>
//                       </button>
//                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
//                           <ul className="navbar-nav">
//                             <li className="nav-item active">
//                               <a className="nav-link" href="index.html">
//                                 Home <span className="sr-only">(current)</span>
//                               </a>
//                             </li>
//                             <li className="nav-item">
//                               <a className="nav-link" href="about.html">About</a>
//                             </li>
//                             <li className="nav-item">
//                               <a className="nav-link" href="class.html">Classes</a>
//                             </li>
//                             <li className="nav-item">
//                               <a className="nav-link" href="blog.html">Blog</a>
//                             </li>
//                           </ul>
//                           <form className="form-inline">
//                             <button className="btn ml-3 ml-lg-5 nav_search-btn" type="submit"></button>
//                           </form>
//                         </div>
//                       </div>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </header>
//           {/* slider section */}
//           <section className="slider_section position-relative">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-2 offset-md-2">
//                   <div className="slider_heading">
//                     <h2>
//                       Bo <span>xer</span>
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="col-md-8 mx-auto">
//                   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//                     <ol className="carousel-indicators">
//                       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
//                       <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
//                       <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
//                     </ol>
//                     <div className="carousel-inner">
//                       <div className="carousel-item active">
//                         <div className="box">
//                           <div className="detail-box">
//                             <h1>
//                               Boxing <br />
//                               Center
//                             </h1>
//                             <hr />
//                             <div className="btn-box">
//                               <a href="#" className="btn-1">
//                                 Contact Us
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="carousel-item">
//                         <div className="box">
//                           <div className="detail-box">
//                             <h1>
//                               Boxing <br />
//                               Center
//                             </h1>
//                             <hr />
//                             <div className="btn-box">
//                               <a href="#" className="btn-1">
//                                 Contact Us
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="carousel-item">
//                         <div className="box">
//                           <div className="detail-box">
//                             <h1>
//                               Boxing <br />
//                               Center
//                             </h1>
//                             <hr />
//                             <div className="btn-box">
//                               <a href="#" className="btn-1">
//                                 Contact Us
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <a
//                       className="carousel-control-prev"
//                       href="#carouselExampleIndicators"
//                       role="button"
//                       data-slide="prev"
//                     >
//                       <span className="sr-only">Previous</span>
//                     </a>
//                     <a
//                       className="carousel-control-next"
//                       href="#carouselExampleIndicators"
//                       role="button"
//                       data-slide="next"
//                     >
//                       <span className="sr-only">Next</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* end slider section */}
//         </div>

//         {/* about section */}
//         <section className="about_section layout_padding">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-10 ml-auto pr-0">
//                 <div className="about_container">
//                   <div className="row">
//                     <div className="col-lg-3 col-md-5">
//                       <div className="detail-box">
//                         <div className="heading_container">
//                           <h2>About Class</h2>
//                         </div>
//                         <p>
//                           iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                         </p>
//                         <hr />
//                         <a href="#">Read More</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* end about section */}

//         {/* class section */}
//         <section className="class_section">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-10 col-lg-8 mx-auto">
//                 <div className="class_container">
//                   <div className="row">
//                     <div className="col-lg-9 col-md-10">
//                       <div className="heading_container">
//                         <h2>Our Classes Videos</h2>
//                         <p>iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="class_box-container">
//                     <div className="owl-carousel owl_carousel1">
//                       <div className="item">
//                         <div className="box">
//                           <div className="img-box">
//                             <img src={c1} alt="Class 1" />
//                             <div className="detail-box">
//                               <button>
//                                 <img src={playIcon} alt="Play" />
//                               </button>
//                               <h2>Boxing</h2>
//                             </div>
//                           </div>
//                           <div className="btn-box">
//                             <a href="#">See More</a>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="item">
//                         <div className="box">
//                           <div className="img-box">
//                             <img src={c2} alt="Class 2" />
//                             <div className="detail-box">
//                               <button>
//                                 <img src={playIcon} alt="Play" />
//                               </button>
//                               <h2>Boxing</h2>
//                             </div>
//                           </div>
//                           <div className="btn-box">
//                             <a href="#">See More</a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="d-flex flex-column flex-lg-row">
//                     <a href="" className="class_link">View More Classes</a>
//                     <a href="" className="class_link">View All Videos</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* end class section */}

//         {/* client section */}
//         <section className="client_section layout_padding">
//           <div className="container">
//             <div className="heading_container">
//               <h2>What is says our client</h2>
//               <hr />
//             </div>
//             <div className="client_container">
//               <div className="carousel-wrap">
//                 <div className="owl-carousel client_owl-carousel">
//                   <div className="item">
//                     <div className="box">
//                       <div className="client_id">
//                         <div className="img-box">
//                           <img src={client1} alt="Client 1" />
//                         </div>
//                         <div className="client_detail">
//                           <h4>Mark Thomas</h4>
//                         </div>
//                       </div>
//                       <div className="client_comment">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="item">
//                     <div className="box">
//                       <div className="client_id">
//                         <div className="img-box">
//                           <img src={client2} alt="Client 2" />
//                         </div>
//                         <div className="client_detail">
//                           <h4>Mark Thomas</h4>
//                         </div>
//                       </div>
//                       <div className="client_comment">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* end client section */}

//         {/* footer section */}
//         <section className="container-fluid footer_section">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="footer-logo">
//                 <img src={footerImg} alt="Footer Logo" />
//               </div>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             </div>
//             <div className="col-md-4">
//               <div className="contact_detail">
//                 <a href="#">Contact Us</a>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="follow_us">
//                 <h2>Follow Us</h2>
//                 <ul>
//                   <li>
//                     <a href="#">
//                       <img src={facebook} alt="Facebook" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <img src={twitter} alt="Twitter" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <img src={linkedin} alt="LinkedIn" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* end footer section */}
//       </div>
//     </>
//   );
// }

// export default Body;
