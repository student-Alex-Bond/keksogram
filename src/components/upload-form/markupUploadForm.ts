import style from './style.module.css'
const bgImage  = require('../../img/upload-default-image.jpg')

export const markupUploadForm = () => {
  return `

<section class="${style['main-content']} js-pictures">
<h2 class="visually-hidden">Главный контент</h2>
  <form class="${style['upload-form']} container" id="upload-select-image" method="post"
      enctype="multipart/form-data"
      autocomplete="off">
  <div class="${style['upload-image']}">
    <input type="file" id="upload-file" class="${style['upload-input']}" name="filename" required autofocus>
    <label class="${style['upload-file']} ${style['upload-control']}" for="upload-file"></label>
  </div>

  <div class="${style['upload-overlay']} ">
    <div class="${style['upload-effect']}">
      <div class="${style['upload-effect__container']}">
        <fieldset class="${style['upload-resize-controls']}">
          <button type="button"
                  class="${style['upload-resize-control']} ${style['upload-resize-controls-button']} ${style['upload-resize-controls-button-dec']}">–
          </button><!--
          --><input type="text" class="${style['upload-resize-control']} ${style['upload-resize-controls-value']}" value="55%" readonly title="Image Scale" name="scale"/><!--
          --><button type="button"
                  class="${style['upload-resize-control']} ${style['upload-resize-controls-button']} ${style['upload-resize-controls-button-inc']}">+
          </button>
        </fieldset>

        <div class="${style['upload-form-preview']}">
          <div></div>
          <img src="${bgImage}" class="${style['effect-image-preview']}" alt="">
        </div>

        <fieldset class="${style['upload-effect-controls']}">
          <div class="${style['upload-effect-level']}">
            <div class="${style['upload-effect-level-line']}">
              <div class="${style['upload-effect-level-pin']}"></div>
              <div class="${style['upload-effect-level-val']}"></div>
            </div>
          </div>

          <input type="radio" name="effect" id="upload-effect-none" value="none" checked>
          <label class="${style['upload-effect-label']}" for="upload-effect-none">
            <div class="${style['upload-effect-preview']}"></div>
            Оригинал
          </label>

          <input type="radio" name="effect" id="upload-effect-chrome" value="chrome">
          <label class="${style['upload-effect-label']} ${style['upload-effect-label-chrome']}" for="upload-effect-chrome">
            <div class="${style['upload-effect-preview']}"></div>
            Хром
          </label>

          <input type="radio" name="effect" id="upload-effect-sepia" value="sepia">
          <label class="${style['upload-effect-label']} ${style['upload-effect-label-sepia']}" for="upload-effect-sepia">
            <div class="${style['upload-effect-preview']}"></div>
            Сепия
          </label>

          <input type="radio" name="effect" id="upload-effect-marvin" value="marvin">
          <label class="${style['upload-effect-label']} ${style['upload-effect-label-marvin']}" for="upload-effect-marvin">
            <div class="${style['upload-effect-preview']}"></div>
            Марвин
          </label>

          <input type="radio" name="effect" id="upload-effect-phobos" value="phobos">
          <label class="${style['upload-effect-label']} ${style['upload-effect-label-phobos']}" for="upload-effect-phobos">
            <div class="${style['upload-effect-preview']}"></div>
            Фобос
          </label>

          <input type="radio" name="effect" id="upload-effect-heat" value="heat">
          <label class="${style['upload-effect-label']} ${style['upload-effect-label-heat']}" for="upload-effect-heat">
            <div class="${style['upload-effect-preview']}"></div>
            Зной
          </label>
        </fieldset>

        <label>
          <input class="${style['upload-form-hashtags']}" name="hashtags" placeholder="#хэш-тег">
        </label>

        <label>
          <textarea class="${style['upload-form-description']}" name="description" placeholder="Ваш комментарий..."></textarea>
        </label>

        <button class="${style['upload-form-cancel']}" type="reset" id="upload-cancel">Отменить</button>
        <button class="${style['upload-form-submit']}" type="submit" id="upload-submit">Отправить</button>
      </div>
    </div>
  </div>
   
  <div class="${style['upload-message']} hidden">
    <div class="${style['upload-message-container']}"></div>
  </div>
</form>   

</section>

  `
}
