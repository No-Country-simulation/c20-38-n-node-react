'use client';

import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ErrorPage({ error }) {
  const router = useRouter();

  useEffect(() => {
    // Redirigir automáticamente después de un tiempo si hay un error
    if (error) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-gray-700 mt-4">
        {error?.message || "An unexpected error has occurred."}
      </p>
      <Button
        color="primary"
        onClick={() => router.push('/')}
        className="mt-8"
      >
        Go to Home
      </Button>
    </div>
  );
}
