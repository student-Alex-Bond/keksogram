import style from './style.module.css'

export const markupPicture = (commentsCount: number, likesCount: number, url: string) => {
  let src = require(`../../${url}`)
  return ` 
    <a href="#" class="${style['picture']}">
      <img class="${style['picture-img']}" src=${src} width="182" height="182" alt="Случайная фотография">
      <span class="${style['picture-stats']}">
        <span class="${style['picture-stat']} ${style['picture-comments']}">${commentsCount}</span>
        <span class="${style['picture-stat']} ${style['picture-likes']}">${likesCount}</span>
    </span>
    </a>
 `
}
