const root = document.getElementById("articleRoot");
const id = new URLSearchParams(location.search).get("id") || "forest";
const item = knowledge.find(x=>x.id===id) || knowledge[0];
const article = articleContent[item.id];

const related = knowledge.filter(x=>x.id!==item.id && (x.category===item.category || x.tags.some(t=>item.tags.includes(t)))).slice(0,3);

root.innerHTML = `
<div class="reading-progress"><span id="progressBar"></span></div>
<article class="article-page">
  <div class="article-topline"><a href="explore.html">← Explore</a><span>${item.category}</span><span>${item.time} read</span></div>
  <header class="article-header"><p class="eyebrow">${item.category} · ${item.evidence}</p><h1>${item.title}</h1><p class="article-subtitle">${article.subtitle}</p><div class="article-byline">By ${article.author} · ${item.date}</div></header>
  <div class="article-hero ${article.hero}"><span>field archive / ${item.id}</span></div>
  <div class="article-layout">
    <aside class="toc"><p class="eyebrow">On this page</p>${article.sections.map((s,i)=>`<a href="#section-${i}">${s[0]}</a>`).join("")}</aside>
    <div class="article-body">
      <p class="lead">${item.description}</p>
      ${article.sections.map((s,i)=>`<section id="section-${i}"><h2>${s[0]}</h2><p>${s[1]}</p>${i===1?`<blockquote>“The interesting thing is rarely only the thing itself. It is what the thing is connected to.”</blockquote>`:""}</section>`).join("")}
      <section class="knowledge-labels"><h3>Knowledge status</h3><div class="status-row"><span>● ${item.evidence}</span><span>● Interpretation is labelled separately</span><span>● Sources should be added before publication</span></div></section>
      <section class="sources"><h2>Sources & further reading</h2><p class="source-note">This prototype deliberately does not invent citations. Add primary papers, books, museum collections, universities or archives here before publishing factual claims.</p><ol><li>Primary research / academic source — add citation</li><li>Book or institutional reference — add citation</li><li>Archive, museum or university resource — add citation</li></ol></section>
    </div>
  </div>
</article>
<section class="continue"><p class="eyebrow">Where should you wander next?</p><h2>Continue exploring.</h2><div class="article-grid">${related.map(x=>`<a class="article-card" href="article.html?id=${x.id}"><div class="article-image ${x.image}"><span>${x.category}</span></div><div class="article-meta">${x.time} · ${x.evidence}</div><h3>${x.title}</h3><p>${x.description}</p></a>`).join("")}</div></section>`;

const bar = document.getElementById("progressBar");
window.addEventListener("scroll",()=>{ const max=document.documentElement.scrollHeight-innerHeight; bar.style.width=`${Math.min(100, Math.max(0, scrollY/max*100))}%`; });