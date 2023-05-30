import React from 'react';

type Props = {
  count?: number;
};

export default function LoadingSkeleton({ count = 5 }: Props) {
  return (
    <div>
      {Array(count)
        .fill('')
        .map((_, idx) => (
          <div
            key={idx}
            className="px-5 py-3 outline-none flex items-center w-full"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 mr-5"></div>
            <div className="h-6 rounded-lg flex-1 bg-gradient-to-r from-slate-200 to-slate-100"></div>
          </div>
        ))}
    </div>
  );
}
