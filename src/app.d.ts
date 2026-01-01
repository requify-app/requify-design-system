// See https://kit.svelte.dev/docs/types#app
declare global {
  namespace App {
    interface Error {
      message: string;
      status: number;
      errorId: string;
    }
  }
}

export {};
