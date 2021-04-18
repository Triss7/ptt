<template>
    <div class="form-container">
        <Input
            v-for="{name, label, value} in inputData"
            :key="name"
            :id="name"
            :label="label"
            :value="value"
        />
        <Button
            type="submit"
            label="Przelicz"
            color="secondary"
            @click="count"
        />
    </div>
</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';
export default {
    components: {
        Input,
        Button,
    },
    data () {
        return {
            inputData: [
                {name: 'first', label: 'Pierwszy pomiar', value: null},
                {name: 'second', label: 'Drugi pomiar', value: null},
                {name: 'third', label: 'Trzeci pomiar', value: null},
                {name: 'age', label: 'Wiek', value: null},
            ],
            result: null,
        }
    },
    methods: {
        count() {
            const sum = this.inputData
                .filter(data => data.name !== 'age')
                .reduce((s, c) => s + c.value, 0)
            const age = this.inputData.filter(d => d.name === 'age').value
            console.log('Sum', sum);
            console.log('Age', age);
            this.result = 1.1093800 - (0.0008267 * sum) + (0.0000016 * sum^2) - (0.0002574 * age)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';

.form-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 40vw;
    height: 15vh;
    padding: 2vw;
    border: 1px solid rgba(0,0,0,.4);
    box-shadow: 2px 1px 0.4em rgba(128, 128, 128, 0.6);
    background-color: whitesmoke;
}
</style>