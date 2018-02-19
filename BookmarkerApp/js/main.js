const form = document.querySelector('#myForm')
const results = document.querySelector('#bookmarksResults')
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []

function saveBookmark(e){
  e.preventDefault()
  const siteName = form.querySelector('#siteName').value
  const siteUrl = form.querySelector('#siteUrl').value

  if (!validateForm(siteUrl)) return false

  let bookmark = {
    name: siteName,
    url: siteUrl
  }
  bookmarks.push(bookmark)
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

  populatePage(results, bookmarks)
  this.reset()
}

function populatePage(container, list){
  results.innerHTML = list.map((bookmark, index) => {
    return `
      <div class='well' data-index='${index}'>
        <h3>${bookmark.name}
          <a class='btn btn-default' target='_blank' href='${bookmark.url}'>Visit</a>
          <a class='btn btn-danger' href='#' data-index='${index}'>Delete</a>
        </h3>
      </div>
    `
  }).join('')
}

function deleteBookmark(e){


  // Remove the delete button parent DIV
  if (!e.target.matches('a[class="btn btn-danger"]')) return
  const btnIndex = e.target.dataset.index
  const targetedWell = document.querySelector(`div[data-index='${btnIndex}']`)
  targetedWell.remove()

  // Update bookmarks list and local storage
  bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
  bookmarks.splice(btnIndex, 1)
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

function validateForm(url){
  // validate for correct URL
  let regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
  if (!url.match(regex)){
    alert('Please fill in a valid URL')
    return false
  }
  return true
}

populatePage(results, bookmarks)
form.addEventListener('submit', saveBookmark)
results.addEventListener('click', deleteBookmark)
