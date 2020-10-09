import { zeaDebug } from './helpers/zeaDebug.js'

import { MockStreamer } from './src/MockStreamer.js'
import { TelnetStreamer } from './src/TelnetStreamer.js'
import { ZeaCollabBridge } from './src/ZeaCollabBridge.js'

const shouldUseMock = process.env.ZEA_STREAMER_TYPE === 'mock'
const streamer = shouldUseMock
  ? new MockStreamer('./assets/mock-points.txt')
  : new TelnetStreamer()

const roomId = process.env.ZEA_COLLAB_ROOM

const zeaCollabBridge = new ZeaCollabBridge(streamer, roomId)

try {
  await zeaCollabBridge.start()
} catch (err) {
  console.error(err)
}
