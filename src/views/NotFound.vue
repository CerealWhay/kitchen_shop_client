<template>
 <v-container class="fill-height">
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        md="10"
      >
        <span
          class="err404 d-block text-center"
          >404</span>
        <span class="Oops d-block text-center">Oops, looks like you're lost...</span>
        <span class="errMistake d-block text-center">The requested page was not found!
           Most likely, there was a mistake in the link.</span>
        <span class="clickpls d-block d-block text-center">Clicking on the picture will return
           you to the main page.</span>

        <router-link class="catbox d-flex justify-center" to="/">
          <img
            src="@/assets/logo.png" alt="">
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.err404 {
  font-size: 144px;
  font-weight: 500;
  letter-spacing: -1.5px;
  line-height: 110px;
}
.Oops {
  font-size: 34px;
  letter-spacing: 0.25px;
  margin-top: 30px;
}
.errMistake {
  font-size: 30px;
  letter-spacing: 0.25px;
}
.clickpls {
  font-size: 18px;
  letter-spacing: 0.5px;
  margin-top: 30px;
}
</style>
