const { expect } = require("chai");
const { create } = require("ipfs-http-client");

describe("DLPProtection", function () {
    let DLPProtection;
    let dlpProtection;
    let owner;
    let addr1;
    const ipfs = create({ url: "http://localhost:5001" });

    beforeEach(async function () {
        DLPProtection = await ethers.getContractFactory("DLPProtection");
        [owner, addr1] = await ethers.getSigners();
        dlpProtection = await DLPProtection.deploy();
        await dlpProtection.deployed();
    });

    it("should grant access to a user", async function () {
        await dlpProtection.grantAccess(addr1.address);
        expect(await dlpProtection.authorizedUsers(addr1.address)).to.be.true;
    });

    it("should store and retrieve IPFS hash", async function () {
        await dlpProtection.grantAccess(addr1.address);

        const data = "Sensitive Information";
        const { path } = await ipfs.add(data);
        await dlpProtection.storeData(1, path, { from: addr1.address });

        const retrievedHash = await dlpProtection.retrieveData(1, { from: addr1.address });
        expect(retrievedHash).to.equal(path);
    });

    it("should not allow unauthorized access", async function () {
        await expect(dlpProtection.retrieveData(1)).to.be.revertedWith("Not authorized");
    });
});