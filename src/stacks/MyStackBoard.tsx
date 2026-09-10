const MyStackBoard = () => {
  return (
    <div className="border border-gray-200 p-6 rounded-2xl">
      <h3 className="text-2xl font-bold text-slate-800 pb-2">Your Stack</h3>
      <div>
      <p className="text-slate-400 pb-3 text-sm">No technologies selected yet</p>
        <p className="border border-gray-300 rounded-2xl w-full py-8 flex justify-center items-center text-slate-400">
          Your stack is empty
      </p>
      </div>
    </div>
  );
};

export default MyStackBoard;