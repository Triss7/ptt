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
 @import '../css/Input.scss';
 </style>