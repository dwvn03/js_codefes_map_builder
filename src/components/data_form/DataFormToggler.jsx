import { useState } from "react";
import { Affix, Dialog, Button,} from "@mantine/core/";

import { DataForm } from "./DataForm";

export const DataFormToggler = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Affix position={{ top: 20, left: 20 }}>
        <Button 
          radius="md"
          onClick={() => setOpened(!opened)}
        >
          Edit props
        </Button>
      </Affix>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        position={{ top: 20, left: 20 }}
        transition="fade"
        size="lg"
        radius="md"
        shadow="md"
      >
        <DataForm setOpened={setOpened}/>
      </Dialog>
    </>
  )
}
