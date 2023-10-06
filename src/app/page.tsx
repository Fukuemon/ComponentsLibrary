import { Sample } from "./Sample";

const user = {
  name: "John Doe",
};

export default function Home() {
  return (
    <div>
      <Sample user={user} />
    </div>
  );
}
