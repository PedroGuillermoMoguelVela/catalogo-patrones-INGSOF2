import React, { useEffect, useRef, useState, useId } from "react";
import mermaid from "mermaid";

// Configuración inicial
mermaid.initialize({
  startOnLoad: false,
  theme: "neutral",
  securityLevel: "loose",
});

const MermaidDiagram = ({ chart }) => {
  const containerRef = useRef(null);
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(false);

  // useId es más estable para SSR y React 18+
  const uniqueId = useId().replace(/:/g, "");

  useEffect(() => {
    let isMounted = true;
    setError(false);

    const renderChart = async () => {
      // Si no hay chart, no hacemos nada
      if (!chart) return;

      try {
        // Forzamos el renderizado manual
        const { svg: generatedSvg } = await mermaid.render(
          `mermaid-svg-${uniqueId}`,
          chart,
        );

        if (isMounted) {
          setSvg(generatedSvg);
        }
      } catch (err) {
        console.error("Error de Mermaid:", err);
        if (isMounted) setError(true);
      }
    };

    // Un pequeño delay para que el DOM esté listo
    const timer = setTimeout(renderChart, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [chart, uniqueId]);

  return (
    <div className="bg-white p-4 rounded-lg w-full flex justify-center items-center min-h-[250px]">
      {error ? (
        <div className="text-error text-center p-4 border border-error/20 rounded-lg">
          <p className="font-bold">Error en el diagrama</p>
          <p className="text-xs">Verifica la sintaxis del UML</p>
        </div>
      ) : svg ? (
        <div
          className="w-full flex justify-center"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <span className="loading loading-spinner text-primary"></span>
          <p className="text-xs text-gray-500 italic">Dibujando UML...</p>
        </div>
      )}
    </div>
  );
};

export default MermaidDiagram;
