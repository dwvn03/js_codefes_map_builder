import { useMapDataStore } from "../stores/useMapDataStore";

export function useSpawnPosition(x, y) {
    const spawns = useMapDataStore(state => state.spawns);
    let isSpawnPosition = false;

    for (let pos of spawns) {
        let { col, row } = pos;
        if (col == x && row == y) {
            isSpawnPosition = true;
            break;
        }
    }

    return {
        isSpawnPosition,
    }
}

export function cellName(cellType) {
    let cellNames = {
        1:  "balk",
        2:  "wall",
        3:  "empty",
        4:  "gift",
        5:  "hospital",
        6:  "vaccineLab",
        7:  "teleportGate",
        8:  "isolationArea",
    };
    
    return cellNames[cellType];
};

export function spriteSrc(cellType) {
    return `/src/assets/sprites/${cellName(cellType)}_1x.png`;
};