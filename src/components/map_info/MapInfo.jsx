import { Text, Title, Group, Affix } from "@mantine/core";

import { useMapDataStore } from "../../stores/useMapDataStore";

export const MapInfo = () => {
  const width = useMapDataStore((state) => state.width);
  const height = useMapDataStore((state) => state.height);
  const map = useMapDataStore((state) => state.map);
  const max_players = useMapDataStore((state) => state.max_players);
  const spawns = useMapDataStore((state) => state.spawns);

  return (
    <Affix 
      position={{ bottom: 20, left: 20 }} 
      sx={{ 
        backgroundColor: "rgba(111, 125, 115, 0.3)", 
        padding: 10, 
        borderRadius: 10
      }}
    >
      <Title order={3} align="center">Map Info</Title>

      <Group align="center" grow>
        <Text size="md" align="center">Width : {width}</Text>
        <Text size="md" align="center">Height : {height}</Text>
      </Group>
      <Text align="center">Max number of players : {max_players}</Text>
      <Text align="center">Players' spawn positions : </Text>

      { spawns.map((pos, id) => (
        <Text key={id} align="center">{pos.col}, {pos.row}</Text>
      )) }
    </Affix>
  )
}
