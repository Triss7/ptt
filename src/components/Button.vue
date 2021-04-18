<template>
    <div>
       <button
        :type="type"
        :style="style"
        :class="`bg-${color}`"
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
   computed: {
       style() {
           return {
               '--width': '100%',
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

<style lang="scss">
@import '../css/globalClasses.scss';
@import '../css/variables.scss';

button {
    cursor: pointer;
    display: inline-block;
    border: none;
    padding: 0.5vh 1vw;
    border-radius: 1px;
    width: var(--width);
    color:white;
}

button:focus {
    border: none;
    outline: 0;
}

</style>