/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TLD_LIST_URI: string | undefined; // 添加 VITE_ 前缀
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
