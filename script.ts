import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "theanhit",
      password: "123123",
      fullname: "nguyen the anh",
    },
  });
  console.log("created user:", user);
}

main()
  .catch((error) => console.log(error))
  .finally(async () => await prisma.$disconnect());
