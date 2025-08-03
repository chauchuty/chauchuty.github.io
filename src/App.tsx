import React, { useState, useEffect } from "react";
import { concursos, Concurso } from "./concursos";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [concursoSelecionado, setConcursoSelecionado] = useState<Concurso | null>(null);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostraResultado, setMostraResultado] = useState(false);
  const [resultados, setResultados] = useState<Record<string, { acertos: number; total: number }>>({});

  // Carregar resultados do localStorage ao montar
  useEffect(() => {
    const res: Record<string, { acertos: number; total: number }> = {};
    concursos.forEach((c) => {
      const item = localStorage.getItem(`resultado_${c.id}`);
      if (item) {
        res[c.id] = JSON.parse(item);
      }
    });
    setResultados(res);
  }, []);

  function responder(categoriaIndex: number, perguntaIndex: number, opcao: string) {
    const key = `${categoriaIndex}-${perguntaIndex}`;
    setRespostas((old) => ({ ...old, [key]: opcao }));
  }

  function totalPerguntas(): number {
    if (!concursoSelecionado) return 0;
    return concursoSelecionado.categorias.reduce(
      (acc, cat) => acc + cat.perguntas.length,
      0
    );
  }

  function totalAcertos(): number {
    if (!concursoSelecionado) return 0;
    let acertos = 0;
    concursoSelecionado.categorias.forEach((categoria, cIdx) => {
      categoria.perguntas.forEach((p, pIdx) => {
        const key = `${cIdx}-${pIdx}`;
        const resp = respostas[key];
        if (resp && resp == "IGNORAR" || resp === p.resposta) acertos++;
      });
    });
    return acertos;
  }

  function acertosPorCategoria(): Record<string, number> {
    const resultado: Record<string, number> = {};
    if (!concursoSelecionado) return resultado;

    concursoSelecionado.categorias.forEach((categoria, cIdx) => {
      let acertos = 0;
      categoria.perguntas.forEach((p, pIdx) => {
        const key = `${cIdx}-${pIdx}`;
        const resp = respostas[key];
        if (resp && resp == "IGNORAR" || resp === p.resposta) acertos++;
      });
      resultado[categoria.nome] = acertos;
    });

    return resultado;
  }

  function reiniciarQuiz() {
    setRespostas({});
    setMostraResultado(false);
  }

  function encontrarPrimeiraPendencia(): string | null {
    if (!concursoSelecionado) return null;

    for (let cIdx = 0; cIdx < concursoSelecionado.categorias.length; cIdx++) {
      const categoria = concursoSelecionado.categorias[cIdx];
      for (let pIdx = 0; pIdx < categoria.perguntas.length; pIdx++) {
        const key = `${cIdx}-${pIdx}`;
        if (!respostas[key]) {
          return key;
        }
      }
    }
    return null;
  }

  function finalizarQuiz() {
    const pendencia = encontrarPrimeiraPendencia();
    if (pendencia) {
      const element = document.getElementById(`pergunta-container-${pendencia}`);
      if (element) {
        const yOffset = -60;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset - 30;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;
    }

    if (concursoSelecionado) {
      const total = totalPerguntas();
      const acertos = totalAcertos();
      localStorage.setItem(
        `resultado_${concursoSelecionado.id}`,
        JSON.stringify({ acertos, total })
      );

      setResultados((old) => ({
        ...old,
        [concursoSelecionado.id]: { acertos, total },
      }));
    }

    setMostraResultado(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!concursoSelecionado) {
    return (
      <div className="container py-3">
        <h4 className="mb-4">Concursos:</h4>
        <ul className="list-group">
          {concursos.map((c, i) => {
            const isIA = c.nome.includes("I.A");
            const resultado = resultados[c.id];
            const jaRespondido = !!resultado;

            const bgClass = jaRespondido ? "bg-success" : isIA ? "bg-warning" : "bg-dark";
            const textClass = jaRespondido ? "text-white" : isIA ? "text-dark" : "text-white";

            return (
              <li
                key={i}
                className={`list-group-item d-flex justify-content-between align-items-center ${bgClass} ${textClass}`}
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => {
                  setConcursoSelecionado(c);
                  reiniciarQuiz();
                }}
              >
                <span>{c.nome}</span>
                {jaRespondido && (
                  <span style={{ fontWeight: "normal", fontSize: 14 }}>
                    {resultado.acertos}/{resultado.total}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (mostraResultado) {
    const total = totalPerguntas();
    const acertos = totalAcertos();
    const porCategoria = acertosPorCategoria();

    const ignoradasPorCategoria: Record<string, string[]> = {};

    Object.entries(respostas)
      .filter(([, r]) => r === "IGNORAR")
      .forEach(([key]) => {
        const [cIdxStr] = key.split("-");
        const cIdx = Number(cIdxStr);
        const nomeCategoria = concursoSelecionado?.categorias[cIdx].nome || "Desconhecida";
        if (!ignoradasPorCategoria[nomeCategoria]) ignoradasPorCategoria[nomeCategoria] = [];
        ignoradasPorCategoria[nomeCategoria].push(key);
      });

    function questaoNumero(key: string): number {
      if (!concursoSelecionado) return 0;
      const [cIdxStr, pIdxStr] = key.split("-");
      const cIdx = Number(cIdxStr);
      const pIdx = Number(pIdxStr);

      let num = 0;
      for (let i = 0; i < cIdx; i++) {
        num += concursoSelecionado.categorias[i].perguntas.length;
      }
      num += pIdx + 1;
      return num;
    }

    return (
      <div className="container py-5" style={{ paddingTop: "90px" }}>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            borderBottom: "1px solid #ddd",
            padding: "10px 15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 1000,
          }}
        >
          <button className="btn btn-light" onClick={() => setConcursoSelecionado(null)}>
            ← Voltar
          </button>
          <h2 style={{ fontSize: 16, margin: 0 }}>{concursoSelecionado.nome}</h2>
        </header>

        <p className="lead" style={{ textAlign: "justify" }}>
          Você acertou <strong>{acertos}</strong> de <strong>{total}</strong> perguntas.
        </p>
        <ul className="list-group mb-4">
          {concursoSelecionado.categorias.map((cat) => {
            const ignoradasDaCategoria = ignoradasPorCategoria[cat.nome] || [];
            return (
              <li key={cat.nome} className="list-group-item">
                <strong>{cat.nome}</strong>: {porCategoria[cat.nome]}/{cat.perguntas.length} acertos

                {ignoradasDaCategoria.length > 0 && (
                  <>
                    <br />
                    <ul
                      style={{
                        marginTop: "0.25rem",
                        paddingLeft: "1rem",
                        fontSize: "0.75rem",
                        color: "#856404",
                        fontStyle: "italic",
                      }}
                    >
                      {ignoradasDaCategoria.map((key) => (
                        <li key={key}>Questão {questaoNumero(key)} Ignorada</li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <button className="btn btn-danger w-100" onClick={reiniciarQuiz}>
          Refazer Quiz
        </button>

        {concursoSelecionado.categorias.map((cat, cIdx) => (
          <div key={cIdx} className="mb-4">
            <h4
              className="text-primary mb-3"
              style={{
                textAlign: "justify",
                marginTop: "15px",
              }}
            >
              {cat.nome}
            </h4>
            {cat.perguntas.map((p, pIdx) => {
              const key = `${cIdx}-${pIdx}`;
              const certa = p.resposta;
              const escolhida = respostas[key];
              const acertou = escolhida === certa;

              return (
                <div
                  id={`pergunta-container-${key}`}
                  key={key}
                  className={`card mb-3 ${acertou
                    ? "border-success"
                    : escolhida === "IGNORAR"
                      ? "border-warning"
                      : "border-danger"
                    }`}
                >
                  <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "justify" }}>
                      {p.pergunta}
                    </h5>
                    <ul className="list-group list-group-flush">
                      {Object.entries(p.opcoes).map(([letra, texto]) => {
                        const isCerta = letra === certa;
                        const isEscolhida = letra === escolhida;
                        return (
                          <li
                            key={letra}
                            className={`list-group-item d-flex justify-content-between align-items-center ${isCerta
                              ? "list-group-item-success"
                              : isEscolhida && !isCerta
                                ? "list-group-item-danger"
                                : ""
                              }`}
                          >
                            <span>
                              <strong>{letra}:</strong> {texto}
                            </span>
                            {isCerta && <span className="badge bg-success">Certa</span>}
                            {isEscolhida && !isCerta && (
                              <span className="badge bg-danger">Errada</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    {escolhida === "IGNORAR" ? (
                      <p className="mt-2 fw-bold text-warning" style={{ textAlign: "justify" }}>
                        Questão anulada (ignorada)
                      </p>
                    ) : (
                      <p
                        className={`mt-2 fw-bold ${acertou ? "text-success" : "text-danger"}`}
                        style={{ textAlign: "justify" }}
                      >
                        {acertou ? "Resposta correta!" : "Resposta errada."}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ paddingTop: "90px" }}>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <button className="btn btn-light" onClick={() => setConcursoSelecionado(null)}>
          ← Voltar
        </button>
        <h2 style={{ fontSize: 16, margin: 0 }}>{concursoSelecionado.nome}</h2>
      </header>

      {concursoSelecionado.categorias.map((cat, cIdx) => (
        <div key={cIdx} className="mb-5">
          <h4
            className="text-primary mb-3"
            style={{
              textAlign: "justify",
              marginTop: cIdx === 0 ? "60px" : "15px",
            }}
          >
            {cat.nome}
          </h4>
          {cat.perguntas.map((p, pIdx) => {
            const key = `${cIdx}-${pIdx}`;
            return (
              <div
                id={`pergunta-container-${key}`}
                key={key}
                className="mb-4 p-3 border rounded"
              >
                <p className="fw-semibold" style={{ textAlign: "justify" }}>
                  {p.pergunta}
                </p>
                {Object.entries(p.opcoes).map(([letra, texto]) => (
                  <div key={letra} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`pergunta-${key}`}
                      id={`pergunta-${key}-${letra}`}
                      checked={respostas[key] === letra}
                      onChange={() => responder(cIdx, pIdx, letra)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`pergunta-${key}-${letra}`}
                      style={{ textAlign: "justify" }}
                    >
                      <strong>{letra}:</strong> {texto}
                    </label>
                  </div>
                ))}

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`pergunta-${key}`}
                    id={`pergunta-${key}-ignorar`}
                    checked={respostas[key] === "IGNORAR"}
                    onChange={() => responder(cIdx, pIdx, "IGNORAR")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`pergunta-${key}-ignorar`}
                    style={{ fontStyle: "italic", textAlign: "justify" }}
                  >
                    Ignorar esta questão
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <button className="btn btn-dark w-100" onClick={finalizarQuiz}>
        Ver Resultado
      </button>
    </div>
  );
}
