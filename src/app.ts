import './style.css'

import {markupFilterPhotos} from './components/photos-filters'
import {markupFooter} from './components/footer'
import {markupUploadForm} from './components/upload-form'
import {markupPicture} from "./components/picture";
import { data } from './data'

const main = document.getElementById('root')
main.insertAdjacentHTML('beforeend', markupFilterPhotos() )
main.insertAdjacentHTML('beforeend', markupUploadForm() )
main.insertAdjacentHTML('beforeend', markupFooter() )

const mainContent  = document.querySelector('.js-pictures')
if(mainContent){
  let markup = data.reduce((previousValue: string, currentItem) => {
    return  previousValue + markupPicture(currentItem['comments'].length, currentItem["likes"], currentItem["url"])
  }, '')
  mainContent.insertAdjacentHTML('beforeend', markup)
}


