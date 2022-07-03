function tinhTongSoDuongArr(arr) {
  var tong = 0;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      tong += arr[index];
    }
  }
  return tong;
}
function demSoDuongArr(arr) {
  var dem = 0;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      dem++;
    }
  }
  return dem;
}
function findMin(arr) {
  var min = arr[0];
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return min;
}
function findMinDuong(arr) {
  var min = arr[0];
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] > 0 && arr[index] < min) {
      min = arr[index];
    }
  }
  return min;
}
function findSoChanCuoiCung(arr) {
  var soChanCC = -1;
  for (var index = arr.length - 1; index >= 0; index--) {
    if (arr[index] > 0) {
      soChanCC = arr[index];
      break;
    }
  }
  return soChanCC;
}
function hoanDoiViTri(arr,viTri1,viTri2){
   var viTri1=Number(document.querySelector(viTri1).value);
   var viTri2=Number(document.querySelector(viTri2).value);
   var giaTriTam =0;
   giaTriTam=arr[viTri1];
   arr[viTri1]=arr[viTri2];
   arr[viTri2]=giaTriTam;
   return arr;
}
function sortAscending(arr){
  arr.sort(function(pt2,pt1){
    return pt2-pt1;
  })
  return arr;
}
function timSoNguyenToDauTien(arr){
   var index=-1;
   for(var i=0;i<arr.length;i++){
    var dem=0;
     for(var y=1;y<=arr[i];y++){
       if(arr[i]%y==0){
         dem++;
       }
     }
     if(dem==2){
      index=i;
      break;
     }
   }
   if(index!==-1){
      return arr[index]
   }else if(index==-1){
      return -1;
   }
}
function countInteger(arr){
   var dem=0;
   for(var i=0;i<arr.length;i++){
      if(Number.isInteger(arr[i])==true){
        dem++;
      }
   }
   return dem;
}
function soSanhSoDuongAm(arr){
  var demSoAm=0;
  var demSoDuong=0;
  var text="";
  for(var i=0;i<arr.length;i++){
    if(arr[i]>0){
      demSoDuong++;
    }else if(arr[i]<0){
      demSoAm++;
    }
  }
  if(demSoDuong==demSoAm){
     text="Số Dương = Số Âm";
  }else if(demSoDuong > demSoAm){
     text="Số Dương > Số Âm";
  }else if(demSoDuong < demSoAm){
     text="Số Dương < Số Âm";
  }
  return text;
}