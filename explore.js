const results = document.getElementById("results");
const input = document.getElementById("searchInput");
const count = document.getElementById("resultCount");
let active = new URLSearchParams(location.search).get("category") || "All";

function render() {
  const q = input.value.trim().toLowerCase();
  const filtered = knowledge.filter(item => {
    const categoryMatch = active === "All" || item.category === active;
    const text = [item.title,item.category,item.description,...item.tags].join(" ").toLowerCase();
    return categoryMatch && (!q || text.includes(q));
  });
  count.textContent = `${filtered.length} ${filtered.length === 1 ? "idea" : "ideas"}`;
  results.innerHTML = filtered.map(item => `
    <a class="article-card" href="article.html?id=${item.id}">
      <div class="article-image ${item.image}"><span>${item.category}</span></div>
      <div class="article-meta">${item.time} · ${item.evidence}</div>
      <h3>${item.title}</h3><p>${item.description}</p>
      <div class="note-tags">${item.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    </a>`).join("") || `<div class="empty-state"><h3>Nothing here yet.</h3><p>Try another question. The archive is still growing.</p></div>`;
}
document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  active = btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active", b===btn));
  render();
}));
input?.addEventListener("input", render);
document.querySelector(`.filter[data-filter="${active}"]`)?.click();
if (!document.querySelector(".filter.active")) document.querySelector(".filter[data-filter='All']").click();

const modal = document.getElementById("surprise");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseText = document.getElementById("surpriseText");
const surpriseLink = document.getElementById("surpriseLink");
document.getElementById("surpriseBtn")?.addEventListener("click", () => {
  const item = knowledge[Math.floor(Math.random()*knowledge.length)];
  surpriseTitle.textContent = item.title;
  surpriseText.textContent = item.description;
  surpriseLink.href = `article.html?id=${item.id}`;
  modal.hidden = false;
});
document.getElementById("closeSurprise")?.addEventListener("click", () => modal.hidden = true);
modal?.addEventListener("click", e => { if(e.target === modal) modal.hidden = true; });