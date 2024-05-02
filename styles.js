// 當視窗發生滾動事件時，執行 scrollFunction() 函數
window.onscroll = function () { scrollFunction() };

// 定義 scrollFunction() 函數
function scrollFunction() {
  // 如果網頁在垂直方向上的滾動距離超過 20 像素，或是根元素的滾動距離超過 20 像素
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // 將 ID 為 backToTop 的元素的樣式屬性 display 設置為 block，顯示返回頂部按鈕
    document.getElementById("backToTop").style.display = "block";
  } else {
    // 否則，將 ID 為 backToTop 的元素的樣式屬性 display 設置為 none，隱藏返回頂部按鈕
    document.getElementById("backToTop").style.display = "none";
  }
}

// 當 ID 為 backToTop 的元素被點擊時，執行 topFunction() 函數
document.getElementById("backToTop").onclick = function () { topFunction() };

// 定義 topFunction() 函數
function topFunction() {
  // 將網頁在垂直方向上的滾動距離設置為 0，實現返回頂部的功能
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
