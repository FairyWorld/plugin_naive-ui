<markdown>
# 一大堆数据
</markdown>

<script lang="ts">
import { defineComponent, ref } from 'vue'

function createOptions() {
  return Array.from({ length: 42000 }).map((v, i) => ({
    label: `Option ${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i)
}

export default defineComponent({
  setup() {
    return {
      options: createOptions(),
      value: ref(createValues())
    }
  }
})
</script>

<template>
  <n-transfer v-model:value="value" :options="options" virtual-scroll />
</template>
