import { Text, Title, Group, Affix, Paper } from "@mantine/core";

import { useMapDataStore } from "../../stores/useMapDataStore";

export const MapInfo = () => {
  const width = useMapDataStore((state) => state.width);
  const height = useMapDataStore((state) => state.height);
  const max_players = useMapDataStore((state) => state.max_players);
  const spawns = useMapDataStore((state) => state.spawns);

  return (
    <Affix position={{ bottom: 15, left: 15 }} >
      <Paper shadow="md" radius="md" p="xs" withBorder>
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
      </Paper>
    </Affix>
  )
}
