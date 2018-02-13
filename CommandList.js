let fs = require("fs");

class CommandList {
  getList(name, description) {
    this.name = name;
    this.description = description;
    let prefix = "!";
    let command = prefix + this.name + " => " + this.description;

    fs.writeFile('command.json', command, (err) => {
      if (err) throw err;
      console.log('Le fichier à bien été enrégistré !');
    });
  }
}

const commands = new CommandList();
commands.getList("test", 'test ');
