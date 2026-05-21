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
const metaHandler = (message) => {
  console.log(
    `Message length: ${message.length}, id: ${Math.random().toString(36).slice(2, 8)}`,
  );
};
// sub
bus.on("message", messageHandler);
bus.on("message", timeHandler);
bus.on("message", metaHandler);

// pub
setTimeout(() => bus.sendMessage("mezcal"), 300);
bus.sendMessage("beer");

//unsub
bus.off("message", timeHandler);

bus.sendMessage("whiskey");
