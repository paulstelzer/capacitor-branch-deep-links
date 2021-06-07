# @innomobile/capacitor-branch-deep-links

Branch.io deep links

Please refer to [Branch's SDK Documentation for Capacitor](https://help.branch.io/developers-hub/docs/capacitor) for installation. You do not need to add Branch to the MainActivitcy class in Android. Remove it if you added it.

## Install

```bash
npm install @innomobile/capacitor-branch-deep-links
npx cap sync
```

Inside your project use

```ts
import {BranchDeepLinks, BranchShortUrlAnalytics} from '@innomobile/capacitor-branch-deep-links';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  
  async generateShortUrl(analytics, properties) {
    try {
      const response = await BranchDeepLinks.generateShortUrl({analytics, properties})
      return response.url
    } catch (err) {
      // do something on error
    }
  }
}

```

## API

<docgen-index>

* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`handleUrl(...)`](#handleurl)
* [`generateShortUrl(...)`](#generateshorturl)
* [`showShareSheet(...)`](#showsharesheet)
* [`getStandardEvents()`](#getstandardevents)
* [`sendBranchEvent(...)`](#sendbranchevent)
* [`disableTracking(...)`](#disabletracking)
* [`setIdentity(...)`](#setidentity)
* [`logout()`](#logout)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener(...)

```typescript
addListener(eventName: 'init', listenerFunc: (event: BranchInitEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>"init"</code>                                                                                         |
| **`listenerFunc`** | <code>(event: <a href="#branchreferringparamsresponse">BranchReferringParamsResponse</a>) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'initError', listenerFunc: (error: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>"initError"</code>             |
| **`listenerFunc`** | <code>(error: any) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### handleUrl(...)

```typescript
handleUrl(options: BranchUrlParams) => any
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#branchurlparams">BranchUrlParams</a></code> |

**Returns:** <code>any</code>

--------------------


### generateShortUrl(...)

```typescript
generateShortUrl(options: BranchShortUrlParams) => any
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#branchshorturlparams">BranchShortUrlParams</a></code> |

**Returns:** <code>any</code>

--------------------


### showShareSheet(...)

```typescript
showShareSheet(options: BranchShowShareSheetParams) => any
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#branchshowsharesheetparams">BranchShowShareSheetParams</a></code> |

**Returns:** <code>any</code>

--------------------


### getStandardEvents()

```typescript
getStandardEvents() => any
```

**Returns:** <code>any</code>

--------------------


### sendBranchEvent(...)

```typescript
sendBranchEvent(options: { eventName: string; metaData: { [key: string]: any; }; }) => any
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ eventName: string; metaData: { [key: string]: any; }; }</code> |

**Returns:** <code>any</code>

--------------------


### disableTracking(...)

```typescript
disableTracking(options: { isEnabled: false; }) => any
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ isEnabled: false; }</code> |

**Returns:** <code>any</code>

--------------------


### setIdentity(...)

```typescript
setIdentity(options: { newIdentity: string; }) => any
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ newIdentity: string; }</code> |

**Returns:** <code>any</code>

--------------------


### logout()

```typescript
logout() => any
```

**Returns:** <code>any</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |


#### BranchUrlParams

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |


#### BranchShortUrlParams

| Prop             | Type                                                                          |
| ---------------- | ----------------------------------------------------------------------------- |
| **`analytics`**  | <code><a href="#branchshorturlanalytics">BranchShortUrlAnalytics</a></code>   |
| **`properties`** | <code><a href="#branchshorturlproperties">BranchShortUrlProperties</a></code> |


#### BranchShortUrlAnalytics

| Prop           | Type                |
| -------------- | ------------------- |
| **`alias`**    | <code>string</code> |
| **`campaign`** | <code>string</code> |
| **`channel`**  | <code>string</code> |
| **`duration`** | <code>number</code> |
| **`feature`**  | <code>string</code> |
| **`stage`**    | <code>string</code> |
| **`tags`**     | <code>any</code>    |


#### BranchShortUrlProperties

| Prop                  | Type                 |
| --------------------- | -------------------- |
| **`$desktop_url`**    | <code>string</code>  |
| **`$android_url`**    | <code>string</code>  |
| **`$ios_url`**        | <code>string</code>  |
| **`$ipad_url`**       | <code>string</code>  |
| **`$match_duration`** | <code>number</code>  |
| **`custom_string`**   | <code>string</code>  |
| **`custom_integer`**  | <code>number</code>  |
| **`custom_boolean`**  | <code>boolean</code> |


#### BranchShortUrlResponse

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |


#### BranchShowShareSheetParams

| Prop            | Type                |
| --------------- | ------------------- |
| **`shareText`** | <code>string</code> |


#### BranchTrackingResponse

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`is_enabled`** | <code>boolean</code> |


#### BranchReferringParamsResponse

| Prop                  | Type                                                                    |
| --------------------- | ----------------------------------------------------------------------- |
| **`referringParams`** | <code><a href="#branchreferringparams">BranchReferringParams</a></code> |


#### BranchReferringParams

| Prop                         | Type                 |
| ---------------------------- | -------------------- |
| **`'+clicked_branch_link'`** | <code>boolean</code> |
| **`'+is_first_session'`**    | <code>boolean</code> |


#### BranchLoggedOutResponse

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`logged_out`** | <code>boolean</code> |

</docgen-api>
