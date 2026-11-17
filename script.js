"use strict";

// 自動更新頁尾年份。
const yearElement = document.getElementById("copyright-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
