<template>
    <div class="overlay">
        <div class="center">
            <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p class="loading-text"> Loading...</p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Loader',
        methods: {},
    };
</script>

<style scoped>
    @import './Loader.scss';
</style>