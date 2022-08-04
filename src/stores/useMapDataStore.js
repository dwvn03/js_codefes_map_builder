import create from "zustand";

import { testJsonMapData } from "./testMapData";
import { useDataFromFile, gen2DArr } from "../functions";

export const useMapDataStore = create((set, get) => {
    let { width, height, map, max_players, spawns } = useDataFromFile(testJsonMapData);

    return {
        width,
        height,
        map,
        max_players,
        spawns,
        cellPainting: false,
        cellFillerType: 2,

        setMapDataFromFile: (mapData) => set(
            useDataFromFile(mapData)
        ),

        setMapDataFromForm: (mapDataFromForm) => {
            let mapSizeChanged = get().height != mapDataFromForm.height || get().width != mapDataFromForm.width;
            
            set(mapDataFromForm);
            
            if (mapSizeChanged) {
                get().resetMap();
            }
        },

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
        }),

        toggleCellPainting: () => set({
            cellPainting: !get().cellPainting,
        })
    }   
})