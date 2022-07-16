import { array1DTo2D, array2DTo1D } from "./";

export function useDataFromFile(mapData)  {
    mapData = JSON.parse(mapData);
    let { width, height, layers } = mapData;
    let map = array1DTo2D(layers[0].data, width);
    let { max_players, spawns } = layers[0].properties;

    return { width, height, map, max_players, spawns };
}

export function useJsonStringFromData({ width, height, map, max_players, spawns }) {
    let mapData = {
        width,
        height,
        tilewidth: 55,
        tileheight: 55,
        layers: [
            {
                name: "Blocks",
                width,
                height,
                x: 0,
                y: 0,
                data: array2DTo1D(map),
                opacity: 1,
                type: "tilelayer",
                visible: true,
                properties: {
                    max_players,
                    collisionTiles: [1, 2, 4],
                    empty: 3,
                    balk: 1,
                    wall: 2,
                    gift: 4,
                    hospital: 5,
                    vaccineLab:6,
                    teleportGate:7,
                    isolationArea:8,
                    spawns: spawns,
                    agent: {
                        virusA: {
                            number: 5,
                            speed: 1.5,
                            max: 10
                        },
                        people: {
                            number: 10,
                            speed: 2,
                            infected: 5,
                            dropRange: 5
                        }
                    }
                }
            }
        ],
        renderorder: "right-down",
        tilesets: [
            {
                name: "tiles",
                bombtileset: "bomb_tileset",
                firstgid: 1,
                tilewidth: 55,
                tileheight: 55,
                imagewidth: 440,
                imageheight: 55,
                image: "fighting_tileset_5.png",
                margin: 0,
                properties: {},
                spacing: 0
            }
        ],
        properties: {},
        orientation: "orthogonal",
        version: 1
    }
      

    return JSON.stringify(mapData);
}

