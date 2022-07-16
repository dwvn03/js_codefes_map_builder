import { useRef } from "react";
import { Button } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { useNotifications } from "@mantine/notifications";

import { useMapDataStore } from "../../stores/useMapDataStore";

export const FileImport = ({ setOpened }) => {
  const openRef = useRef();
  const notifications = useNotifications();

  const setMapDataFromFile = useMapDataStore(state => state.setMapDataFromFile);

  const rejectedUploadNotif = () => notifications.showNotification({
    color: "red",
    title: "Invalid file selected",
  });  

  const acceptedUploadNotif = () => notifications.showNotification({
    color: "green",
    title: "Data imported successfully",
  });  

  return (
    <>
      <Button 
        fullWidth 
        onClick={() => openRef.current()}
      >
        Import file
      </Button>

      <Dropzone
        sx={{
          display: "none",
        }}
        openRef={openRef}
        onDrop={files => {
          let reader = new FileReader();
          reader.readAsText(files[0], "UTF-8");

          reader.onload = e => {
            setMapDataFromFile(e.target.result);
            setOpened(false);
          }     

          acceptedUploadNotif();
        }}
        onReject={rejectedUploadNotif}
        accept={["application/json"]}
        maxSize={5 * 1024}
      >
        {() => <></>}
      </Dropzone>
    </>
  );
}