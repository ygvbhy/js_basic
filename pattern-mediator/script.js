class Participant {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
    this.messages = [];
  }
  send(message, to) {
    this.chatRoom.send(message, this, to);
  }

  receive(message, from) {
    this.messages.push({ message, from });
  }

  showMessage() {
    console.log(this.messages);
  }
}

class ChatRoom {
  constructor() {
    this.participants = {};
  }

  enter(participant) {
    this.participants[participant.name] = participant;
    participant.chatRoom = this;
  }

  send(message, participant, to) {
    this.participants[to.name].receive(message, participant);
  }
}

const chatRoom = new ChatRoom();
const user1 = new Participant("user1");
const user2 = new Participant("user2");
const user3 = new Participant("user3");

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);

console.log(chatRoom);
console.log(user1);

user1.send("Hello", user2);
user1.send("Hello2222", user2);

console.log(chatRoom);
