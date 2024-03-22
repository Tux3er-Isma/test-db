import { db, Comment } from 'astro:db';

export default async function() {
  await db.insert(Comment).values([
    { author: "Isma", body: 'Hope you like Astro DB!' },
    { author: "Xavi", body: 'Enjoy!'},
  ])
}