export function isValidSpawnPosition(pos, map) {
    let { col, row } = pos;

    return map[row][col] == 3
}

export function isValidSpawnNumbers(spawnsArr, maxPlayers) {
    return spawnsArr.length <= maxPlayers;
}