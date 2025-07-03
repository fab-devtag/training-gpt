"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username: login,
      password: password,
    });

    if (res?.ok) {
      router.push("/Exercices/Exercice-39/dashboard");
    } else {
      setError("Mauvais identifiant ");
    }
  };
  return (
    <div>
      <h1>Page de connexion</h1>
      <div className="space-y-2">
        <div>
          <label>Login</label>
          <input
            className="bg-white text-black"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="bg-white text-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-400 text-green-900 p-1 rounded-lg"
          onClick={handleLogin}
        >
          Se connecter
        </button>
        {error}
      </div>
    </div>
  );
};

export default LoginPage;
