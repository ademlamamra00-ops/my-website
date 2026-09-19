// =========================================
// 🌙 الوضع الليلي
// =========================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // تحميل الوضع المحفوظ
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    // عند الضغط على الزر
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "🌙";

            localStorage.setItem("theme", "light");
        }

    });

}