<template>
  <div class="contadores">
    <app-contadores v-for="c in 5" :key="c" />
  </div>
</template>

<script>
import ComponentGlobal from './Component-Global'
export default {
  components: {
    'app-contadores': ComponentGlobal
  }

}
</script>

<style>

</style>