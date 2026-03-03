type Params = {
  locale: 'en' | 'sw';
  slug: string;
};

export default async function BlogPostPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  // Placeholder content until real CMS/data is wired up
  return (
    <article className="prose dark:prose-invert">
      <h1 className="mb-2">Blog Post</h1>
      <p className="text-sm text-muted-foreground">Slug: {slug}</p>
      <hr />
      <p>
        This is a placeholder for the blog post content. Connect your data source
        and replace this page with real content rendering.
      </p>
    </article>
  );
}
