import { zeaDebug } from '../helpers/zeaDebug.js'

import EventEmitter from 'events'

class BaseStreamer extends EventEmitter {
  send(data) {
    zeaDebug('Sending data: %s', data)
  }
}

export { BaseStreamer }
