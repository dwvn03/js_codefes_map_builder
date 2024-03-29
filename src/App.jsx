import { Suspense, useEffect } from "react";
import { lazily } from "./functions/otherUtils";

import { Title, Container } from "@mantine/core";

import { MapTable } from "./components/table/MapTable";
import { MapInfo } from "./components/map_info/MapInfo";
import { useMapDataStore } from "./stores/useMapDataStore";

const { DataFormToggler } = lazily(() => import("./components/data_form/DataFormToggler"));
const { CellFillerToggler } = lazily(() => import("./components/cell_filler/CellFillerToggler"));

export const App = () => {
  const toggleCellPainting = useMapDataStore(state => state.toggleCellPainting)

  useEffect(() => {
    document.body.addEventListener("mousedown", () => toggleCellPainting(true));
    document.body.addEventListener("mouseup", () => toggleCellPainting(false));
  }, [])

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

      <Suspense fallback={null}>
        <MapInfo />
      </Suspense>

      <Suspense fallback={null}>
        <DataFormToggler />
      </Suspense>

      <Suspense fallback={null}>
        <CellFillerToggler />
      </Suspense>
    </>
  )
}   