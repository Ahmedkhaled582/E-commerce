"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoryCard({ name }: { name: any }) {
    return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl bg-indigo-500 text-white shadow-lg cursor-pointer"
    >
      <Link href={`/category/${name.name}`}>
        <h2 className="text-xl font-bold capitalize">{name.name}</h2>
      </Link>
    </motion.div>
  );
}