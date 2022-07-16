export const testJsonMapData = `{
    "width": 26,
    "height": 14,
    "tilewidth": 55,
    "tileheight": 55,
    "layers": [
      {
        "name": "Blocks",
        "width": 26,
        "height": 14,
        "x": 0,
        "y": 0,
        "data": [
          2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,        
          2,8,2,3,3,3,3,3,3,3,3,1,7,3,3,3,3,3,3,3,7,3,3,7,3,2,        
          2,2,3,3,7,3,7,3,7,3,7,3,3,1,3,1,7,3,7,1,3,1,3,1,3,2,        
          2,7,3,1,3,1,3,1,3,1,3,7,3,3,7,3,3,1,3,3,3,3,7,3,3,2,        
          2,3,1,7,3,7,3,7,3,7,1,3,1,3,3,3,1,7,3,3,7,1,3,1,7,2,        
          2,3,3,1,3,1,3,1,3,1,3,3,3,7,3,7,3,3,1,3,1,3,3,3,3,2,        
          2,3,3,3,7,3,3,3,7,3,3,7,3,3,3,3,1,3,3,7,3,3,1,7,3,2,        
          2,3,7,1,3,1,7,1,3,1,3,1,3,1,7,3,3,7,1,3,1,7,3,3,1,2,        
          2,1,3,3,3,3,1,3,3,3,7,3,7,3,3,3,3,1,3,3,3,1,3,3,1,2,        
          2,7,1,3,3,7,3,3,7,1,3,1,3,1,3,1,7,3,7,3,7,3,7,3,3,2,        
          2,3,3,7,1,3,3,1,3,3,3,7,3,3,7,3,3,1,3,1,3,1,3,1,7,2,        
          2,3,3,1,3,3,1,7,3,7,1,3,3,1,3,7,3,7,3,7,3,7,3,3,2,2,        
          2,3,7,3,3,7,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3,3,3,2,8,2,        
          2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
        ],
        "opacity": 1,
        "type": "tilelayer",
        "visible": true,
        "properties": {
          "max_players": 3,
          "collisionTiles": [1, 2, 4],
          "empty": 3,
          "balk": 1,
          "wall": 2,
          "gift": 4,
          "hospital": 5,
          "vaccineLab":6,
          "teleportGate":7,
          "isolationArea":8,
          "spawns": [
            { "col": 12,  "row": 6 },
            { "col": 14,  "row": 6 }
          ],
          "agent":{
            "virusA": {
              "number": 5,
              "speed": 1.5,
              "max": 10
            },
            "people": {
              "number": 10,
              "speed": 2,
              "infected": 5,
              "dropRange": 5
            }
          }
        }
      }
    ],
    "renderorder": "right-down",
    "tilesets": [
      {
        "name": "tiles",
        "bombtileset": "bomb_tileset",
        "firstgid": 1,
        "tilewidth": 55,
        "tileheight": 55,
        "imagewidth": 440,
        "imageheight": 55,
        "image": "fighting_tileset_5.png",
        "margin": 0,
        "properties": {},
        "spacing": 0
      }
    ],
    "properties": {},
    "orientation": "orthogonal",
    "version": 1
  }
`;