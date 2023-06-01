type Props = {
  count?: number;
};

export default function LoadingUserSkeleton({ count = 5 }: Props) {
  return (
    <>
      {Array.from({ length: count }, (_, idx) => (
        <div
          key={idx}
          className="px-5 py-3 outline-none flex items-center w-full intro-y"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 mr-5"></div>
          <div className="h-6 rounded-lg flex-1 bg-gradient-to-r from-slate-200 to-slate-100"></div>
        </div>
      ))}
    </>
  );
}
