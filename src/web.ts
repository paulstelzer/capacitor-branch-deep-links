import { WebPlugin } from '@capacitor/core';

import type { BranchDeepLinksPlugin } from './definitions';

export class BranchDeepLinksWeb
  extends WebPlugin
  implements BranchDeepLinksPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
