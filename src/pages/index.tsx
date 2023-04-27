import { BasciConnect } from "../components/ConnectWallet";
import type { NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>simple dapp</title>
                <meta name="description" content="first dapp in web3" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <BasciConnect></BasciConnect>
            </div>
        </div>
    );
};

export default Home;