import React from "react";
import CardsGrid from "./CardsGrid";
import Card from "./Card";
const response = await fetch("/patrones.mock.json");
const patrones = await response.json();
console.log(patrones);
const Patrones = () => {
  const categories = ["Creacional", "Estructural", "Comportamiento"];
  return categories.map((category) => {
    return (
      <>
        <h1 className="text-3xl my-8">{category}</h1>
        <CardsGrid>
          {patrones.patrones_diseno.map((patron, index) => {
            if (patron.categoria == category) {
              return (
                <Card
                  key={index}
                  nombre={patron.nombre}
                  categoria={patron.categoria}
                  proposito={patron.proposito}
                  codigo_referencia={patron.codigo_referencia}
                  estructura_uml={patron.estructura_uml}
                />
              );
            }
          })}
        </CardsGrid>
      </>
    );
  });
};

export default Patrones;
