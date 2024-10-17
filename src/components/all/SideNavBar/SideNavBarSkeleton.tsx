import { Skeleton } from '../Skeleton/Skeleton';

export default function SideNavBarSkeleton() {
  return (
    <nav className="w-[300px] h-full flex flex-col justify-evenly items-center bg-backgroundNavy text-white gap-x-4 overflow-y-scroll shadow-sideNavBarShadow">
      <div className="flex justify-center">
        <Skeleton className="h-16 w-32 bg-gray-800 rounded-lg" />
      </div>

      <Skeleton className="h-10 w-full bg-gray-800 rounded" />

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 bg-gray-800" />
          <Skeleton className="h-4 w-16 bg-gray-800" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 bg-gray-800" />
          <Skeleton className="h-4 w-32 bg-gray-800" />
        </div>
        <div className="pl-8 space-y-2">
          <Skeleton className="h-4 w-24 bg-gray-800" />
          <Skeleton className="h-4 w-28 bg-gray-800" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 bg-gray-800" />
          <Skeleton className="h-4 w-24 bg-gray-800" />
        </div>
        <div className="pl-8 space-y-2">
          <Skeleton className="h-4 w-16 bg-gray-800" />
          <Skeleton className="h-4 w-12 bg-gray-800" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 bg-gray-800" />
          <Skeleton className="h-4 w-16 bg-gray-800" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 bg-gray-800" />
          <Skeleton className="h-4 w-24 bg-gray-800" />
        </div>
      </div>
    </nav>
  );
}
