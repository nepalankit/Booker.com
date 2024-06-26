"use client";
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { useSearchParams } from "next/navigation";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px]
    w-full
    md:w-auto
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
    "
    >
      <div
        className="flex
        flex-row
        items-center
        justify-between"
      >
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          anything
        </div>
        <div className="hidden sm:block px-2">Add Guests</div>
        <div className="p-1 bg-sky-400 rounded-full text-white">
          <BiSearch size={16} />
        </div>
      </div>
    </div>
  );
};

export default Search;
