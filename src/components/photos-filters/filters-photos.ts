import style from './style.module.css'

export const markupFilterPhotos = () => {
  return `<section class="${style['img-filters']}">
    <h2 class="visually-hidden">фильтр фотографий</h2>
    <form class="${style['filters']}" action="#" method="get" autocomplete="off">
    <input type="radio" id="filter-recommend" class="${style['filters-radio']}" name="filter" value="recommend" checked>
    <label for="filter-recommend" class="${style['filters-item']}">Рекомендуемые</label>

    <input type="radio" id="filter-popular" class="${style['filters-radio']}" name="filter" value="popular">
    <label for="filter-popular" class="${style['filters-item']}">Популярные</label>

    <input type="radio" id="filter-discussed" class="${style['filters-radio']}" name="filter" value="discussed">
    <label for="filter-discussed" class="${style['filters-item']}">Обсуждаемые</label>

    <input type="radio" id="filter-random" class="${style['filters-radio']}" name="filter" value="random">
    <label for="filter-random" class="${style['filters-item']}">Случайные</label>
  </form>
</section>

`
}

