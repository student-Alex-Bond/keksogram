import style from './style.module.css'
const logo =  require('../../img/ha-logo.png')

export const markupFooter = ():string => {
  return `<footer class="${style['footer']} container">
  <div class="${style['center-wrapper']}">
    <section class="${style['footer-logo']}">
    Сделано в <a tabindex="1" href="https://htmlacademy.ru" class="${style['footer-logo-link']}"><img src="${logo}"
    class="${style['footer-logo-image']}"
    width="130"
    alt="HTML Academy"/>HTML
    Academy</a> &copy; 2022
  </section>
   <nav class="${style['footer-social']}">
    <a tabindex="1" href="https://twitter.com/htmlacademy_ru" 
   class="${style['footer-social-item']} ${style['footer-social-item-twitter']}" target="_blank" rel="nofollow">Twitter</a>
      <a tabindex="1" href="https://www.instagram.com/htmlacademy/" 
    class="${style['footer-social-item']} ${style['footer-social-item-instagram']}" target="_blank" rel="nofollow">Instagram</a>
     <a tabindex="1" href="https://www.facebook.com/htmlacademy" 
    class="${style['footer-social-item']} ${style['footer-social-item-facebook']}" target="_blank" rel="nofollow">Facebook</a>
      <a tabindex="1" href="https://vk.com/htmlacademy"  class="${style['footer-social-item']} ${style['footer-social-item-vk']}"
    target="_blank" rel="nofollow">VK</a>
   </nav>
  </div>
    </footer>`

}
