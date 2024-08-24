import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuBtn, menus, events) {
    this.menuButton = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menus);
    this.active = 'active';

    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;
    this.addMenuMobileEvents = this.addMenuMobileEvents.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach(event => this.menuButton.addEventListener(event, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
