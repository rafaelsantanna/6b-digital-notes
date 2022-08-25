var noteTitle = document.querySelector('#note-title');
var noteSubtitle = document.querySelector('#note-subtitle');
var noteDescription = document.querySelector('#note-description');
var notesContainer = document.querySelector('.notes');

var notes = JSON.parse(localStorage.getItem('notes'));

function loadNotes() {
  if (notes) {
    var notesContent = '';
    notes.forEach(function(note) {
      notesContent+= `
        <div class="note">
        <div>
          <h3 class="note__title">${note.title}</h3>
          <p class="note__subtitle">${note.subtitle}</p>
        </div>

        <div class="note__footer">
          <div class="note__date">
            <span class="icon-calendar"></span>
            <span class="note__day">WED 24 AUG 2022</span>
          </div>
          <a class="note__actions" href="">
            <span class="icon-more-vert" alt="more vert icon">
          </a>
        </div>
      </div>
      `
    });

    notesContainer.innerHTML += notesContent;
  }
};
loadNotes();

function loadNote(note) {
  notesContainer.innerHTML += `
    <div class="note">
    <div>
      <h3 class="note__title">${note.title}</h3>
      <p class="note__subtitle">${note.subtitle}</p>
    </div>

    <div class="note__footer">
      <div class="note__date">
        <span class="icon-calendar"></span>
        <span class="note__day">WED 24 AUG 2022</span>
      </div>
      <a class="note__actions" href="">
        <span class="icon-more-vert" alt="more vert icon">
      </a>
    </div>
  </div>
  `;
}

document.getElementById('addTask').addEventListener('click', function(e) {
  e.preventDefault();
  var form = {
    title: noteTitle.value,
    subtitle: noteSubtitle.value,
    description: noteDescription.value,
    datetime: Date.now()
  }


  if (form.title && form.subtitle && form.description) {
    localStorage.setItem('notes', JSON.stringify([...notes, form]));
    noteTitle.value = '';
    noteSubtitle.value = '';
    noteDescription.value = '';
    loadNote(form);
    alert('Success');
  } else {
    alert('Empty fields');
  }
});
