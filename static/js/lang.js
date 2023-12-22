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
    const fullPath = window.location.pathname
    const path = fullPath.split('/').at(-1)

    if (
      fullPath === '/' ||
      fullPath === '/en' ||
      fullPath === '/de' ||
      fullPath === '/fr'
    ) {
      if (e.target.value === 'es') {
        window.location.assign('/')
      } else {
        window.location.assign(`/${e.target.value}`)
      }
      return
    }

    if (e.target.value === 'es') {
      window.location.assign(`/${path}`)
    } else {
      window.location.assign(`/${e.target.value}/${path}`)
    }
  })
})
