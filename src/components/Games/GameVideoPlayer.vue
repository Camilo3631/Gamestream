<script setup>
// importamos ref y onMounted de vue
import { ref, onMounted } from 'vue';


defineProps({
  video: {
    type: String,
    required: true,
  },
})
// hacemos refencia el elemento seleccionado
const videoRef = ref(null)


onMounted(() => {
  // metodo de repdodución automático
  videoRef.value.play()
})



onMounted(() => {
  videoRef.value.play()
})

</script>

<template>
  <div class="game-video-player">
    <video controls ref="videoRef">
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.game-video-player {
  max-width: 100%;
  overflow: hidden;
}

video {
  width: 100%;
  height: auto;
}
</style>
