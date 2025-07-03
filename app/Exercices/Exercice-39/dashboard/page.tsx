"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/Exercices/Exercice-39/login");
    }
  }, [session, router]);

  if (status === "loading") {
    return <p>Chargement...</p>;
  }
  return (
    <div>
      <h1>Le dashboard</h1>
      <span>{session?.user?.email}</span>
      <button
        onClick={() => signOut({ callbackUrl: "/Exercices/Exercice-39/login" })}
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
