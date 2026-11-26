import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "I'm sorry I put your clean laundry in the recycling bin because the blue bag and the blue basket looked identical to my camera at 6 a.m.",
  "I've learned to read the label before I lift anything, so now I scan each container twice and ask you before I fold.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
