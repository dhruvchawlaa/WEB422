import useSWR from 'swr';

// define the "fetcher" function.  This Can also be defined globally using SWRConfig (https://swr.vercel.app/docs/global-configuration)
const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function Post2() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher);

  return (
    <>
      <strong>User ID:</strong> {data?.userId}<br />
      <strong>Title:</strong> {data?.title}<br />
      <strong>Body:</strong> {data?.body}<br />
    </>
  );
}