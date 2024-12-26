// Import required modules
const fs = require("fs");
const { program } = require("commander");

// Set the name, description, and version of the program using the program object of commander module
program.name("counter").description("CLI to do file-based tasks").version("0.8.0");

// Define the count_words command
program
    .command("count_words")
    .description("Count the number of words in a file")
    .argument("<file>", "file to count the number of words")
    .action((file) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            }

            const words = data.split(" ").length;
            console.log(`You have ${words} words in this file`);
        });
    });

// Parse the command-line arguments
program.parse();
