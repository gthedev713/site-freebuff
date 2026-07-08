// src/pages/Auth.tsx
export default function AuthPage({ redirectAfterAuth }: { redirectAfterAuth: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Σελίδα Σύνδεσης (Auth)</h1>
      <p>Redirect: {redirectAfterAuth}</p>
    </div>
  );
}
