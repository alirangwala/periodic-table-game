import Game from "@/components/Game/Game";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
   <>
   <Title title = {"Periodic Tordle"} subtitle = {"Can you guess the Element?"} />
   <Game />
   </>
  );
}
