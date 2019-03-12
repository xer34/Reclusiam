import React from "react";

function ProjectDetails(props) {

  const id = props.match.params.id

  
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Placeholder Title {id}</span>
          <p>
            Veniam dolor aliquip tempor cillum culpa nisi. Id aute aute
            excepteur consequat occaecat anim esse adipisicing exercitation.
            Labore occaecat do ut commodo fugiat excepteur sunt minim cupidatat
            qui amet aliquip duis aliquip. Aliquip voluptate duis mollit laboris
            eu quis esse magna excepteur tempor sunt esse. Nisi commodo culpa
            esse occaecat voluptate laborum.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Placeholder Guy</div>
          <div>Placeholder Date</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
