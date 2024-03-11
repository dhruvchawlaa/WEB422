import useSWR from "swr";

// define the "fetcher" function.
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Post2() {
  const { data:users, error } = useSWR("https://reqres.in/api/users?page=1", fetcher);

  // Check if data is still being fetched
  if (!users && !error) {
    return <p>Loading...</p>;
  }

  // Check if there's an error during fetching
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr key={user.id}>
              <td>{user?.id}</td>
              <td>{user?.first_name} {user?.last_name }</td>
              <td>{user?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
