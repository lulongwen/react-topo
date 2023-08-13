/**
 * @author lulongwen
 * Date: 2023-02-25 10:10
 * Description:
 */

// 主账号
export const ADMIN_ACCOUNT: string = 'ADMIN_ACCOUNT';

// 当前账号
export const CURRENT_ACCOUNT: string = 'CURRENT_ACCOUNT';

// 账户类型
export const ACCOUNT_TYPE: string = 'ACCOUNT_TYPE';

// 租户 key
export const TENANT_KEY: string = '_tenant_';

export function isDingTalk() {
  const { userAgent } = window.navigator;
  return /DingTalk/i.test(userAgent);
}

export function isDingTalkPC() {
  // @ts-ignore
  const { isDesktop, isInDingTalk } = window.DingTalkPC?.ua ?? {};
  return isDesktop && isInDingTalk;
}

export function isMobile() {
  const { userAgent } = window.navigator;
  return /mobile/i.test(userAgent);
}

/**
 * dpr 设备像素比 device pixel ratio
 * = 设备像素（分辨率）/ 设备独立像素（屏幕尺寸）
 * https://blog.csdn.net/qq_34115899/article/details/105566707
 */
export function getDpr() {
  let dpr = window.devicePixelRatio ?? 1;
  const reg = /Android[\S\s]+AppleWebkit\/?(\d{3})/i;
  const matches = window.navigator.userAgent.match(reg);

  // @ts-ignore
  if (matches && matches[1] <= 534) {
    dpr = 1;
  }
  return dpr;
}
