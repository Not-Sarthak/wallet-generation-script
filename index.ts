import { createWallet } from "arweavekit/wallet";

async function generateWallet(): Promise<void> {
  try {
    const wallet = await createWallet({
      seedPhrase: false,
      environment: "mainnet",
    });
    console.log("Wallet generated successfully:", wallet);
  } catch (error) {
    console.error("Error generating wallet:", error);
  }
}

async function main() {
  await generateWallet();
}

main();
