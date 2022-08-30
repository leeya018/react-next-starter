export default function Tag({}) {
  return (
    <div
      className="flex flex-col w-[344px] h-[192px] rounded-lg  shadow-2xl
    border-2 border-gray-500 p-3"
    >
      <h1 className="flex justify-center text-[#428465] font-bold text-[30px]">
        title this is something
      </h1>
      <div className="flex justify-around">
        <button className="rounded-full px-3 py-1 bg-[#E7EEF3]">react</button>
        <button className="rounded-full px-3 py-1 bg-[#E7EEF3]">mongo</button>
        <button className="rounded-full px-3 py-1 bg-[#E7EEF3]">express</button>
        <button className="rounded-full px-3 py-1 bg-[#E7EEF3]">data</button>
      </div>
    </div>
  );
}
