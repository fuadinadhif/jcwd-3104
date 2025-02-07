import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function dateToCron(dateInput: Date) {
  const minutes = dateInput.getMinutes();
  const hours = dateInput.getHours();
  const dayOfMonth = dateInput.getDate();
  const month = dateInput.getMonth() + 1;
  const day = "*";

  const cronString = `${minutes} ${hours} ${dayOfMonth} ${month} ${day}`;
  return cronString;
}

export function publishPost(postId: number, publishedDate: Date) {
  const cronTime = dateToCron(publishedDate);
  const postJob = cron.schedule(cronTime, async () => {
    try {
      await prisma.post.update({
        where: { id: postId },
        data: { published: true },
      });

      console.log(`Post with id ${postId} has been published!`);

      postJob.stop();
    } catch (error) {
      console.error(error);
    }
  });
}
