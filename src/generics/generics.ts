interface ShoppingCart<ItemID, Item> {
  items: Array<Item>;
  addItem(item: Item): void;
  getItemById(id: ItemID): Item | undefined;
}

interface Item {
  id: number;
  price: number;
}
const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(id) {
    return this.items.find((item) => item.id === id);
  },
};
