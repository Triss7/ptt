<template>
    <div class="input-container">
        <input
            :type="type"
            :id="name"
            :name="name"
            v-model="value"
            required
        />
        <label :for="name">{{label}}</label>
    </div>
</template>

<script>
export default {
    props: {
        name: { default: null, type: String },
        label: { default: null, type: String },
        value: { default: null, type: String },
        type: { default: 'text', type: String },
    },
}
</script>

<style lang="scss" scoped>
.input-container {
    border-bottom: 1px solid rgb(148, 148, 148);
    position: relative;
    height: 1.75vh;
}

input {
    border: none;
    position: absolute;
    top: 0;
    width: 100%;
}

input:focus {
    border: none;
    outline: 0;
}

label {
    position: absolute;
    top: 25%;
    font-size: 13px;
    left: 3%;
    transition: all 0.4s ease;
}

input:focus + label, input:valid + label {
    position: absolute;
    top: -40%;
    left: 0;
    font-size: 8px;
}
</style>