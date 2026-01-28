import CardModal from "./CardModal";
import { motion } from "motion/react";

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
      <div className="cursor-pointer" onClick={handleClick}>
        <motion.div
          className="card bg-gray-100 dark:bg-black  shadow-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="card-body">
            <h2 className="card-title dark:text-white text-black">{nombre}</h2>
            <div className="badge badge-outline badge-primary">{categoria}</div>
          </div>
        </motion.div>
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
