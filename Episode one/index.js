const { Client, MessageEmbed } = require("discord.js"); // Require the required classes
const client = new Client();

client.on("ready", () => {
  console.log(`${client.user.username} just went online!`); // Logs the name of the client saying it's online when the ready event get's "emitted"
  client.user.setPresence({
    activity: {
      name: "a tutorial about discord.js!",
      type: "WATCHING", // Can be: "PLAYING", "STREAMING", "LISTENING" or WATCHING of course!
    },
    status: "online", // Can be: "dnd", "invisible" (offline), "idle" or "online"
  });
});
// Listen for the message event, this block of code will run the the client "emits" the event, in easier words, it runs when a message gets sent!
client.on("message", (message) => {
  // The (message) argument can be named anything you'd like, but I would recommend keeping it to subject, but some recommended options: (msg), (message), (m)
  if (message.content.toUpperCase() === "?PING") {
    // Be sure to always set the string characters to uppercase, else this would always return false.
    message.reply("Pong!"); // @YouUsername, Pong!
    message.channel.send("Pong!"); // Pong!
  }
  if (message.content.toUpperCase() === "?ABOUT") {
    const embed = new MessageEmbed() // Initiate a MessageEmbed class, giving you access to methods like setTitle, addField etc
      .setTitle("About")
      .setDescription("Here is some useful information about me!")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Commands", "Ping\nAbout") // \n will switch line, so About will be one line under Ping
      .addField("Prefix", "?") // Prefix is the name, and ? is the value of this field, good to keep in mind!
      .addField("Created at", client.user.createdAt) // client#user#createdAt returns a date object, so you can modify it easily, see more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
      .setColor("RED"); // Color can be either hex, rgb (array) or the deafult colors, see them here: https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable
    message.channel.send(embed); // send the embed to the channel
  }
});

client.login("Your token goes here"); // find your token  at https://discord.com/developers/applications under an application -> Bot -> Token
