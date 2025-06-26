// Use browser.storage.sync for cross-browser extension sync storage

declare const browser: any;

export function getSyncStorage<T = any>(key: string): Promise<T | undefined> {
  return browser.storage.sync.get(key).then((result: Record<string, T>) => result[key]);
}

export function setSyncStorage<T = any>(key: string, value: T): Promise<void> {
  return browser.storage.sync.set({ [key]: value });
}
