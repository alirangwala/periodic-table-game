import Game from "@/components/Game/Game";
import Title from "@/components/Title/Title";
// import {prisma} from "@/lib/prisma"

export default async function Home() {

  // const users = await prisma.user.findFirst()
  // console.log(users)
  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: "test@test.com"
  //   }
  // })
  return (
   <>
   <Title title = {"Periodic Tordle"} subtitle = {"Can you guess the Element?"} />
   <Game />
   </>
  );
}
