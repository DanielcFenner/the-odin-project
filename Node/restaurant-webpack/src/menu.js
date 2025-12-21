export function loadMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menu.appendChild(menuTitle);

  const menuList = document.createElement("ul");
  menu.appendChild(menuList);
  const menuItems = [
    { name: "Pizza", price: 10 },
    { name: "Pasta", price: 12 },
    { name: "Salad", price: 8 },
  ];
  menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    menuList.appendChild(listItem);
  });

  return menu;
}
