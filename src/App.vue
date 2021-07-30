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
      <span class="username-header" v-if="account">
        You enter as  {{account.username}}
      </span>
      <div id="logout-btn-wrap" v-if="isAuthenticated">
        <v-btn
          text
          color="black"
          @click.prevent="logout"
        >
          <v-icon class="mr-1">mdi-exit-to-app</v-icon>
          <span>Sign out</span>
        </v-btn>
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
import { LOGOUT } from '@/store/actions.type';
import leftMenu from '@/components/LeftMenu.vue';

export default {
  name: 'App',
  components: {
    leftMenu,
  },

  data: () => ({
    leftMenu: true,
    search: '',
  }),
  computed: {
    ...mapState({
      isAuthenticated: (state) => state.auth.isAuthenticated,
      account: (state) => state.auth.account,
      loadingActive: (state) => state.loading.loadingActive,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
        .then(() => this.$router.push({ name: 'Auth' }))
        .catch(() => this.$router.push({ name: 'Auth' }));
    },
  },
};
</script>

<style scoped>
.text-field {
  max-width: 500px;
}
</style>
