(function () {
  const d = document.createElement("link").relList;
  if (d && d.supports && d.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = i(e);
    fetch(e.href, o);
  }
})();
let r = [];
function a(t, d) {
  const i = crypto.randomUUID();
  r.push({ id: i, title: t, date: d }), console.log(r);
}
function u(t) {
  r = r.filter((d) => d.id !== t);
}
function c(t) {
  r.length === 0
    ? (t.innerText = "No todos yet")
    : ((t.innerHTML = r
        .map(
          (i) => `<div class="todo-item-container">
      <div class="todo-item" data-id="${i.id}">${i.title}</div> 
       <div class="todo-item-date">${i.date}</div>
       <div class="remove-todo" data-id="${i.id}">x</div>
       </div>`
        )
        .join("")),
      t.querySelectorAll(".remove-todo").forEach((i) => {
        i.addEventListener("click", (n) => {
          u(n.target.dataset.id), c(t);
        });
      }));
}
document.querySelector("#app").innerHTML = `
  <div class="signature">
      by <a href="https://www.danielfenner.com">@danielfennerdev</a>
    </div>
    <div class="container">
    <div class="add-todo-container">
    <label for="title">Title:</label>
          <input type="text" id="title" name="title" required />
          <label for="date">Date:</label>
          <input type="date" id="date" name="date" required />
    <button class="add-todo-button" ype="submit">Add Todo</button>
    </div>
    <div class="todo-list">
    
    </div>
    </div>
`;
const f = document.querySelector(".add-todo-button");
f.addEventListener("click", () => {
  const t = document.querySelector("#title").value,
    d = document.querySelector("#date").value;
  a(t, d), c(l);
});
const l = document.querySelector(".todo-list");
c(l);
