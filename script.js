// 當頁面載入時檢查區塊是否進入視窗
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8; // 觸發點為視窗高度的80%

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    }

    // 初始檢查
    checkVisibility();

    // 監聽滾動事件
    window.addEventListener("scroll", checkVisibility);
});