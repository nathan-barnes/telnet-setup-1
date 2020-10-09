## Installing deps

```bash
yarn install
```

## Setting env vars

Required:

```bash
export ZEA_TELNET_HOST=127.0.0.1
export ZEA_TELNET_PORT=23
export ZEA_COLLAB_ROOM=surveying-machine
```

Optional:

```bash
export ZEA_STREAMER_TYPE=mock
export DEBUG=zea:*
```

## Running

```bash
yarn run start
```

## Examples

For telnet session with HTTP server:

```bash
GET / HTTP/1.1
```

Stream example:

https://gist.github.com/nathan-barnes/13699b66c5e60a4e3e15c57a4286e868
