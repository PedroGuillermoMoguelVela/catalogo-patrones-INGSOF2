import React from "react";
import CardsGrid from "./CardsGrid";
import CardModal from "./CardModal";

const Card = ({
  nombre,
  categoria,
  proposito,
  codigo_referencia,
  estructura_uml,
}) => {
  const handleClick = () => {
    document.getElementById(nombre).showModal();
  };
  return (
    <>
      <div className="card bg-black shadow-sm" onClick={handleClick}>
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <div className="badge badge-outline badge-primary">{categoria}</div>
        </div>
      </div>

      <CardModal
        nombre={nombre}
        categoria={categoria}
        proposito={proposito}
        codigo_referencia={codigo_referencia}
        estructura_uml={estructura_uml}
      />
    </>
  );
};

export default Card;
