// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return { props: { post: data } };
}

export default function WEB422({post}) {
  return (
    <>
      <h2>WEB422 Page (Component)</h2>
      <br />
      <h4>Web Programming Apps & Services</h4>

      <br></br>
      <p>Welcome to Web Programming for Apps and Services.</p>

      <hr />

      <h2>Post</h2>
      <p>Week 4 - Refactoring (Post3): Fetching API Data for Pre-Rendered HTML</p>
      <strong>User ID:</strong> {post?.userId}<br />
      <strong>Title:</strong> {post?.title}<br />
      <strong>Body:</strong> {post?.body}<br />
    </>
  );
}
