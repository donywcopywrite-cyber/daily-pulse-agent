import "dotenv/config";

function must(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export const env = {
  OPENAI_API_KEY: must("OPENAI_API_KEY"),
  METRICS_BASE_URL: must("METRICS_BASE_URL"),
  METRICS_API_KEY: must("METRICS_API_KEY"),
  BUBBLE_WORKFLOW_URL: must("BUBBLE_WORKFLOW_URL"),
  BUBBLE_API_TOKEN: must("BUBBLE_API_TOKEN"),
  PUBLIC_CALLER_KEY: process.env.PUBLIC_CALLER_KEY ?? "",
};
