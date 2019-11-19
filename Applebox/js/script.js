let text;
const gettext = () => {
   text = document.getElementById("text").value
   if (isNaN(text) == false) {
      document.getElementById('textt').innerHTML = '<p> Количество: <a class="num">' + text + '</a></p>'
      text = parseInt(text);
   } else {
      document.getElementById('textt').innerHTML = '<p> Введите число </p>'
   }
}

function plus() {
   if (isNaN(text) == false) {
      text = text + 1
      console.log(text)
      document.getElementById('textt').innerHTML = '<p> Количество: <a class="num">' + text + '</a></p>'
      document.getElementById("text").value = text
   } else {
      document.getElementById('textt').innerHTML = '<p> Введите число </p>'
   }

}

function minus() {
   if (isNaN(text) == false) {
      text = text - 1
      console.log(text)
      document.getElementById('textt').innerHTML = '<p> Количество: <a class="num">' + text + '</a></p>'
      document.getElementById("text").value = text
   } else {
      document.getElementById('textt').innerHTML = '<p> Введите число </p>'
   }

}