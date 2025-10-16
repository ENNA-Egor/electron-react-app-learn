import { ConveyorApi } from '@/lib/preload/shared'

export class AppApi extends ConveyorApi {
  getAppInfo = () => this.invoke('get-app-info')
  saveUserPreference = (key: string, value: string) => this.invoke('save-user-preference', { key, value })
}
