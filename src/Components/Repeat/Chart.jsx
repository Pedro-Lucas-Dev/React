import "./Chart.css";
import React from "react";
import Produts from "../../Data/Produts";

export const Chart = () => {
  const produtsList = Produts.map((produt) => {
    const { id, name, price } = produt;
    return (
      <tr key={produt.id}>
        <td> {id} </td>
        <td> {name} </td>
        <td>R$ {price} </td>
      </tr>
    );
  });
  return (
    <div className="Chart">
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>NOME</td>
            <td>PREçO</td>
          </tr>
          {produtsList}
        </tbody>
      </table>
    </div>
  );
};
