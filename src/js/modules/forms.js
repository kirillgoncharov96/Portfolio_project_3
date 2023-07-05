import Requests from "../services/requests";

export default class Form extends Requests{
    constructor(form, inputs) {
        super(form, inputs)
    }

    clearInputs() {
        this.inputs.forEach(item => {
            item.value = '';
        });
        const cityInputs = document.querySelector('#city');
        cityInputs.selectedIndex = 0;
    }

    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');
    
        mailInputs.forEach(input => {
            input.addEventListener('keypress', (event) => {
                if (event.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    event.preventDefault();
                }
            });
        });
    }

    initMask() {
        let setCursorPosition = (pos, elem) => {
            elem.addEventListener('click', () => {
                elem.selectionStart = elem.selectionEnd = elem.value.length;
            });
            elem.focus();
    
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos,pos);
            } else if (elem.creatTextRange) {
                let range = elem.creatTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function creatMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;
            }
        
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
    
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }    
    
        let inputs = document.querySelectorAll('[name="phone"]');
    
        inputs.forEach(input => {
            input.addEventListener('input', creatMask);
            input.addEventListener('focus', creatMask);
            input.addEventListener('blur', creatMask);
        });
    }

    sendInput() {
        this.form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 15px;
                    font-weight: 900;
                    color: black;
                    font-family: Mark;
                `;
                item.parentNode.appendChild(statusMessage);

                statusMessage.textContent = this.message.loading;

                const formData = new FormData(item);

                this.postData(this.path, formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = this.message.success;
                })
                .catch(() => {
                    statusMessage.textContent = this.message.failure;
                })
                .finally(() => {
                    this.clearInputs();

                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
            });
        });
    }

    init() {
        this.sendInput();
        this.checkMailInputs();
        this.initMask();
    }

}