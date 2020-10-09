import { Session } from '@zeainc/zea-collab'

import { zeaDebug } from './helpers/zeaDebug.js'

class ZeaCollabBridge {
  constructor(streamer, roomId) {
    this.streamer = streamer
    this.roomId = roomId
  }

  async start() {
    const socketUrl = 'https://websocket-staging.zea.live'

    const session = new Session(this.#getUserData(), socketUrl)

    session.joinRoom(this.roomId, {
      isCollisionProtected: false,
    })

    await this.streamer.connect()

    const res = await this.streamer.send('uptime')

    console.log('Response:', res)

    this.streamer.on('data', (data) => {
      session.pub('create-point', {
        point: data,
      })
    })
  }

  #getUserData() {
    const userData = {
      color: '#333333',
      family_name: 'zea',
      given_name: 'telnet client',
      id: 'zea-telnet-client',
    }

    return userData
  }
}

export { ZeaCollabBridge }
