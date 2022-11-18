import { client } from "../../lib/client";

export async function loadPosts(start, end) {
  const query = `{
    'posts': *[_type == 'post'] | order(publishedAt desc) [${start}...${end}] {_id, publishedAt, title, slug, body, description, image},
    'total': count(*[_type == 'post'])
}`;
  const { posts, total } = await client.fetch(query);
  return {
    posts,
    total,
  };
}

export default async function posts(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({
      error: "Data invalid",
    });
  }

  const { posts, total } = await loadPosts(start, end);
  res.status(200).json({
    posts,
    total,
  });
}
