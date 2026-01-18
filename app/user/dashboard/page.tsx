"use client";

import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const router = useRouter();

  function handleLogout() {
    fetch("/api/logout", { method: "POST" })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
