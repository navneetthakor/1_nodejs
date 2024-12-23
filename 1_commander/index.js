const { Command } = require('commander');
const program = new Command();
const fs = require('fs');

// setting CLI 
program
    .name("word_count")
    .description("Counts number of words from given path of file!")
    .version("1.0.0");
    
// sub commands 
program
    .command('greet <name>')
    .description("enter your name")
    .action((name)=>{
        console.log(`Hello, ${name}`);
    });

program
    .command('count_file_words <file_path>')
    .description("counts number words present in given path")
    .action((my_path)=>{
        const text = fs.readFileSync(my_path, 'utf-8');
        console.log(text.split(' ').length);
    })

    program.parse(process.argv);
