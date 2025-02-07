import { User } from "@/types/user";

export default async function HomePage() {
  const response = await fetch(
    "https://vercel-deploy-backend-purwadhika.vercel.app/api/v1/users"
  );
  const users = await response.json();

  console.log(users);

  return (
    <section>
      {users.data.map((user: User) => {
        return (
          <div key={user.id} className="mb-5">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        );
      })}
    </section>
  );
}
