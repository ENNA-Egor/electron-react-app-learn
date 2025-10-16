import { z } from 'zod'

export const appIpcSchema = {
  // Simple method with no parameters
  'get-app-info': {
    args: z.tuple([]),
    return: z.object({
      name: z.string(),
      version: z.string(),
      platform: z.string(),
    }),
  },

  // Method with parameters
  'save-user-preference': {
    args: z.tuple([
      z.object({
        key: z.string(),
        value: z.string(),
      }),
    ]),
    return: z.boolean(),
  },
} as const
