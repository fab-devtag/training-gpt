// LoginForm.tsx
import { useState, FormEvent, ChangeEvent } from "react";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Tous les champs sont requis");
      return;
    }

    if (!email.includes("@")) {
      setError("Email invalide");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await onSubmit(email, password);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          disabled={loading}
        />
      </div>

      {error && <div role="alert">{error}</div>}

      <button type="submit" disabled={loading}>
        {loading ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
}
