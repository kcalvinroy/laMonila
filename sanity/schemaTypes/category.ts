export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Category Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'category Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category Image',
    },
  ],
}
