export default class Requests {
    constructor(form, inputs) {
        this.form = document.querySelectorAll(form);
        this.inputs = document.querySelectorAll(inputs);
        this.message = {
            loading: 'Sending...',
            success: 'Thank you!We will contact you soon.',
            failure: 'Something went wrong...'
        };
        this.path = 'assets/question.php';
    }
    
    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        
        return await res.text();
 
    }
}



