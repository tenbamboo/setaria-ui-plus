import { withInstall } from '@element-plus/utils'

import HelloWould from './src/hello-would.vue'

export const ElHelloWould = withInstall(HelloWould)
export default ElHelloWould

export * from './src/hello-would'
export type { HelloWouldInstance } from './src/instance'
