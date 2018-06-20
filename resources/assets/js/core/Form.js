import Errors from './Errors.js'

class Form {

    constructor(data) {
        this.errors = new Errors();
        console.log(this.errors)
        for (let field in data)
            this[field] = data[field];
    }

    data() {
        let data = Object.assign({}, this);
        delete  this.errors;
        return data;
    }

    reset() {
        this.name = '';
        this.description = '';
    }

    submit(url) {

        return  new Promise((resolve,reject)=>{

            axios.post(url, this.data()).
            then(response=>{

                this.onSuccess(response.data)
                resolve(response.data)
            }).catch(error =>{
                console.log(error.response.data.errors);

                this.onFail(error.response.data)
                reject(error)
            });
        })

    }

    onSuccess(data) {
        this.errors = new Errors();
        this.errors.clear();
        this.reset()
    }

    onFail(errorsVal) {
        this.errors = new Errors();
        this.errors.record(errorsVal);
    }
}

export default  Form;