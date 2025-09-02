// 1️⃣ 从 Hardhat 引入 ethers
const hre = require("hardhat");
const ethers = hre.ethers;

// 2️⃣ 获取第一个账户
let deployer = (await ethers.getSigners())[0];
console.log("Deployer address:", deployer.address);

// 3️⃣ 查看账户余额（以 ETH 为单位）
let balance = await deployer.getBalance();
console.log("Initial balance:", ethers.formatEther(balance), "ETH");

// 4️⃣ 给自己发送 1 ETH
let tx = await deployer.sendTransaction({
    to: deployer.address,
    value: ethers.parseEther("1")
});
await tx.wait();
console.log("Sent 1 ETH to self, tx hash:", tx.hash);

// 5️⃣ 再次查看余额
let newBalance = await deployer.getBalance();
console.log("New balance:", ethers.formatEther(newBalance), "ETH");
