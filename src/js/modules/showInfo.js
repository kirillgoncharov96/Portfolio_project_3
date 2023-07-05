export default class ShowInfo {
    constructor(btnsPlus) {
        this.btns = document.querySelectorAll(btnsPlus);
    }

    bindTriggers() {
            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    try {
                        if (btn.closest('.module__info-show').nextElementSibling.style.display === 'block') {
                            btn.closest('.module__info-show').nextElementSibling.style.display = 'none';
                            btn.closest('.module__info-show').nextElementSibling.classList.remove('animated', 'slideInRight')
                        } else {
                            btn.closest('.module__info-show').nextElementSibling.style.display = 'block';
                            btn.closest('.module__info-show').nextElementSibling.classList.add('animated', 'slideInRight');
                        }
                    
                    }catch(e) {}
                });
            });
       
    }

    init () {
        this.bindTriggers();
    }


}