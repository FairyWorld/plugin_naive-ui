<markdown>
# 基础用法
</markdown>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      tags: ref(['教师', '程序员'])
    }
  }
})
</script>

<template>
  <n-dynamic-tags v-model:value="tags" />
</template>
