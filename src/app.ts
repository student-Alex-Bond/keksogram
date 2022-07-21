console.log('hello ghghmoto')
import {markupFilterPhotos} from './components/photos-filters'
import {markupFooter} from './components/footer'
import {markupUploadForm} from './components/upload-form'

import './style.css'
const main = document.getElementById('root')
main.insertAdjacentHTML('beforeend', markupFilterPhotos() )
main.insertAdjacentHTML('beforeend', markupUploadForm() )
main.insertAdjacentHTML('beforeend', markupFooter() )


