import create from "zustand";

import { testJsonMapData } from "./testMapData";
import { useDataFromFile, gen2DArr } from "../functions";

export const useMapDataStore = create((set) => {
    let { width, height, map, max_players, spawns } = useDataFromFile(testJsonMapData);

    return {
        width,
        height,
        map,
        max_players,
        spawns,
        cellFillerType: 2,

        setMapDataFromFile: (mapData) => set(
            useDataFromFile(mapData)
        ),

        setMapDataFromForm: (mapDataFromForm) => set((state) => {
            if (state.height != mapDataFromForm.height || state.width != mapDataFromForm.width) {
                state.resetMap(mapDataFromForm.width, mapDataFromForm.height);
            }

            return mapDataFromForm;
        }),

        resetMap: () => set((state) => ({
            map: gen2DArr(state.width, state.height),
        })),

        setCellData: (x, y, isSpawnPosition, rejectSetCellDataNotif) => set(state => {
            if (isSpawnPosition && state.cellFillerType != 3) {
                rejectSetCellDataNotif();
            } else {
                let newMap = [...state.map];
                newMap[y][x] = state.cellFillerType;
                
                return {
                    map: newMap,
                }
            }
        }),

        setCellFillerType: (type) => set({ 
            cellFillerType: type,
        })
    }   
})