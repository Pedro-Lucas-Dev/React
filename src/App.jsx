import "./App.css";
import React from "react";

import { First } from "./Components/Basic/First";
import { Parameter } from "./Components/Basic/Parameter";
import { Fragmento } from "./Components/Basic/Fragmento";
import { Random } from "./Components/Basic/Random";
import { Resultado } from "./Components/Basic/Resultado";
import { Card } from "./Components/layout/Card";
import { Family } from "./Components/Basic/Family";
import { FamilyMember } from "./Components/Basic/FamilyMember";
import { ListStudents } from "./Components/Repeat/ListStudents";
import { Chart } from "./Components/Repeat/Chart";
import { ParOuImpar } from "./Components/Conditional/ParOuImpar";
import { User } from "./Components/Conditional/User";
import { Father } from "./Components/Comunicacao/Father";
import { FatherInd } from "./Components/Comunicacao/FatherInd";

export const App = (props) => {
  return (
    <div className="App">
      <h1> React Fundamentals: </h1>
      <div className="Cards">
        <Card title="#11 - Communication Indireta" color=" #00B796">
          <FatherInd></FatherInd>
        </Card>

        <Card title="#10 - Communication" color="#FF66CC">
          <Father></Father>
        </Card>

        <Card title="#09 - Conditional with If" color="#0241E2">
          <User user={{ name: "Pedro" }}></User>
          <User user={{ email: "Lucas@gl.com" }}></User>
          <User user={""} />
        </Card>

        <Card title="#08 - Conditional" color="#00C8F8">
          <ParOuImpar number={21}></ParOuImpar>
        </Card>

        <Card title="#07 - Chart of Produts" color="#F76835">
          <Chart></Chart>
        </Card>

        <Card title="#06 - Repeat" color="#B9006E">
          <ListStudents></ListStudents>
        </Card>

        <Card title="#05 - Component with children" color="#E19D29">
          <Family lastName="Fernandes">
            <FamilyMember name=" Pedro " />
            <FamilyMember name=" Bia " />
            <FamilyMember name=" Ana" />
          </Family>
        </Card>

        <Card title="#04 - Challenge Random Value:" color="#800080">
          <Random min={1} max={100} />
        </Card>

        <Card title="#03 - Erro!" color="#FF85CB">
          <Fragmento />
        </Card>

        <Card title="#02 - Component with Parameter" color="#1FDA9A">
          <Parameter title="student situation: " student="Pieter" note={10} />
        </Card>

        <Card title="#01 - First Component newest" color="#DB3340">
          <First title="welcome" />
        </Card>

        <Card title="training" color="#5BB12F">
          <Resultado name={"Thiago"} nota={5} status={"recuperacao"} />
          <Resultado name={"Pedro"} nota={8} status={"aprovado"} />
          <Resultado name={"Charley"} nota={3.5} status={"reprovado"} />
        </Card>
      </div>
    </div>
  );
};
