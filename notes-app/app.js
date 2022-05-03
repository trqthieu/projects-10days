const notesWrapper = document.querySelector('.notes__wrapper');
const btnAdd = document.querySelector('.btn__add');
const notes = JSON.parse(localStorage.getItem('notes')) || [];
function addNote() {
  notes.push({});
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes);
}
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes);
}
function modifyNote(index) {
  const item = notesWrapper.children[index];
  const textarea = item.querySelector('textarea');
  textarea.toggleAttribute('readonly');
  textarea.classList.toggle('bg-input');
  if (textarea.hasAttribute('readonly')) {
    notes[index].content = textarea.value;
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
function saveNote(index) {
  const item = notesWrapper.children[index];
  const textarea = item.querySelector('textarea');
  notes[index].content = textarea.value;
  localStorage.setItem('notes', JSON.stringify(notes));
}
function renderNotes(notes) {
  notesWrapper.innerHTML = '';
  notes.forEach((note, index) => {
    const noteItem = document.createElement('div');
    noteItem.className = 'col-sm-8 col-md-6 col-lg-4 col-note__item mb-4';
    noteItem.innerHTML = `
              <div class="note__item">
                  <div class="note__item__header bg-success p-2 d-flex justify-content-end">
                  <span onclick="modifyNote(${index})" class="btn__modify btn btn-light"><i
                          class="fa-solid fa-file-pen"></i></span>
                  <span onclick="deleteNote(${index})"  class="btn__delete btn btn-light ml-2"><i
                          class="fa-solid fa-trash"></i></span>
              </div>
              <div class="note__item__text">
                  <textarea rows="10" onchange="saveNote(${index})" readonly>${
      note.content || ''
    }</textarea>
              </div>
          </div>
          `;
    notesWrapper.appendChild(noteItem);
  });
}
renderNotes(notes);
btnAdd.addEventListener('click', addNote);
