import { getDefaultClient } from "connectkit";
import { createClient } from "wagmi";
import { avalanche } from "wagmi/chains";

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: "Personal Liquidity Book",
    chains: [avalanche],
  })
);
