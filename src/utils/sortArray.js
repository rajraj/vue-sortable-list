export const move = (items, oldIndex, newIndex) => {
  const itemsRemovedArray = [
    ...items.slice(0, oldIndex),
    ...items.slice(oldIndex + 1, items.length)
  ];

  return [
    ...itemsRemovedArray.slice(0, newIndex),
    items[oldIndex],
    ...itemsRemovedArray.slice(newIndex, itemsRemovedArray.length)
  ];
};
