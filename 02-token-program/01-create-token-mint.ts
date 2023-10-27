

import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("5pqQqSHn8P3V76f7KAD86G1Ma1DDdQpW2r1QYkYRwtrx")
const decoded = base58.decode('34JLALC4YQBRnAHqxJCtZanuiLfy3LEvdQJrux1pEyL9gC5pK1QoqavRfX33o5QdPWNBpk7CQKREAe6eT1sWm5nq')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();