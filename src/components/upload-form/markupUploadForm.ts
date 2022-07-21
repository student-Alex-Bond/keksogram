import style from './style.module.css'
import bgImage from '../../img/upload-default-image.jpg'

export const markupUploadForm = () => {
  return `

<section class="${style['main-content']} js-pictures">
<h2 class="visually-hidden">Главный контент</h2>
  <form class="${style['upload-form']} container" id="upload-select-image" method="post"
      enctype="multipart/form-data"
      autocomplete="off">
  <div class="${style['upload-image']}">
    <input type="file" id="upload-file" class="${style['upload-input']}" name="filename" required>
    <label class="${style['upload-file']} ${style['upload-control']}" for="upload-file"></label>
  </div>

  <div class="${style['upload-overlay']} hidden">
    <div class="upload-effect">
      <div class="upload-effect__container">
        <fieldset class="upload-resize-controls">
          <button type="button"
                  class="upload-resize-control upload-resize-controls-button upload-resize-controls-button-dec">–
          </button><!--
          --><input type="text" class="upload-resize-control upload-resize-controls-value" value="55%" readonly title="Image Scale" name="scale"/><!--
          --><button type="button"
                  class="upload-resize-control upload-resize-controls-button upload-resize-controls-button-inc">+
          </button>
        </fieldset>

        <div class="upload-form-preview">
          <div></div>
          <img src="${bgImage}" class="effect-image-preview" alt="">
        </div>

        <fieldset class="upload-effect-controls">
          <div class="upload-effect-level">
            <div class="upload-effect-level-line">
              <div class="upload-effect-level-pin"></div>
              <div class="upload-effect-level-val"></div>
            </div>
          </div>

          <input type="radio" name="effect" id="upload-effect-none" value="none" checked>
          <label class="upload-effect-label" for="upload-effect-none">
            <div class="upload-effect-preview"></div>
            Оригинал
          </label>

          <input type="radio" name="effect" id="upload-effect-chrome" value="chrome">
          <label class="upload-effect-label upload-effect-label-chrome" for="upload-effect-chrome">
            <div class="upload-effect-preview"></div>
            Хром
          </label>

          <input type="radio" name="effect" id="upload-effect-sepia" value="sepia">
          <label class="upload-effect-label upload-effect-label-sepia" for="upload-effect-sepia">
            <div class="upload-effect-preview"></div>
            Сепия
          </label>

          <input type="radio" name="effect" id="upload-effect-marvin" value="marvin">
          <label class="upload-effect-label upload-effect-label-marvin" for="upload-effect-marvin">
            <div class="upload-effect-preview"></div>
            Марвин
          </label>

          <input type="radio" name="effect" id="upload-effect-phobos" value="phobos">
          <label class="upload-effect-label upload-effect-label-phobos" for="upload-effect-phobos">
            <div class="upload-effect-preview"></div>
            Фобос
          </label>

          <input type="radio" name="effect" id="upload-effect-heat" value="heat">
          <label class="upload-effect-label upload-effect-label-heat" for="upload-effect-heat">
            <div class="upload-effect-preview"></div>
            Зной
          </label>
        </fieldset>

        <label>
          <input class="upload-form-hashtags" name="hashtags" placeholder="#хэш-тег">
        </label>

        <label>
          <textarea class="upload-form-description" name="description" placeholder="Ваш комментарий..."></textarea>
        </label>

        <button class="upload-form-cancel" type="reset" id="upload-cancel"></button>
        <button class="upload-form-submit" type="submit" id="upload-submit">Отправить</button>
      </div>
    </div>
  </div>
   
  <div class="upload-message hidden">
    <div class="upload-message-container"></div>
  </div>
</form>   

</section>

  `
}
