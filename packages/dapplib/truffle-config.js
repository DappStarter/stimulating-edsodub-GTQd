require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin clinic broom taxi'; 
let testAccounts = [
"0xa83c4fe15eab9d6ddd5158074f2032ad04646e5417ed91ebbfde41f216fe5053",
"0x725aa4c3e4c19699f73b8766bc9dd86f6293db4d919ccc7004489459e6f4e0f3",
"0x634485945b27471acea4bd44e38de6a82ce55e3b92041496bdbe173e8c712e77",
"0x39b06301366c2925ac4352e187bfa40b535428ffd3a624ad847f551bb8e9b2d5",
"0x3e3506d72a7028cc16866d8ac235df4ec17796d535e1ad5ee4f7df7d8eda397a",
"0xd7c93e5af3849e586497dbb8c1b2cdc9ce16ac26429863c17728b686c3df08da",
"0x73b0275e1edfcf271a27f580604cd7fda99b984a35ab93582d4ff84a6af5e5c5",
"0x1a863b6f1147cf3612287da78e575bdc8e06628cae65ec6f74321d0f638dc556",
"0x5cd83e940380dbc534aee1d0d1843650830811f9fe7adc774cd0aa06b17d8344",
"0xb240ec7b22477c1bec4a171ebe2adb647a463e84bc56ee5d5e6edfccbb00f746"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

