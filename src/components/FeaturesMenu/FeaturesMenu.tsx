export default function FeaturesMenu() {
  return (
    <section className="w-full flex items-center justify-center grid grid-cols-6">
      <div className="col-span-2">
        <ul className="space-y-12 m-8 w-full">
          <li className="transition-all duration-500 ease-in-out w-[75%] hover:w-full p-10 hover:bg-primary bg-black hover:text-black text-white hover:opacity-1 opacity-[75%]">
            <button className="text-4xl lowercase font-primary cursor-pointer">
              News and Updates
            </button>
          </li>
          <li className="transition-all duration-500 ease-in-out w-[75%] hover:w-full p-10 hover:bg-primary bg-black hover:text-black text-white hover:opacity-1 opacity-[75%]">
            <button className="text-4xl lowercase font-primary cursor-pointer">
              Projects
            </button>
          </li>
          <li className="transition-all duration-500 ease-in-out w-[75%] hover:w-full p-10 hover:bg-primary bg-black hover:text-black text-white hover:opacity-1 opacity-[75%]">
            <button className="text-4xl lowercase font-primary cursor-pointer">
              Studio
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-4"></div>
    </section>
  );
}
