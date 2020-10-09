## Installing deps

```bash
yarn install
```

## Setting env vars

Required:

```bash
export ZEA_TELNET_HOST=127.0.0.1
export ZEA_TELNET_PORT=23
```

Optional:

```bash
export DEBUG=zea:*

export ZEA_COLLAB_ROOM=some-random-string

export ZEA_STREAMER_TYPE=mock
export ZEA_STREAMER_TYPE=telnet
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
