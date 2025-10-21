import { ConveyorApi } from '@/lib/preload/shared'

export class AppApi extends ConveyorApi {
  getAppInfo = () => this.invoke('get-app-info')
  saveUserPreference = (key: string, value: string) => this.invoke('save-user-preference', { key, value })
}

export class FileApi extends ConveyorApi {
  readFile = (path: string) => this.invoke('file-read', path)
  writeFile = (path: string, content: string) => this.invoke('file-write', path, content)
  deleteFile = (path: string) => this.invoke('file-delete', path)
}
