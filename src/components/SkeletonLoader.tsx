'use client';

import { motion } from 'framer-motion';

export default function SkeletonLoader() {
  return (
    <div className="skeleton-wrapper w-full max-w-[700px] mx-auto p-8 rounded-[24px] bg-white/5 border border-white/10">
      {/* Header/Tabs Skeleton */}
      <div className="flex gap-2 mb-8">
        <div className="h-12 flex-1 rounded-xl bg-white/10 relative overflow-hidden">
          <Shimmer />
        </div>
        <div className="h-12 flex-1 rounded-xl bg-white/5 relative overflow-hidden">
          <Shimmer />
        </div>
      </div>

      {/* Input Section Skeleton */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <div className="h-4 w-24 bg-white/10 rounded relative overflow-hidden">
            <Shimmer />
          </div>
          <div className="h-4 w-16 bg-white/10 rounded relative overflow-hidden">
            <Shimmer />
          </div>
        </div>
        <div className="h-32 w-full bg-white/5 rounded-xl border border-white/10 relative overflow-hidden">
          <Shimmer />
        </div>
      </div>

      {/* Arrow Skeleton */}
      <div className="flex justify-center my-4">
        <div className="h-8 w-8 rounded-full bg-white/10 relative overflow-hidden">
          <Shimmer />
        </div>
      </div>

      {/* Output Section Skeleton */}
      <div>
        <div className="flex justify-between mb-2">
          <div className="h-4 w-24 bg-white/10 rounded relative overflow-hidden">
            <Shimmer />
          </div>
          <div className="h-8 w-20 bg-white/10 rounded-lg relative overflow-hidden">
            <Shimmer />
          </div>
        </div>
        <div className="h-32 w-full bg-white/5 rounded-xl border border-white/10 relative overflow-hidden">
          <Shimmer />
        </div>
      </div>
    </div>
  );
}

function Shimmer() {
  return (
    <motion.div
      className="absolute inset-0 -translate-x-full"
      animate={{ translateX: ['-100%', '100%'] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
      }}
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      }}
    />
  );
}
