export const dataTransformer = (dbItems) => {
  return dbItems.map((dbItem) => {
    const { item, itemId, createdBy } = dbItem
    return {
      ...item,
      itemId,
      createdBy
    }
  })
}
