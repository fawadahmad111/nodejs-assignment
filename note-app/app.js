//requiring modules
const yargs = require('yargs');
var notes = require('./notes.js')


var argv = yargs.argv;

/* --Instruction--
    1. How can we add alias to our commands?
    2.Give the user feedback if the command is not completely provided. For example, if someone want to add a note with title only.
     3. Hint: use yarqs options.
*/


var command = argv._[0];
argv.title = argv._[1];
argv.body = argv._[2];

if(command == 'add'){
    if(argv.title && argv.body){

      note = notes.addNotes(argv.title, argv.body);
      if(note){
          console.log('Note created');
         // notes.logNote(note)
      }else{
          console.log('Note already exist.');
      }

    }else{console.log('Note title or body is not provided!')}
}

else if(command === 'read'){

    /* --Instruction--
        1. Get a title from the command line and pass to the getNote() function inside notes.js.
        2. Print the note if the note is found
        3. Print 'Note note found.'
    */

// my code start
	const note = notes.getNote(argv.title)
	if(note){
		notes.logNote(note);
	}
	else{
		console.log('Note not found!')
	}
//my code end



}
else if(command === 'list'){
    allNotes = notes.getAll();


    /* --Instruction--
        1. Print the number of notes (How many notes exist in the file.)
    */


    //my code start
    console.log(`Total Notes in the file: ${allNotes.length} \n`)
    //my code end

    allNotes.forEach((note) => {
        notes.logNote(note)
    });
}
else if(command === 'remove'){

    /* --Instruction--
        1. Get a title from the command line
        2. Pass the title to removeNote function in notes.js
        3. Give use the feedback wether or not the note was removed.
    */

//my code start

	const title = argv.title;
	if (notes.removeNote(title)){
		console.log('Note successfully deleted!')
	}else{
		console.log(`Didn't found a note with ${title} title!`)
	}
//my code end


}
else{
    console.log('command is not recognized.')
}

