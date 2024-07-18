import Arweave from 'arweave';

const arweave = Arweave.init({
    host: '127.0.0.1',
    port: 1984,
    protocol: 'http'
});

async function generateWallet() {
    try {
        const key = await arweave.wallets.generate();
        const address = await arweave.wallets.jwkToAddress(key);
        
        console.log('Private Key (JWK):', JSON.stringify(key, null, 2));
        console.log('Public Address:', address);
        
        return { key, address };
    } catch (error) {
        console.error('Error generating wallet:', error);
        throw error;
    }
}

async function main() {
    await generateWallet();
}

main();