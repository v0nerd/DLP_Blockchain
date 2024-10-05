// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DLPProtection {
    mapping(address => bool) public authorizedUsers;
    mapping(uint256 => string) private dataHashes;

    event DataStored(uint256 indexed dataId, string ipfsHash);
    event AccessGranted(address indexed user);
    event AccessRevoked(address indexed user);

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "Not authorized");
        _;
    }

    function grantAccess(address user) external {
        authorizedUsers[user] = true;
        emit AccessGranted(user);
    }

    function revokeAccess(address user) external {
        authorizedUsers[user] = false;
        emit AccessRevoked(user);
    }

    function storeData(uint256 dataId, string calldata ipfsHash) external onlyAuthorized {
        dataHashes[dataId] = ipfsHash;
        emit DataStored(dataId, ipfsHash);
    }

    function retrieveData(uint256 dataId) external view onlyAuthorized returns (string memory) {
        return dataHashes[dataId];
    }
}