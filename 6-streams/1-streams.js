import stream from "stream";

const sliceLog = new stream.Transform({
  readableObjectMode: true,
  async transform(chunk, encoding, callback) {
    const lines = chunk.toString().split("\n");
    lines.forEach((line) => this.push(line));
    callback();
  },
});
