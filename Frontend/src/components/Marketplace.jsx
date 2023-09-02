// For all references please see references.txt file in repository
import React, { useState } from "react";
// Importing the NFT objects from products.js
import { NFTS } from "../products";
import Nft from "./Nft";
// Search icon
import { PiMagnifyingGlassBold } from "react-icons/pi";

const Marketplace = () => {
  const [sortedNFTs, setSortedNFTs] = useState(NFTS);
  const [searchTerm, setSearchTerm] = useState("");

  // Function for searching NFTs.
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function for sorting A - Z
  const sortAZ = () => {
    const sorted = [...sortedNFTs].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedNFTs(sorted);
  };

  // Function for sorting Z - A
  const sortZA = () => {
    const sorted = [...sortedNFTs].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setSortedNFTs(sorted);
  };

  // Function for sorting Cheap to Expensive
  const sortPriceCheap = () => {
    const sorted = [...sortedNFTs].sort((a, b) => a.price - b.price);
    setSortedNFTs(sorted);
  };

  // Function for sorting Expensive to Cheap
  const sortPriceExpensive = () => {
    const sorted = [...sortedNFTs].sort((a, b) => b.price - a.price);
    setSortedNFTs(sorted);
  };

  return (
    <div
      id="marketplace"
      className="h-fit w-full flex flex-col justify-center items-center bg-white gap-10 shadow-xl pb-10 rounded-xl p-10"
    >
      <h1 className="text-3xl uppercase font-semibold pt-5">Browse NFTs</h1>
      {/* Search bar, onSubmit is set to prevent the page from refreshing. */}
      <form
        action="get"
        className="w-fit h-fit flex justify-center items-center relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <PiMagnifyingGlassBold className="text-md text-[#a5a5a5] absolute left-0 ml-4" />
        {/* The searchTerm is set to the value of the input */}
        <input
          type="text"
          placeholder="Search"
          className="w-[280px] lg:w-[460px] bg-[#f2f2f2] text-sm rounded-lg shadow-lg font-semibold text-center p-3"
          value={searchTerm}
          onChange={handleSearchChange}
          maxLength={20}
        />
      </form>
      {/* The sort buttons */}
      <div className="w-fit">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pb-5 md:flex-row justify-center items-center">
          <li
            onClick={sortAZ}
            className="w-[200px] text-sm mx-5 p-3 bg-[#ebebeb] font-semibold cursor-pointer text-[#3A71FD] rounded-lg text-center hover:bg-[#3A71FD] hover:text-white duration-150"
          >
            Sort A-Z
          </li>
          <li
            onClick={sortZA}
            className="w-[200px] text-sm mx-5 p-3 bg-[#ebebeb] font-semibold text-[#3A71FD] cursor-pointer rounded-lg text-center hover:bg-[#3A71FD] hover:text-white duration-150"
          >
            Sort Z-A
          </li>
          <li
            onClick={sortPriceCheap}
            className="w-[200px] text-sm mx-5 p-3 bg-[#ebebeb] font-semibold cursor-pointer text-[#3A71FD] rounded-lg text-center hover:bg-[#3A71FD] hover:text-white duration-150"
          >
            Sort Price (Low to High)
          </li>
          <li
            onClick={sortPriceExpensive}
            className="w-[200px] text-sm mx-5 p-3 bg-[#ebebeb] font-semibold cursor-pointer text-[#3A71FD] rounded-lg text-center hover:bg-[#3A71FD] hover:text-white duration-150"
          >
            Sort Price (High to Low)
          </li>
        </ul>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-10">
        {/* The sortedNFTs array is filtered to show the appropriate NFT products */}
        {sortedNFTs
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          // Renders the appropriate products
          .map((product) => (
            <Nft data={product} />
          ))}
      </div>
    </div>
  );
};

export default Marketplace;
