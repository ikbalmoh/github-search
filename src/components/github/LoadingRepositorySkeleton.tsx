type Props = {
  count?: number;
};

export default function LoadingRepositorySkeleton({ count = 5 }: Props) {
  return (
    <div className="py-3 bg-gradient-to-b from-slate-50 to-white">
      {Array.from({ length: count }, (_, idx) => (
        <div
          key={idx}
          className="mx-3 my-2 p-3 outline-none flex flex-col intro-y bg-white rounded-lg"
        >
          <div className="flex items-center justify-between">
            <div className="w-1/4 h-5 rounded-lg bg-gradient-to-r from-slate-200 to-slate-100"></div>
            <div className="w-16 h-3 rounded-md bg-gradient-to-r from-slate-200 to-slate-100"></div>
          </div>
          <div className="mt-2 h-5 w-10/12 rounded-lg bg-gradient-to-r from-slate-200 to-slate-100"></div>
        </div>
      ))}
    </div>
  );
}
