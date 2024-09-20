import FormEditor from "./(form)/FormEditor";
import { TextProvider } from "./(form)/contexts/StateContext";

export default function Home() {
  return (
<div>
<TextProvider>
  <FormEditor />
</TextProvider>

</div>
  );
}
