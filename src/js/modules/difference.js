export default class Defference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems =  this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
            this.items = items;
        } catch(e){}
    }

    bindTriggers(container, items, counter) {
        try {
            container.querySelector('.plus').addEventListener('click', () => {
                if (counter !== items.length - 2) {
                    items[counter].style.display = 'flex';
                    counter++;
                } else {
                    items[counter].style.display = 'flex';
                    items[items.length - 1].remove();
                }
            });
        } catch(e) {}  
    }

    hideItems(items) {
        try {
            items.forEach((item, i , arr) => {
                if (i !== arr.length - 1) {
                    item.style.display = 'none';
                }
            });
        } catch(e){}
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    }

}