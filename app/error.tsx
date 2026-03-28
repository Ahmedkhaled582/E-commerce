"use client";

export default function Error({ error }: any) {
  return <h1>Error: {error.message}</h1>;
}