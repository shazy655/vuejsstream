<template>
    <div class="column">
        <div class="message" >
            <div class="message-header">
                Write Status
            </div>

            <div class="message-body">
                <form @submit.prevent="onSubmit">
                    <p class="control">
                        <textarea class="textarea" placeholder="I have Some thing to say  " v-model="form.body"></textarea>
                    </p>
                    <br>
                    <p class="control">
                        <button class="button is-primary">Submit</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-to-stream",
        data(){
           return {  form : new Form({ body:'' }) }
        },
        methods:{
            onSubmit(){
                this.form.submit('/statuses').then(status => this.$emit('completed',status))
            }
        }
    }
</script>

<style scoped>

</style>