import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import abifile from "./contracts/Counter.json";

export let selectedAcount;
let contract;
let isInitialized;

export const init = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    selectedAcount = accounts[0];
    console.log("Metamask connected ", selectedAcount);

    const web3 = new Web3(provider);

    const abi = abifile.abi;
    const address = "0x49E2a47a6657CF36390F6D595Eda4989B772cBdf";

    contract = new web3.eth.Contract(abi, address);
    console.log(contract);
    isInitialized = true;
  } else {
    console.log("Can't connect metamask");

    isInitialized = false;
  }
};

export const getCount = async () => {
  if (!isInitialized) {
    await init();
  }
  selectedAcount = window.ethereum.selectedAddress;
  console.log(selectedAcount);
  const count = await contract.methods
    .getCounter()
    .call({ from: selectedAcount });

  //   console.log(count);
  //   console.log(contract);

  return count;
};

export const incriment = async () => {
  if (!isInitialized) {
    await init();
  }

  await contract.methods.incriment().send({ from: selectedAcount });
};

export const decriment = async () => {
  if (!isInitialized) {
    await init();
  }

  await contract.methods.decrimene().send({ from: selectedAcount });
};
