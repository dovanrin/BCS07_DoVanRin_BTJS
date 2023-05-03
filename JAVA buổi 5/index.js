function chaoBuoiSang () {
    console.log("Chào Buổi Chiều")

}
chaoBuoiSang();
// Định nghiaax hàm
// Cấu trúc: funtion + tên  hàm ( tham só truyền vào) {
    //các logic xử lý
// }

function tinhTongBaSo (a, b, c) {
    var tongBaSo = a + b + c;
    console.log(tongBaSo);
    return tongBaSo;
}
var tongBaSoVuaTinh = tinhTongBaSo (4, 5, 6);
console.log(tongBaSoVuaTinh);
tinhTongBaSo(5, 3, 2);
// vd1: hàm không có giá trị trả về và không có tham số
function chaoBuoiTrua () {
    console.log("Chào Buổi Trưa");
}
chaoBuoiTrua(2, 4, 5);