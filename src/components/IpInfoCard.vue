<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="ip-info-card">
        <p>{{ title }}</p>
        <h1>{{ value }}</h1>
    </div>
</template>

<style>
    .ip-info-card{
        flex: 1;
        padding: 2em 1.5em;
    }

    .ip-info-card p{
        margin-bottom: 1em;
        text-transform: uppercase;
        letter-spacing: 1.7px;
        color: grey;
        font-weight: 500;
        font-size: .6rem;
    }

</style>