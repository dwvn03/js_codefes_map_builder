import { Title, Container } from "@mantine/core";

import { CellFillerToggler } from "./components/cell_filler/CellFillerToggler";
import { DataFormToggler } from "./components/data_form/DataFormToggler";
import { MapTable } from "./components/table/MapTable";
import { MapInfo } from "./components/map_info/MapInfo";

export const App = () => {
  return (
    <>
      <Container 
        size="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Title order={1} align="center" my={20}>Map Generator</Title>
        <MapTable />
      </Container>

      <MapInfo />
      <DataFormToggler />
      <CellFillerToggler />
    </>
  )
}   