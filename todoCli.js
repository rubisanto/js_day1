const prompt = require("prompt-sync")({ sigint: true });

let todo = [];
let current = [];
let done = [];

while (true) {
  const command = prompt("> ");

  if (command === "") continue;
  let action = command.split(" ")[0];

  const availableActions = [
    [
      "add",
      () => {
        let [_, ...rest] = command.split(" ");
        rest = rest.join(" ");
        todo.push(rest);
      },
    ],
    [
      "remove",
      () => {
        let [_, id, status] = command.split(" ");

        switch (status) {
          case "todo":
            todo.splice(parseInt(id) - 1, 1);
            break;
          case "current":
            current.splice(parseInt(id) - 1, 1);
            break;
          case "done":
            done.splice(parseInt(id) - 1, 1);
            break;
          default:
            console.log("status introuvable");
            break;
        }
      },
    ],
    [
      "move",
      () => {
        let [_, id, statusFrom, statusTo] = command.split(" ");

        let myMovedTask = "";
        switch (statusFrom) {
          case "todo":
            myMovedTask = todo[id - 1];
            todo.splice(id - 1, 1);
            break;
          case "current":
            myMovedTask = current[id - 1];
            current.splice(id - 1, 1);
            break;
          case "done":
            myMovedTask = done[id - 1];
            done.splice(id - 1, 1);
            break;
          default:
            console.log("statusFrom introuvable");
            break;
        }

        switch (statusTo) {
          case "todo":
            todo.push(myMovedTask);
            break;
          case "current":
            current.push(myMovedTask);
            break;
          case "done":
            done.push(myMovedTask);
            break;
        }
      },
    ],
    [
      "show",
      () => {
        console.log(" --------- TODO ---------");
        todo.map((task, index) => console.log(`${index + 1}. ${task}`));
        console.log("");
        console.log(" --------- CURRENT ---------");
        current.map((task, index) => console.log(`${index + 1}. ${task}`));
        console.log("");
        console.log(" --------- DONE ---------");
        done.map((task, index) => console.log(`${index + 1}. ${task}`));
        console.log("");
      },
    ],
    [
      "help",
      () => {
        console.log(`ajouter une tache    "add <tache>"`);
        console.log(`supprimer une tache  "remove <id>"`);
        console.log(`déplacer une tache   "move <id> <status>"`);
        console.log(`afficher les taches  "show"`);
        console.log(`affiche l'aide       "help"`);
        console.log(`quitter              "quit"`);
      },
    ],
    [
      "quit",
      () => {
        process.exit();
      },
    ],
  ];

  let targetAction = availableActions.filter((a) => a[0] === action);
  if (targetAction.length === 0) {
    console.log("commande introuvable");
    continue;
  }

  targetAction[0][1]();
}
