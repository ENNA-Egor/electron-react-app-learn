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
  
   'version': {
    args: z.tuple([]),
    return: z.string(),
  },


} as const

export const fileIpcSchema = {
  'file-read': {
    args: z.tuple([z.string()]),
    return: z.string(),
  },
  'file-path': {
    args: z.tuple([z.string()]),
    return: z.string(),
  },
  'file-write': {
    args: z.tuple([z.string(), z.string()]),
    return: z.void(),
  },
  'file-delete': {
    args: z.tuple([z.string()]),
    return: z.void(),
  },
}

