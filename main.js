const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const { PrivateKey, PublicKey, Signature, Aes, key_utils, config } = require('eosjs-ecc');
const { TextEncoder, TextDecoder } = require('util');
const fetch = require('node-fetch');

const EOS_HTTP_ENDPOINT = 'http://';
let privateKeys = [];// user private keys
const rpc = new JsonRpc(EOS_HTTP_ENDPOINT, { fetch });
const signatureProvider = new JsSignatureProvider(privateKeys);
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

async function main() {
try {
const result = await rpc.get_info();
console.log(result);
} catch (error) {
console.error(error);
}
}

main();