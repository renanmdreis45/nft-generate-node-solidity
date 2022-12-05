pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract EmotionalShapes is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("EmotionalShapes", "ESS") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://a659-2804-d4b-7a81-7100-bd33-c17-1d77-590c.sa.ngrok.io/api/erc721/";
    }

    function mint(address to)
        public returns (uint256)
    {
        require(_tokenIdCounter.current() < 3); 
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}