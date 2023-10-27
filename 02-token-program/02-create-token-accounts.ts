import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("5pqQqSHn8P3V76f7KAD86G1Ma1DDdQpW2r1QYkYRwtrx") // PUBKEY of person you want to create the token account

const decoded = base58.decode('34JLALC4YQBRnAHqxJCtZanuiLfy3LEvdQJrux1pEyL9gC5pK1QoqavRfX33o5QdPWNBpk7CQKREAe6eT1sWm5nq')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "7StnVC69LRHLZ9i6n3TZJwzwc8Dc16q7s1JyJPDRHtPz"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();