import GhostContentAPI from "@tryghost/content-api";

export const ghostApi = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: "v5.0",
});

export async function getProjects() {
  const posts = await ghostApi.posts.browse({
    limit: "all",
    include: "tags",
  });
  return posts;
}

export async function getProject(slug) {
  const post = await ghostApi.posts.read({
    slug,
    include: "tags",
  });
  return post;
}
