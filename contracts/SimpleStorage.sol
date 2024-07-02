// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    string favouriteColor;

    function setFavouriteColor(string memory _newFavouriteColor) public {
        favouriteColor = _newFavouriteColor;
    }


    function getFavouriteColor() public view returns (string memory) {
        return favouriteColor;
    }
}