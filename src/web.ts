import { WebPlugin } from '@capacitor/core';

import type {
  BranchDeepLinksPlugin, BranchLoggedOutResponse, BranchReferringParamsResponse, BranchShortUrlParams,
  BranchShortUrlResponse, BranchShowShareSheetParams,
  BranchTrackingResponse,
  BranchUrlParams,
} from './definitions';

export class BranchDeepLinksWeb extends WebPlugin implements BranchDeepLinksPlugin {

  disableTracking(options: { isEnabled: false }): Promise<BranchTrackingResponse> {
    console.log('OPTIONS', options);
    return Promise.resolve({ is_enabled: false });
  }

  generateShortUrl(options: BranchShortUrlParams): Promise<BranchShortUrlResponse> {
    console.log('OPTIONS', options);
    return Promise.resolve({ url: '' });
  }

  getStandardEvents(): Promise<{ [p: number]: string }> {
    return Promise.resolve({});
  }

  handleUrl(options: BranchUrlParams): Promise<void> {
    console.log('OPTIONS', options);
    return Promise.resolve(undefined);
  }

  logout(): Promise<BranchLoggedOutResponse> {
    return Promise.resolve({ logged_out: false });
  }

  sendBranchEvent(options: { eventName: string; metaData: { [p: string]: any } }): Promise<void> {
    console.log('OPTIONS', options);
    return Promise.resolve(undefined);
  }

  setIdentity(options: { newIdentity: string }): Promise<BranchReferringParamsResponse> {
    console.log('OPTIONS', options);
    return Promise.resolve({ referringParams: undefined });
  }

  showShareSheet(options: BranchShowShareSheetParams): Promise<void> {
    console.log('OPTIONS', options);
    return Promise.resolve(undefined);
  }
}
