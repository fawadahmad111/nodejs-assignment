const fs = require('fs');

var fetchNote = () => {
    try {

        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);

    } catch (error) {
       return [];
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNotes = (title, body) => {
    var notes = fetchNote()
    var note = {
        title,
        body
    };

    /* --instruction
        check if a note already exists?
        if yes; then return 'true'
        if not; save the note. and print the newly added note.
    */


//start of mg code
	//checking if note already exists
	if (getNote(note)){
		return true
	}

	notes.push(note);
	logNote(note);
//end of  my code

	saveNote(notes)
	return note;
}

var getAll = () => {
    return fetchNote();
}

var getNote = (title) => {

    /* --Instruction--
        1. Fetch the notes
        2. Filter notes get the one with title of argument
        3. Return the note if found it.
    */

//start of mg code
const notes = getAll();

for (note of notes){
        if (note.title == title)
        return note;
}
// to be more specific; returning null in case, a matching not found.
return null;

//end of  my code

};

var removeNote = (title) => {
      /* --Instruction--
        1. fetch the notes
        2. filter notes, remove the one with title of the argument.
        3. save new notes array.
      */
    

//start of mg code
const  matchingNote = getNote(title);

if(matchingNote){
	const  notes = getAll();
	const  filteredNotes = notes.filter( note => note.title!=title )

	saveNote(filteredNotes);
}

return matchingNote;

//end of  my code
};

var logNote = (note) =>{
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNotes,
    getAll,
    logNote,
    removeNote,
    getNote
}
