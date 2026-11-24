document.querySelectorAll('[draggable="true"]').forEach(el => {
  el.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
  });
});

document.getElementById('main-stage').addEventListener('dragover', e => {
  e.preventDefault();
});

document.getElementById('main-stage').addEventListener('drop', e => {
  const id = e.dataTransfer.getData('id');
  const draggedEl = document.getElementById(id);
  e.target.appendChild(draggedEl.cloneNode(true)); // clone to allow multiple drops
});

