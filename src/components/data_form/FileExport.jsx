import { Button } from "@mantine/core";

import { useJsonStringFromData } from "../../functions";
import { useMapDataStore } from "../../stores/useMapDataStore";

export const FileExport = ({ form }) => {
  const mapData = useJsonStringFromData(useMapDataStore());

  const downloadTxtFile = (mapData) => {
    const element = document.createElement("a");

    const file = new Blob([mapData], {type: "application/json"});

    element.href = URL.createObjectURL(file);
    element.download = "map.json";

    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  }

  return (
    <Button 
      fullWidth
      onClick={() => form.validate().hasErrors ? null : downloadTxtFile(mapData) } 
    >
      Export file
    </Button>
  )
}
