require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth script color grace glimpse fresh gift'; 
let testAccounts = [
"0x0287a1fffd328bd6f2d6aa4795ee6fb84e968d782ec80914c361871010f1d50a",
"0xaeb177c66554f87cc1605b46cd105a430098d201cbd0c7d6420d7a6dcad63607",
"0x27c20fa1c74a1a3b1c29f4a0f6dc51eb517802531dc0ab637abd20eba5cfbd49",
"0xdd8ae093bfb9cda8da79573575c9a29085e94ce55db4d7a03b76a61bb695a175",
"0x82a661369be6e7f5b22bebd272bdeba810aa76ef025a3bebaf6cec4d4b1c97e2",
"0x08d2000abf49a1a830dee78bd80b76729ae0183ee77f629fb5de62155629c822",
"0xb38c23e7b14836559e2e99e97e829e80d0edac836733ea842e4eb0d3cfa1edec",
"0x70720abe42df4afb2c45f8bab1cf7811077705fb68350b4cfa59b446658e408e",
"0x43d656054d6b89ec29e9c0737dd9474d3657a10b6e40db6247dca71368e8822b",
"0x3851e22ccf03f94b9a0cb3a35989c9d0b929a0644fb648c1b4d19f00baa7e94a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

