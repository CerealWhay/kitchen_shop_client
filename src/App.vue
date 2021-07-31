<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon
        color="black"
        class="mr-5"
        @click.stop="leftMenu = !leftMenu"
      ></v-app-bar-nav-icon>

      <v-form>
        <v-text-field
          hide-details
          dense
          class="text-field"
          color="button"
          type="text"
          v-model="search"
          placeholder="Enter product name"
          label="Search by name"
        ></v-text-field>
        <v-btn
          color="success"
          class="mr-4"
          @click="searchProducts"
        >
          search
        </v-btn>
      </v-form>

      <div id="header-text-wrap">
        <v-icon
          id="header-icon"
          class="mr-3"
          color="black"
        >
          mdi-shape-plus
        </v-icon>
        <span id="header-text">Kitchen Shop</span>
      </div>

      <v-progress-linear
        :active="loadingActive"
        color="button"
        indeterminate
        absolute
        bottom
      ></v-progress-linear>

    </v-app-bar>
    <v-navigation-drawer
      v-model="leftMenu"
      app
    >
      <left-menu/>
    </v-navigation-drawer>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import leftMenu from '@/components/LeftMenu.vue';
import { SEARCH_PRODUCTS, CREATE_SESSION } from '@/store/actions.type';

export default {
  name: 'App',
  components: {
    leftMenu,
  },

  data: () => ({
    leftMenu: true,
    search: '',
  }),
  mounted() {
    this.$store.dispatch(CREATE_SESSION);
  },
  computed: {
    ...mapState({
      loadingActive: (state) => state.loading.loadingActive,
    }),
  },
  methods: {
    setText() {
      const FormDataCat = new FormData();
      FormDataCat.append('text', this.search);
      return FormDataCat;
    },
    searchProducts() {
      this.$store.dispatch(SEARCH_PRODUCTS, this.setText());
    },
  },
};
</script>

<style scoped>
.text-field {
  max-width: 500px;
}
</style>
