import events from "events";

class MessageBus extends events.EventEmitter {
  sendMessage(message) {
    this.emit("message", message);
  }
}

// usage

const bus = new MessageBus();

const messageHandler = (message) => {
  console.log(`Received message: ${message}`);
};
const timeHandler = () => {
  console.log(`Current time: ${new Date().toLocaleTimeString()}`);
};
// sub
bus.on("message", messageHandler);
bus.on("message", timeHandler);

// pub
setTimeout(() => bus.sendMessage("mezcal"), 300);
bus.sendMessage("beer");
