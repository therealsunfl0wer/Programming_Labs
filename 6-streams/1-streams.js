import stream from "stream";

const sliceLog = new stream.Transform({
  readableObjectMode: true,
  async transform(chunk, encoding, callback) {
    const lines = chunk.toString().split("\n");
    lines.forEach((line) => this.push(line));
    callback();
  },
});

// usage (assume an nginx log)
let logData = `
  192.168.1.1 - - [21/May/2026:19:15:00] "GET /index.html HTTP/1.1" 200 4523
  192.168.1.2 - - [21/May/2026:19:15:01] "POST /login HTTP/1.1" 401 231
  192.168.1.3 - - [21/May/2026:19:15:02] "GET /hidden-api HTTP/1.1" 404 152"
  192.168.1.4 - - [21/May/2026:19:15:03] "GET /server-error HTTP/1.1" 500 0"
  `;

let logStream = new stream.Readable({
  read() {
    this.push(logData);
    this.push(null); // EOF
  },
});

logStream.pipe(sliceLog).pipe(process.stdout);
