import { Table } from "@mantine/core";

import { MapCell } from "./MapCell";

import { useMapDataStore } from "../../stores/useMapDataStore"

export const MapTable = () => {
  const map = useMapDataStore(state => state.map);
  
  const rows = map.map((row, i) => (
    <tr key={i}>
      { row.map((cellType, j) =>  (
        <MapCell key={`${i}${j}`} cellType={cellType} x={j} y={i}/>
      ))}
    </tr>
  ));

  return (
    <Table
      striped={false}
      horizontalSpacing={0}
      verticalSpacing={0}
      sx={{
        width: "50%",
      }}
    >
      <tbody>{rows}</tbody>
    </Table>
  )
}
