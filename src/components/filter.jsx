import React from "react";
import Cores from "../getLPTheme";

// opções de categorias dos filtros
function EscolhaOption({ escolher, inputType }) {
  let Opcoes = [];

  if (escolher === "marca") {
    Opcoes = [
      { texto: "Adiddas" },
      { texto: "Calenciada" },
      { texto: "K-Swiss" },
      { texto: "Nike" },
      { texto: "Puma" },
    ];
  } else if (escolher === "categoria") {
    Opcoes = [
      { texto: "Esporte e lazer" },
      { texto: "Casual" },
      { texto: "Utilitário" },
      { texto: "Corrida" },
    ];
  } else if (escolher === "gênero") {
    Opcoes = [
      { texto: "Masculino" },
      { texto: "Feminino" },
      { texto: "Unisex" },
    ];
  } else if (escolher === "estado") {
    Opcoes = [
      { texto: "Novo" },
      { texto: "Usado" },
    ];
  }

  return (
    <>
      {Opcoes.map((opcao, index) => (
        <div
          key={index}
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: 500,
            width: "auto",
            marginTop: "10px",
            display: "flex",
            gap: "20px",
          }}
        >
          <input
            className="inputFiltro"
            type={inputType}
            name={`Type${inputType}`}
            id={`${escolher}-${index}`}
            value={opcao.texto}
            style={{
              width: "22px",
              height: "22px",
            }}
          />
          <label htmlFor={`${escolher}-${index}`}>{opcao.texto}</label>
        </div>
      ))}
    </>
  );
}

export default function FilterGroup({ title, inputType, option }) {
  return (
    <>
      <div
        style={{
          color: "black",
          fontSize: "14px",
          fontWeight: 700,
          marginTop: "20px",
        }}
      >
        {title}
      </div>
      <EscolhaOption escolher={option} inputType={inputType} />
    </>
  );
}
