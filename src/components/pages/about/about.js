import React from "react";
import style from "./about.css";
import LazyHero from "react-lazy-hero";

function About() {
  return (
    <div className={style.background}>

      <LazyHero
        className={style.lazyhero}
        imageSrc="img/findBackground.jpg"
        opacity={0.1}
        minHeight="50vh"
        parallaxOffset={100}
        isFixed={false}
        isCentered={true}
      >
        <h1>Built for all breeds of tabletop gamers.</h1>
      </LazyHero>

     
      <div className="container">
        <header className="jumbotron my-4">
          <h1 className="display-3">Welcome.</h1>
          <p className="lead">
            This is The Reclusiam. Your place in the deep void of space to call
            home. Here you can connect with like-minded individuals to share the
            games and hobbies we all enjoy.
          </p>
          <a href="/signup" className="btn btn-primary btn-lg">
            Sign Up
          </a>
        </header>

        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="img/1.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Find. Meet. Play.</h4>
                <p className="card-text">
                  Connect with people near you. Create and join events. Get
                  playing faster.
                </p>
              </div>
              
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="img/2.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">A Focused Network</h4>
                <p className="card-text">
                  We're about the hobbies - this isn't a place for politics or
                  what you had for lunch.
                </p>
              </div>
              
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="img/3.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Dungeon Masters Welcome</h4>
                <p className="card-text">
                  Strategy, planning, and new worlds to explore live here.
                </p>
              </div>
              
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="img/4.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Up Your Hobby</h4>
                <p className="card-text">
                  Painters, modelers, and folk who build dungeons out of
                  cardboard. All nerds welcome.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Reclusiam 2019
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
