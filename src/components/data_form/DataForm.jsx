import { Title, Container, Group, Button, NumberInput, ActionIcon, Box, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import Trash from "tabler-icons-react/dist/icons/trash";

import { FileImport } from "./FileImport";
import { FileExport } from "./FileExport";

import { useMapDataStore } from "../../stores/useMapDataStore";
import shallow from "zustand/shallow";
import { isValidSpawnPosition, isValidSpawnNumbers } from "../../functions";

export const DataForm = ({ setOpened }) => {
  const [width, height, map, max_players, spawns] = useMapDataStore(state => [state.width, state.height, state.map, state.max_players, state.spawns], shallow)

  const setMapDataFromForm = useMapDataStore(state => state.setMapDataFromForm);
  const resetMap = useMapDataStore(state => state.resetMap);

  const form = useForm({
    initialValues: {
      width,
      height,
      max_players,
      spawns,
    },

    validate: (values) => {
      let spawnsErr = {};

      values.spawns.forEach((pos, i) => {
        spawnsErr[`spawns.${i}.col`] = !isValidSpawnPosition(pos, map) ? "Spawn positions can only be empty cell" : null;
        spawnsErr[`spawns.${i}.row`] = !isValidSpawnPosition(pos, map) ? "Spawn positions can only be empty cell" : null;
      })

      return {
        max_players: !isValidSpawnNumbers(values.spawns, values.max_players) ? "The number of spawn positions is bigger than max number of players" : null,
        ...spawnsErr,
      }
    },
  });

  const spawnInputs = form.values.spawns.map((item, index) => (
    <Group key={`${item.col} ${item.row}`} mt="xs">
      <NumberInput
        required
        placeholder="x"
        sx={{ flex: 1 }}
        {...form.getInputProps(`spawns.${index}.col`)}
      />
      <NumberInput
        required
        placeholder="y"
        sx={{ flex: 1 }}
        {...form.getInputProps(`spawns.${index}.row`)}
      />

      <ActionIcon
        color="red"
        variant="light"
        onClick={() => form.removeListItem("spawns", index)}
      >
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Container size={420} my={20} shadow="md">
      <Title order={2} align="center" mb={10}>Map properties</Title>

      <Group noWrap="true">
        <FileImport setOpened={setOpened}/>

        <FileExport form={form}/>
      </Group>

      <form onSubmit={form.onSubmit(values => setMapDataFromForm(values))}>
        <Group noWrap="true">
          <NumberInput 
            label="Map width" 
            placeholder="" 
            required
            {...form.getInputProps("width")}
          />

          <NumberInput 
            label="Map height" 
            placeholder="" 
            required
            {...form.getInputProps("height")}
          />
        </Group>

        <NumberInput 
          label="Max number of players" 
          placeholder="" 
          required
          {...form.getInputProps("max_players")}
        />
        
        <Title my={10} order={4} align="center">Spawn positions</Title>

        <Group mt="xs">
          <Text align="center" sx={{ flex: 1 }}>Col</Text>
          <Text align="center" sx={{ flex: 1 }}>Row</Text>

          <Box sx={{ width: 16 }} />
        </Group>
        
        {spawnInputs}

        <Group position="center" mt="md">
          <Button onClick={() => form.insertListItem("spawns", { col: 0, row: 0 }) } >
            Add spawn position
          </Button>
        </Group>

        <Group position="center" mt={10} grow>
          <Button onClick={resetMap}>Reset map</Button>
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </Container>
  );
} 