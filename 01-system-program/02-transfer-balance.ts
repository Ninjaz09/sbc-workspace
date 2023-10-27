import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('34JLALC4YQBRnAHqxJCtZanuiLfy3LEvdQJrux1pEyL9gC5pK1QoqavRfX33o5QdPWNBpk7CQKREAe6eT1sWm5nq')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('DbukU9sPaNMyFKqRkuibhGG13qwXtoF5s55Y9cL246cR');
    const publicKeyTo = new Web3.PublicKey('5pqQqSHn8P3V76f7KAD86G1Ma1DDdQpW2r1QYkYRwtrx');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();