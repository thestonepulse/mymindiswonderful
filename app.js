(() => {
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("mmw-theme");
  if (saved === "dark") document.documentElement.dataset.theme = "dark";
  toggle?.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = dark ? "" : "dark";
    localStorage.setItem("mmw-theme", dark ? "light" : "dark");
  });
})();