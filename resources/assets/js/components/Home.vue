<template>

    <div class="container">
        <div class="row">
            <div class="columns">
                <div class="column">
                    <div class="message" v-for="status in statuses">
                        <div class="message-header"><p>
                            {{ status.user.name }}
                        </p>
                            <p>  {{ status.created_at }} </p>
                        </div>

                        <div class="message-body">
                            {{ status.body }}
                        </div>
                    </div>
                </div>
                <add-to-stream @completed="statusUpdate"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
    import AddToStream from './AddToStream'
    export default {
        name: "home",
        components:{ AddToStream },
        data() {
            return {
                statuses: []
            }
        },
        created() {
                  axios.get('/statuses').then(response=> this.statuses = response.data);
        },
        methods:{
            statusUpdate(status){
                this.statuses.unshift(status);
            }
        }
    }
</script>

<style scoped>

</style>