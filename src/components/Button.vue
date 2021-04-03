<template>
    <div>
       <button
        :type="type"
        :style="style"
        @click="onClick"
    >
        {{label}}
    </button> 
    </div>
</template>

<script>
export default {
    props: {
        type: {default: 'button', type: String},
        label: {default: null, type: String},
        color: {default: null, type: String},
    },
    data() {
        return {
            style: {
                backgroundColor: this.color,
                width: '100%',
            }
        }
    },
    methods: {
        onClick() {
            this.$emit('click')
        },
    }
}
</script>

<style scoped lang="scss">
button {
    cursor: pointer;
    display: inline-block;
    border: none;
    padding: 0.5vh 1vw;
    border-radius: 1px;
}

button:focus {
    border: none;
    outline: 0;
}
</style>