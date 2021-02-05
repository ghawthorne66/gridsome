<template>
    <footer>
        Copywrite {{getCurrentYear}} by <a :href="href">Greg Hawthorne</a>
    </footer>
</template>

<script>
export default {
    data: () => ({
        href: 'http//google.com'
    }),
    computed: {
        getCurrentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style>
footer {
    text-align: center;
    color: #00a672;
    letter-spacing: .5px;
    padding: 20px;
}
</style>