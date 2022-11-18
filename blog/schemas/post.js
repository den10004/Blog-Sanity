export default {
  name: "post",
  title: "Post",
  type: "document",
  groups: [
    {
      name: "content",
      title: "content",
    },
    {
      name: "meta",
      title: "meta",
    },
  ],
  fields: [
    {
      name: "meta_title",
      title: "meta_title",
      type: "string",
      group: "meta",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        options: {
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
      },
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      group: "content",
      to: { type: "author" },
    },
    {
      name: "image",
      title: "image",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      group: "content",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "content",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "description",
      type: "text",
      group: "content",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      group: "content",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
