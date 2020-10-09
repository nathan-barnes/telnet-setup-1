import { Session } from '@zeainc/zea-collab'

class ZeaCollabBridge {
  constructor(streamer, roomId) {
    this.streamer = streamer
    this.roomId = roomId
  }

  async start() {
    await this.streamer.connect()

    const res = await this.streamer.send('uptime')

    console.log('Response:', res)

    this.streamer.on('data', (data) => {
      // zeaDebug('Data:\n%s', data)
    })
  }
}

export { ZeaCollabBridge }
