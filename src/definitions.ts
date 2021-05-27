export interface BranchDeepLinksPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
