// Global window typings shared across the app

declare global {
  interface Window {
    scrollToTarget?: (targetId: string) => void;
  }
}

export {};
