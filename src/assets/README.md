Hướng dẫn tạo bản đồ thi đấu:

1) Dữ liệu sân đấu là một mảng số nguyên, lưu trữ trong trường `layers.data`.
Sân đấu có kich thước matrix (width x height) = (26 x 14).
(Chỉnh sửa các số nguyên để cài đặt sân đấu)


2) Mỗi số nguyên sẽ đại diện cho một đối tượng thể hiện trên sân đấu.
Các đối tượng trên sân đấu được lưu thông tin tại trường `layers.properties`.

Ví dụ:
    "properties": {
        "empty": 3,
        "balk": 1,
        "wall": 2,
        "gift": 4,
        "hospital": 5,
        "vaccineLab":6,
        "teleportGate":7,
        "isolationArea":8,
    }


3) Cài đặt vị trí xuất hiện của 2 nhân vật thi đấu. Chỉnh nội dung trường `properties.spawns`.
Chú ý: Phải chỉnh sửa nội dung này phù hợp với từng bản đồ. Vị trí hợp lệ là toạ độ của các ô trống "empty".

Ví dụ:
    "spawns": [
            { "col": 12,  "row": 7 },
            { "col": 14,  "row": 7 }
        ],


4) (Tuỳ chọn) Tuỳ chỉnh nhân vật phụ của game (Dân thường hoặc virus).
Chình nội dung trường `properties.agent` hoăc `properties.people`