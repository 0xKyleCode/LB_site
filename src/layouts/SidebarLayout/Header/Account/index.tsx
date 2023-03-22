import { ConnectKitButton } from "connectkit";
import { useAccount, useEnsName } from "wagmi";

export default function Account() {
  return (
    <p>
      <ConnectKitButton />
    </p>
  );
}
