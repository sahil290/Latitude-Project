import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Home/Images/img1.jpg";
import img2 from "../Home/Images/img2.jpg";
import img3 from "../Home/Images/img3.jpg";
import img4 from "../Home/Images/img4.jpg";
import img5 from "../Home/Images/img5.jpg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>This is our first image </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>This is our second image </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>This is our third image </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={img4}
            alt="fourth slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>This is our fourth image </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="fifth slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>This is our fifth image </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-fluid">
         <div className="row">
             <div className="col-sm-4">
             <div className="card" style={{width: "20rem"}}>
  <img src={img1} className="card-img-top img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Save trees</h5>
    <a href="/Login" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
     <div className="col-sm-4">
             <div className="card" style={{width: "20rem"}}>
  <img src={img2} className="card-img-top img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Save trees</h5>
    <a href="/Login" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
     <div className="col-sm-4">
             <div className="card" style={{width: "20rem"}}>
  <img src={img3} className="card-img-top img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Save trees</h5>
    <a href="/Login" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
     </div>
     </div>
     <div className="container-fluid">
         <div className="row">
             <div className="col-sm-4">
             <div className="card" style={{width: "20rem"}}>
  <img src={img4} className="card-img-top img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Save trees</h5>
    <a href="/Login" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
     <div className="col-sm-4">
             <div className="card" style={{width: "20rem"}}>
  <img src={img5} className="card-img-top img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Save trees</h5>
    <a href="/Login" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
     <div className="col-sm-4">
             <div className="card" style={{width: "20rem"}}>
  <img src={img4} className="card-img-top img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Save trees</h5>
    <a href="/Login" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
     </div>
     </div>
     </>
  );
};

export default Home;
