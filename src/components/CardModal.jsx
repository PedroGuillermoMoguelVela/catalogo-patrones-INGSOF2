import MermaidDiagram from "./MermaidDiagram";

const CardModal = ({
  nombre,
  categoria,
  proposito,
  codigo_referencia,
  estructura_uml,
}) => {
  return (
    <dialog id={nombre} className="modal items-start pt-10">
      <div className="modal-box max-w-[90vh]  max-h-3/4">
        <button
          class="absolute top-0 left-0 w-0 h-0 opacity-0"
          autofocus
        ></button>
        <h3 className="font-bold text-lg" autoFocus={true} tabindex="-1">
          {nombre}
        </h3>
        <div className="badge badge-outline badge-primary">{categoria}</div>

        <p className="py-4">{proposito}</p>

        {/*JAVA*/}
        <div className="mockup-code w-full mb-7">
          <pre className="px-4">
            <code>{codigo_referencia.java}</code>
          </pre>
        </div>

        {/*PYTHON*/}
        <div className="mockup-code w-full mt-8 mb-8">
          <pre className="px-4">
            <code>{codigo_referencia.python}</code>
          </pre>
        </div>

        <MermaidDiagram chart={estructura_uml.formato_mermaid} />

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CardModal;
