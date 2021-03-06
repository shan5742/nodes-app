const chalk = require("chalk");
const yargs = require("yargs");
const figlet = require("figlet");
const notes = require("./notes.js");

console.log(
  chalk.yellow(figlet.textSync("Nodes", { horizontalLayout: "full" }))
);

// Create add yargs command.
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove yargs command.
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// Create list command.
yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: () => {
    notes.listNotes();
  },
});

// Create read yargs command.
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
