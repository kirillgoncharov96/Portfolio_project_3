export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/evolve.jpg';
    }

    downloadItem(path) {
        const element = document.createElement('a');

        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        element.body.removeChild(element);
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.downloadItem(this.path);
            });
        });
    }

}