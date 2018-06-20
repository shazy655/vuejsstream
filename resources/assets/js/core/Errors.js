class Errors {
    constructor() {

        this.errors = {}
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(error) {
        this.errors = error;
    }

    clear(field) {
        if (field){
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    has(field) {
        if (this.errors[field]) {
            return true;
        }

        return false;
    }
}

// export  ''

export default Errors;