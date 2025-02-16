import Game from "@/components/Game/Game";
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
      <Game />
    </>
  );
}
