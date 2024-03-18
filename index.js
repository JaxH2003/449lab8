
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://gwtstqjjjigeydyulmgu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3dHN0cWpqamlnZXlkeXVsbWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MjYwODUsImV4cCI6MjAyNjMwMjA4NX0.oMbwqpwJ1Se91m6hWkaUMZlzHzv2wzOQk_w1E5a_pZo'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')
  
  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
   }
  }
  
getBooks();
     
 