import { useState } from "react";
import { Affix, Dialog, Button,} from "@mantine/core/";

import { CellFiller } from "./CellFiller";

export const CellFillerToggler = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Affix position={{ top: 20, right: 20 }}>
        <Button 
          radius="md"
          onClick={() => setOpened(!opened)}
        >
          Open Cell Filler
        </Button>
      </Affix>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        position={{ top: 20, right: 20 }}
        transition="fade"
        size={250}
        radius="md"
        shadow="xl"
      >
        <CellFiller />
      </Dialog>
    </>
  )
}
