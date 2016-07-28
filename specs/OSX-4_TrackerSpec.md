Communication Protocol
======================

Basic message format
--------------------
**Message** structure:

| Header             | Body             |
|:-------------------|:-----------------|
| Contains meta-info | Contains payload |

**Header** structure:

| Type    | Checksum | Length  |
|:--------|:---------|:--------|
| 4 bytes | 4 bytes  | 4 bytes |

All fields use *network byte order* (big-endian).

**Checksum** field computed using *CRC32* against whole message (**header** + **body**). It provides very light error detection and communication protection.

**Length** field contains length of **body**, **header** size (12 bytes) is **not** included.

**Empty message** is a message with absent **body**. In that case, **length** header field must be 0.

Message types
-------------

- **Handshake**
  1. Client initiates connection by opening socket.
  2. When connection opened, client sends **empty message** with **type** constant *0x937E7156*.
  3. Daemon responds by sending **empty message** with **type** constant *0xBE50911E*.
  4. After this exchange, connection is established.


- **Commands**
  After connection established, client can send command at any moment to daemon. Daemon must response with empty **acknowledge message** (no payload).

- *Keyboard tracking*

    Client at any moment can send request to start keyboard tracking or to update tracking settings.
    **Type**: 0x116DEC11
    **Acknowledge type**: 0xEF279528
    **Body**:

| Start/Stop             | Time interval                |
|:-----------------------|:-----------------------------|
| 1 or 0 correspondingly | reporting interval (seconds) |
| 1 byte                 | 4 bytes                      |


- *Mouse tracking*

    Client at any moment can send request to start mouse tracking or to update tracking settings.
    **Type**: 0x28F72EDC
    **Acknowledge type**: 0x28F72EDC
    **Body**:

| Start/Stop             | Time interval                |
|:-----------------------|:-----------------------------|
| 1 or 0 correspondingly | reporting interval (seconds) |
| 1 byte                 | 4 bytes                      |


- *Other commands to be added*


- **Reports**
  After receiving client command to track, daemon will send gathered data to client periodically (according to supplied settings).

- *Keyboard reporting*

  **Type**: 0x47926BA3
  **Acknowledge type**: 0x3D93CAA5
  **Body**: contains gathered character codes, e.g. 'CAABBCDD'. List of keys to character codes mapping is to be specified separately.

- *Mouse reporting*
  **Type**: 0xCF2CC691
  **Acknowledge type**: 0x278710E8
  **Body**: contains gathered mouse events codes, e.g. 'LRLLRRS'. List of mouse events to codes mapping is to be specified separately.

Misc
----

Protocol does not require sending shutting down message:
- primary reason is that daemon is not supposed to send such shutdown message, because its responsibility of a client to decide when to run. And client can simply quit daemon if needed.
- Also, its not always possible timely provide shutdown message, e.g., daemon/client crashes, daemon/client force quit by user, etc. This means every side anyway has to be prepared that connection can be suddenly lost. In case of a daemon, if connection is lost, it simply waits for new connection request. In case of a client, its up to him to decide what to do - relaunch daemon or not.
