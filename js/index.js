const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

const kiemTraGiaTienKmDauTien = (loaiXe) => {
  // Thực hiện kiểm tra loại xe người dùng để trả về giá tiền phùa hợp
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};

// Hàm lấy giá tiền km từ 1 đến 19
const kiemTraGiaTienKmTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};

// Hàm lấy giá tiền km từ 19km trở lên
const kiemTraGiaTienKmTren19km = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};

// Hàm lấy giá tiền thời gian chờ
const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};

document.getElementById("tinhTien").onclick = function () {
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  // if (loaiXe == "uberCar") {
  //   let giaKmDauTien = 8000;
  // } else if (loaiXe == "uberSUV") {
  // }
  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  console.log(giaTienKmDauTien);

  let giaKM1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  console.log(giaKM1Den19);

  let giaKMTren19km = kiemTraGiaTienKmTren19km(loaiXe);
  console.log(giaKMTren19km);

  let giaTienCho = kiemTraGiaTienCho(loaiXe);
  console.log(giaTienCho);

  // TH 1 : đi 1km ==> số KM người dùng đi * giaTienKmDauTien If (soKM <=1 && soKM>0)
  // TH 2 : Đi trong khoảng từ 1 đến 19km ==> 1 * giaTienKmDauTien + (soKm - 1) * giaTienKmTu1Den19
  // TH 3 : Đi trong khoảng từ 19km trở lên ==> giaTienKmDauTien + 18 * giaTienKmTu1Den19 + (soKm - 19)* giaTienKmTu19TroLen
  // Tính giá tiền chờ ==> if (thoiGianCho > 3) ==> Math.floor((thoiGianCho - 3)/3)
  let tongTien = 0;
  let tongTienCho = 0;
  if (soKm <= 1 && soKm > 0) {
    tongTien = soKm * giaTienKmDauTien;
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaKM1Den19;
  } else {
    tongTien =
      giaTienKmDauTien + 18 * giaKM1Den19 + (soKm - 19) * giaKMTren19km;
  }
  if (thoiGianCho >= 3 && thoiGianCho < 6) {
    giaTienCho = 1 * giaTienCho;
    tongTienCho = tongTien + giaTienCho;
  } else if (thoiGianCho >= 6) {
    giaTienCho = Math.floor(thoiGianCho / 3) * giaTienCho;
    tongTienCho = tongTien + giaTienCho;
  } else {
    tongTienCho = tongTien;
  }
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTienCho.toLocaleString(
    "vi",
    { currency: "VND", style: "currency" }
  );

  // test thử chức năng của boostrap 4.0
  // document.getElementById("myModal").$("#myModal").modal("show");
};

document.getElementById("inHoaDon").onclick = function () {
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  // if (loaiXe == "uberCar") {
  //   let giaKmDauTien = 8000;
  // } else if (loaiXe == "uberSUV") {
  // }
  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  console.log(giaTienKmDauTien);

  let giaKM1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  console.log(giaKM1Den19);

  let giaKMTren19km = kiemTraGiaTienKmTren19km(loaiXe);
  console.log(giaKMTren19km);

  let giaTienCho = kiemTraGiaTienCho(loaiXe);
  console.log(giaTienCho);

  // TH 1 : đi 1km ==> số KM người dùng đi * giaTienKmDauTien If (soKM <=1 && soKM>0)
  // TH 2 : Đi trong khoảng từ 1 đến 19km ==> 1 * giaTienKmDauTien + (soKm - 1) * giaTienKmTu1Den19
  // TH 3 : Đi trong khoảng từ 19km trở lên ==> giaTienKmDauTien + 18 * giaTienKmTu1Den19 + (soKm - 19)* giaTienKmTu19TroLen
  // Tính giá tiền chờ ==> if (thoiGianCho > 3) ==> Math.floor((thoiGianCho - 3)/3)
  let tongTien = 0;
  let tongTien1 = 0;
  let tongTien2 = 0;
  let tongTien3 = 0;
  let tongTienCho = 0;
  let kmDauTien = 0;
  let duoi19KM = 0;
  let tren19KM = 0;
  if (soKm <= 1 && soKm > 0) {
    kmDauTien = soKm;
    tongTien1 = (soKm * giaTienKmDauTien) / 1000;
    tongTien = tongTien1;
  } else if (soKm > 1 && soKm <= 19) {
    kmDauTien = 1;
    duoi19KM = soKm - kmDauTien;
    tongTien1 = (1 * giaTienKmDauTien) / 1000;
    tongTien2 = ((soKm - 1) * giaKM1Den19) / 1000;
    tongTien = tongTien1 + tongTien2;
  } else {
    kmDauTien = 1;
    duoi19KM = 18;
    tren19KM = soKm - duoi19KM - kmDauTien;
    tongTien1 = (1 * giaTienKmDauTien) / 1000;
    tongTien2 = (18 * giaKM1Den19) / 1000;
    tongTien3 = ((soKm - 19) * giaKMTren19km) / 1000;
    tongTien = tongTien1 + tongTien2 + tongTien3;
  }
  if (thoiGianCho >= 3 && thoiGianCho < 6) {
    giaTienCho = (1 * giaTienCho) / 1000;
    tongTienCho = (tongTien + giaTienCho) * 1000;
  } else if (thoiGianCho >= 6) {
    giaTienCho = (Math.floor(thoiGianCho / 3) * giaTienCho) / 1000;
    tongTienCho = (tongTien + giaTienCho) * 1000;
  } else {
    giaTienCho = (1 * giaTienCho) / 1000;
    tongTienCho = tongTien * 1000;
  }
  document.getElementById("modalBody").innerHTML = `<div class="tab">
  <table border="1" style="cellpadding='5px'">
    <tr>
      <th colspan="4">CHI TIẾT HÓA ĐƠN</th>
    </tr>
    <tr>
      <th>CHI TIẾT</th>
      <th>SỬ DỤNG</th>
      <th>ĐƠN GIÁ (1000đ)</th>
      <th>THÀNH TIỀN (1000đ)</th>
    </tr>
    <tr>
      <td>KM Đầu Tiên</td>
      <td>${kmDauTien}</td>
      <td>${giaTienKmDauTien / 1000}</td>
      <td>${tongTien1.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      })}</td>
    </tr>
    <tr>
      <td>Từ 1 đến ${duoi19KM + 1}km</td>
      <td>${duoi19KM}</td>
      <td>${giaKM1Den19 / 1000}</td>
      <td>${tongTien2.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      })}</td>
    </tr>
    <tr>
      <td>Từ 19km đến ${tren19KM}km</td>
      <td>${tren19KM}</td>
      <td>${giaKMTren19km / 1000}</td>
      <td>${tongTien3.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      })}</td>
    </tr>
    <tr>
      <td>Thời gian chờ</td>
      <td>${thoiGianCho}</td>
      <td>${giaTienCho}</td>
      <td>${giaTienCho.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      })}</td>
    </tr>
    <tr>
      <th colspan="4">TỔNG TIỀN: ${tongTienCho.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      })}</th>
    </tr>
  </table>
</div>
`;
  // test thử chức năng của boostrap 4.0
  // document.getElementById("myModal").$("#myModal").modal("show");
};
