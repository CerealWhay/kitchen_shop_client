<template>
<div
  id='wrapp'
>
  <v-progress-linear
    :active="loading"
    :color="color"
    background-opacity="0"
    :indeterminate="true"
    class="ma-0"
    height="4"
    style="top: -2px;"
    id="main-loader"
  ></v-progress-linear>
</div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    loading: Boolean,
    color: String,
  },
};
</script>

<style scoped>
#wrapp {
  min-height: 3px;
}
#main-loader {
  height: 3px;
  top: 0 !important;
}
</style>
