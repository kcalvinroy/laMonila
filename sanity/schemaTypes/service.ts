export default {
  name: 'service',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Service Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Service Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Service Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Service Image',
    },
  ],
}
