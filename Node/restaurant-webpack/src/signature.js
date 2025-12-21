export function loadSignature() {
  const signature = document.createElement("div");
  signature.classList.add("signature");
  signature.innerHTML = `
        by <a href="https://www.danielfenner.com">@danielfennerdev</a>
    `;
  return signature;
}
