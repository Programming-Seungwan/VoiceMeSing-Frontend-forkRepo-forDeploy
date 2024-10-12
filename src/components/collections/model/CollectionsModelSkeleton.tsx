import { Skeleton } from '@components/all/Skeleton/Skeleton';
import RecyclingBinSVG from '@public/collections/recyclingBin.svg';
import MagnifyingGlassSVG from '@public/all/vocalNameSearchInput/magnifyingGlassSM.svg';

export default function CollectionsModelSkeleton() {
  return (
    <div className="min-h-screen grow rightMain justify-center items-center">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-12 w-48 bg-gray-800" />
          <div className="relative">
            <Skeleton className="h-12 w-64 md:w-96 bg-gray-800 rounded-full" />
            <MagnifyingGlassSVG className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
          </div>
        </div>

        {/* Grid of model cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg relative">
              <RecyclingBinSVG className="absolute top-3 right-3 text-gray-400" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-32 bg-gray-700" />
                <Skeleton className="h-4 w-48 bg-gray-700" />
                <Skeleton className="h-4 w-40 bg-gray-700" />
                <Skeleton className="h-4 w-24 bg-green-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center text-sm pt-8 border-t border-gray-800">
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
