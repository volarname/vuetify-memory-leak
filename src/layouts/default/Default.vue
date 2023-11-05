<template>
  <v-app>
    <default-bar/>

    <default-view/>

    <v-container>
    <v-row>
      <v-col cols="8">
        <span v-if="running">duration {{remainingTime}}s</span>
        <v-text-field v-model.number="times" type="number"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn @click.stop="onClick">auto mount & unmount</v-btn>
      </v-col>
    </v-row>
    </v-container>

  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import {computed, ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()

const times = ref(20)
const running = ref(false)
const timeBetweenClicksFirst = 150
const timeBetweenClicksSecond = 50
const numRepeats = ref(times.value)

const button1 = ref(null)
const button2 = ref(null)


const onClick = () => {
  running.value = true
  router.push({name: 'Home'})
  setTimeout(clickFirstElement, 50);
}

function clickFirstElement() {
  if (!button1.value) {
    button1.value = document.getElementById('btn-a')
  }
  button1.value.click();
  setTimeout(clickSecondElement, timeBetweenClicksFirst);
}

function reset() {
  numRepeats.value = times.value
  running.value = false
}

function clickSecondElement() {
  if (!button2.value) {
    button2.value = document.getElementById('btn-c')
  }
  button2.value.click();

  if (numRepeats.value > 0) {
    numRepeats.value--
    setTimeout(clickFirstElement, timeBetweenClicksSecond)
  } else {
    reset()
  }
}

const remainingTime = computed(() => {
  return (numRepeats.value * (timeBetweenClicksFirst + timeBetweenClicksSecond)) / 1000;
});
</script>
