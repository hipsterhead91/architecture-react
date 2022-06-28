import React from 'react';
import { Link } from "react-router-dom";

function LinkToProject(props) {

  return (
    <Link className={`projects__item ${props.project.cssModifier}`} to={`/${props.category}/${props.project.id}`}>
      <img className="projects__item-image" src={props.project.images[0]} alt={props.project.name} />
      <div className="projects__item-overlay" />
    </Link>
  )
}

export default LinkToProject;