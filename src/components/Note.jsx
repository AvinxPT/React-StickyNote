import React from "react";

const Note = () => {
  return (
    <div className="content-table-card">
      <div className="content-table-card-header">
        <div>
          <span>Titulo da Note</span>
        </div>
        <div>
          <span>X</span>
        </div>
      </div>
      <div className="content-table-card-content">Conteudo da note</div>
    </div>
  );
};

export default Note;
