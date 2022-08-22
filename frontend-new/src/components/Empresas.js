/* import DashboardNavbar from '../components/DashboardNavbar'; */

import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import Box from "@mui/material/Box";

import styles from "./VerticalTabs.module.css";

function Empresas() {
  const [Leads, setLeads] = useState([]);

  useEffect(() => {
    async function CarregaLeads() {
      const resposta = await fetch("http://127.0.0.1:7776/lead/empresa");
      const LeadsEmpresas = await resposta.json();
      setLeads(LeadsEmpresas);
    }
    CarregaLeads();
  }, []);

  return (
    <Box sx={{ display: "inline-flex" }}>
      <div>
        <h1 className={styles.lead}>LEAD</h1>
        {Leads.filter((i) => i.etapa.toString() === "1").map((cliente) => (
          <MediaCard
            key={cliente.id}
            id={cliente.id}
            nome={cliente.nome}
            email={cliente.email}
            telefone={cliente.telefone}
            tipo={cliente.tipo}
            etapa={cliente.etapa}
            data={cliente.data}
            dataFinal={cliente.expectativa}
          />
        ))}
      </div>
      <div>
        <h1 className={styles.negocio}>NEGOCIAÇÃO</h1>
        {Leads.filter((i) => i.etapa.toString() === "2").map((cliente) => (
          <MediaCard
            key={cliente.id}
            id={cliente.id}
            nome={cliente.nome}
            email={cliente.email}
            telefone={cliente.telefone}
            tipo={cliente.tipo}
            etapa={cliente.etapa}
            data={cliente.data}
            dataFinal={cliente.expectativa}
          />
        ))}
      </div>

      <div>
        <h1 className={styles.contrato}>CONTRATO</h1>
        {Leads.filter((i) => i.etapa.toString() === "3").map((cliente) => (
          <MediaCard
            key={cliente.id}
            id={cliente.id}
            nome={cliente.nome}
            email={cliente.email}
            telefone={cliente.telefone}
            tipo={cliente.tipo}
            etapa={cliente.etapa}
            data={cliente.data}
            dataFinal={cliente.expectativa}
          />
        ))}
      </div>
      <div>
        <h1 className={styles.andamento}>EM ANDAMENTO</h1>
        {Leads.filter((i) => i.etapa.toString() === "4").map((cliente) => (
          <MediaCard
            key={cliente.id}
            id={cliente.id}
            nome={cliente.nome}
            email={cliente.email}
            telefone={cliente.telefone}
            tipo={cliente.tipo}
            etapa={cliente.etapa}
            data={cliente.data}
            dataFinal={cliente.expectativa}
          />
        ))}
      </div>
    </Box>
  );
}
export default Empresas;
