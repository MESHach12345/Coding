const store = new Map([
    ["T-Shirt", 20],
    ["Jeans", 30],
    ["Socks", 10],
    ["Underwear", 50]
]);

store.set("Hat", 40);
store.delete("Hat");
console.log(store.has("Hat"));
console.log(store.size);

store.forEach((value, key) => {
    console.log(`${key}: $${value}`);
})

let shoppingCart = 0;

shoppingCart += store.get("T-Shirt");
shoppingCart += store.get("Jeans");

console.log(shoppingCart);