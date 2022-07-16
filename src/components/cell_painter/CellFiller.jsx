import { Title, Container, Group, Image, Box, Text, Stack } from "@mantine/core";

import { useMapDataStore } from "../../stores/useMapDataStore";
import { cellName, spriteSrc } from "../../functions";

export const CellFiller = ({ setOpened }) => {
  const cellFillerType = useMapDataStore(state => state.cellFillerType);
  const setCellFillerType = useMapDataStore(state => state.setCellFillerType);

  const options = Array.from({length: 8}, (_, i) => i + 1).map(type => (
    <Box 
      key={cellName(type)}
      sx={{ 
        position: "relative",
        height: 55,
        padding: 10,
        borderRadius: 10,
        backgroundColor: cellFillerType == type ? "#59ecff" : "#fff",
        border: "1px solid black",
      }} 
      onClick={() => setCellFillerType(type)}
    >
      <Group>
        <Image
          width={35}
          height={35}
          src={spriteSrc(type)}
          withPlaceholder
        />

        <Text>{cellName(type)}</Text>
      </Group>
    </Box>  
  ))

  return (
    <Container size="sm" my={20} shadow="md">
      <Title order={3} align="center" mb={10}>Select cell filler type</Title>

      <Stack>
        { options }
      </Stack>
    </Container>
  );
} 