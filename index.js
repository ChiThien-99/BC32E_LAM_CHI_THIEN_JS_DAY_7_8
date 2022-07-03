var arrNumber = [];
document.querySelector("#addNumber").onclick = function () {
  var number = Number(document.querySelector("#number").value);
  arrNumber.push(number);
  document.querySelector("#arrNumber").innerHTML = arrNumber;
};
// Bài tập 1:Tính tổng số dương
document.querySelector("#tinhBT1").onclick = function () {
  document.querySelector("#outputBT1").innerHTML =
    tinhTongSoDuongArr(arrNumber);
};
// Bài tập 2:Đếm có bao nhiêu số dương
document.querySelector("#tinhBT2").onclick = function () {
  document.querySelector("#outputBT2").innerHTML = demSoDuongArr(arrNumber);
};
// Bài tập 3:Tìm số nhỏ nhất
document.querySelector("#tinhBT3").onclick = function () {
  document.querySelector("#outputBT3").innerHTML = findMin(arrNumber);
};
// Bài tập 4:Tìm số dương nhỏ nhất
document.querySelector("#tinhBT4").onclick = function () {
  document.querySelector("#outputBT4").innerHTML = findMinDuong(arrNumber);
};
// Bài tập 5:Tìm số chẵn cuối cùng
document.querySelector("#tinhBT5").onclick = function () {
  document.querySelector("#outputBT5").innerHTML =
    findSoChanCuoiCung(arrNumber);
};
//Bài tập 6:Hoán đổi vị trí
document.querySelector('#tinhBT6').onclick=function(){
  document.querySelector('#outputBT6').innerHTML=hoanDoiViTri(arrNumber,'#viTri1','#viTri2');
}
//Bài tập 7:Sắp xếp tăng dần
document.querySelector('#tinhBT7').onclick=function(){
  document.querySelector('#outputBT7').innerHTML=sortAscending(arrNumber);
}
//Bài tập 8:Trả về số nguyên tố đầu tiên
document.querySelector('#tinhBT8').onclick=function(){
  document.querySelector('#outputBT8').innerHTML=timSoNguyenToDauTien(arrNumber);
}
//Bài tập 9:Đếm số nguyên
var arrSoThuc=[];
document.querySelector('#addSoThuc').onclick=function(){
  var soThuc=Number(document.querySelector('#soThuc').value);
  arrSoThuc.push(soThuc);
  document.querySelector('#mangSoThuc').innerHTML=arrSoThuc;
}
document.querySelector('#tinhBT9').onclick=function(){
  document.querySelector('#outputBT9').innerHTML=countInteger(arrSoThuc);
}
//Bài tập 10:So sánh số dương,số âm
document.querySelector('#tinhBT10').onclick=function(){
  document.querySelector('#outputBT10').innerHTML=soSanhSoDuongAm(arrNumber);
}
