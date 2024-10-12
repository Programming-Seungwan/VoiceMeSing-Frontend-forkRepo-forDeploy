import { Skeleton } from '@components/all/Skeleton/Skeleton';

export default function CreateSongSkeleton() {
  return (
    <div className="min-h-screen grow rightMain justify-center items-center">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <Skeleton className="h-10 w-48 bg-gray-800" />

        {/* Progress Steps */}
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center ${
                  step === 1 ? 'bg-green-500' : 'bg-gray-700'
                }`}
              >
                <Skeleton className="h-4 w-4 rounded-full bg-gray-600" />
              </div>
              <Skeleton className="h-4 w-24 ml-2 bg-gray-800" />
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <Skeleton className="h-8 w-64 mx-auto bg-gray-800" />

        {/* Search Box */}
        <div className="relative">
          <Skeleton className="h-48 w-full rounded-lg bg-gray-800" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Skeleton className="h-12 w-12 rounded-full bg-gray-700" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-24 bg-gray-800" />
          <Skeleton className="h-10 w-24 bg-green-700" />
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm">
          <Skeleton className="h-4 w-48 bg-gray-800" />
          <div className="flex space-x-4">
            <Skeleton className="h-4 w-24 bg-gray-800" />
            <Skeleton className="h-4 w-24 bg-gray-800" />
            <Skeleton className="h-4 w-24 bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
