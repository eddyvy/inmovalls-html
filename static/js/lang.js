const actualLang =
  document.getElementsByTagName('html')[0].attributes.lang.value

const langRadios = document.getElementsByName('lang')

langRadios.forEach((radio) => {
  if (radio.value === actualLang) {
    radio.checked = true
  }

  radio.addEventListener('change', (e) => {
    if (e.target.value === actualLang) {
      return
    }
    const path = window.location.pathname.split('/').at(-1)

    if (e.target.value === 'es') {
      window.location.assign(`/${path}`)
    } else {
      window.location.assign(`/${e.target.value}/${path}`)
    }
  })
})
