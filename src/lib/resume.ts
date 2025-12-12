import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

export type Resume = any; // we’ll tighten this once we see your schema

export function loadResume(): Resume {
  const p = path.resolve(process.cwd(), "resume.yaml");
  const raw = fs.readFileSync(p, "utf-8");
  return YAML.parse(raw);
}

