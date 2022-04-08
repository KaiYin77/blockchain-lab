// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BeanNFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event CreatedNFT(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("NYCU Coffee Club NFT Collection", "CCNC") {}

    function mint(string memory _tokenURI) public returns (uint256) {
       uint256 newItemId = _tokenIds.current();
       _safeMint(msg.sender, newItemId);
       _setTokenURI(newItemId, _tokenURI);
       emit CreatedNFT(newItemId, _tokenURI);
       _tokenIds.increment();

       return newItemId;
    }
}