import { Image, Tooltip, Overlay, Box, Text, Group } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";

import { useSpawnPosition, cellName, spriteSrc } from "../../functions";
import { useMapDataStore } from "../../stores/useMapDataStore";

export const MapCell = ({ cellType, x, y }) => {
  const { hovered, ref } = useHover();

  const setCellData = useMapDataStore(state => state.setCellData);

  const { isSpawnPosition } = useSpawnPosition(x, y);

  const notifications = useNotifications();
  const rejectSetCellDataNotif = () => notifications.showNotification({
    color: "red",
    title: "Spawn position can only be empty cell",
  });  

  const tooltipLable = (
    <Group position="center" direction="column" spacing={0}>
      <Text align="center">Pos : {x}, {y}</Text>
      <Text align="center">Cell type : {cellName(cellType)}</Text>
      <Text align="center">{isSpawnPosition ? "Is spawn position" : ""}</Text>
    </Group>
  );

  return (
    <td
      ref={ref} 
      onClick={() => setCellData(x, y, isSpawnPosition, rejectSetCellDataNotif)}
    >
      <Box sx={{ position: "relative", height: 35, width: 35 }}>
        { hovered && <Overlay opacity={0.6} color="#fff" zIndex={5}/> }
        { isSpawnPosition && <Overlay opacity={0.6} color="#59ecff" zIndex={6}/> }

        <Tooltip 
          withArrow 
          label={tooltipLable}
          opened={hovered}
        >
          <Image
            width={35}
            height={35}
            src={spriteSrc(cellType)}
            alt={cellName(cellType)}
          />
        </Tooltip>
      </Box>
    </td>
  )
}
