import { useAuth } from "../hooks/auth";

export default function Home() {
  const { name, methodSignOut } = useAuth();
  return (
    <main>
      <h1>{name}</h1>
      <button onClick={methodSignOut}>Sair</button>
    </main>
  );
}
