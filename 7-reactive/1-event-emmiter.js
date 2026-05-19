import events from "events";

class MessageBus extends events.EventEmitter {
  sendMessage(message) {
    this.emit("message", message);
  }
}
