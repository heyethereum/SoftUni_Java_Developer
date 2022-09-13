function addItem() {
   let text = document.getElementById('newText').value;
   let list = document.getElementById('items');

   if(text.length == 0) {
       return;
   }
   let li = document.createElement('li');

   li.textContent = text;

   let removeA = document.createElement('a');
   let link = document.createTextNode('[Delete]');
   removeA.appendChild(link);
   removeA.href = '#';

   removeA.addEventListener('click', deleteItem);
   li.appendChild(removeA);
   list.appendChild(li);


   function deleteItem(){
       li.remove()
   }
}