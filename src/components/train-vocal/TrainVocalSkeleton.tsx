import { Skeleton } from '@components/all/Skeleton/Skeleton';

export default function TrainVocalSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Title Skeleton */}
        <Skeleton className="h-10 w-48 mx-auto bg-gray-800" />

        {/* Email Input Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-20 bg-gray-800" />
          <Skeleton className="h-10 w-full bg-gray-800" />
        </div>

        {/* Password Input Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-40 bg-gray-800" />
          <Skeleton className="h-10 w-full bg-gray-800" />
        </div>

        {/* Login Button Skeleton */}
        <Skeleton className="h-10 w-full bg-gray-700" />

        {/* SNS Divider Skeleton */}
        <div className="flex items-center justify-center space-x-4">
          <Skeleton className="h-px flex-grow bg-gray-800" />
          <Skeleton className="h-5 w-10 bg-gray-800" />
          <Skeleton className="h-px flex-grow bg-gray-800" />
        </div>

        {/* SNS Login Buttons Skeletons */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-full bg-gray-800" />
          <Skeleton className="h-10 w-full bg-gray-800" />
          <Skeleton className="h-10 w-full bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
