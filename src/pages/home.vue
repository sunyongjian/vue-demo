<template>
    <Hello></Hello>
</template>


<script>
import Hello from '../components/Hello'

export default {
    components: {Hello},
    data () {
        return {
            msg: 'HOME'
        }
    },
    methods: {
        getData: function () {
            this.$http.get('/get').then(
                res =>
                    console.log(res)
            )
        }
    }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
