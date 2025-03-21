let thanhTao = document.getElementById("thanhTao");
    let nutTang = document.getElementById("nutTang");
    let nutGiam = document.getElementById("nutGiam");

    nutTang.onclick = function () {
      let chieuRongHienTai = thanhTao.offsetWidth;
      if (chieuRongHienTai < 300) {
        thanhTao.style.width = (chieuRongHienTai + 30) + "px";
      }
    };

    nutGiam.onclick = function () {
      let chieuRongHienTai = thanhTao.offsetWidth;
      if (chieuRongHienTai > 0) {
        thanhTao.style.width = (chieuRongHienTai - 30) + "px";
      }
    };  