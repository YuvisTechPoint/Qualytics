export const ALL_POSTS_QUERY = `
  *[_type == "blogPost" && published == true]
  | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, publishedAt,
    "category": category->{ name, color }
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug && published == true][0] {
    _id, title, "slug": slug.current, body, excerpt, publishedAt,
    "category": category->{ name, color }
  }
`;

export const HOMEPAGE_RESOURCES_QUERY = `
  *[(_type == "blogPost" || _type == "inlineArticle") && published == true]
  | order(publishedAt desc)[0...3] {
    _id, _type, title, "slug": slug.current, excerpt, publishedAt,
    "category": category->{ name, color }
  }
`;
