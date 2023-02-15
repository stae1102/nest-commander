export const Table = {
  user: 'user',
  user_info: 'user_info',
} as const;

export type Table = (typeof Table)[keyof typeof Table];
