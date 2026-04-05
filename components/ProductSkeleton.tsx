export default function ProductSkeleton() {
  return (
    <div className="p-4 border rounded-xl animate-pulse bg-white dark:bg-zinc-900">
      
      <div className="h-40 bg-gray-300 dark:bg-zinc-700 rounded mb-4"></div>

      <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-1/2"></div>

    </div>
  );
}