function renderList(containerId, items, type) {
  const container = document.getElementById(containerId);

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    if (type === "products") {
      card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <a class="button" href="/products/${item.slug}/">
          View Tutorials
        </a>
      `;
    }

    if (type === "plugins") {
      card.innerHTML = `
        <img src="${item.image}" style="width:100%;border-radius:8px;margin-bottom:10px;">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <a class="button" href="${item.link}" target="_blank">
          Download
        </a>
      `;
    }

    container.appendChild(card);
  });
}