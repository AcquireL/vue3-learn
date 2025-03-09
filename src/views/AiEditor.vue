<template>
  <div>
    <h1>AiEditor is an Open Source Rich Text Editor Designed for AI.</h1>
  </div>
  <div ref="divRef" style="height: 600px"/>
</template>

<script lang="ts">
import {AiEditor} from "aieditor";
import "aieditor/dist/style.css"

export default {
  mounted() {
    new AiEditor({
      element: this.$refs.divRef as Element,
      placeholder: "Click to Input Content...",
      content: 'AiEditor is an Open Source Rich Text Editor Designed for AI.  ',
    })
  }
}
</script>