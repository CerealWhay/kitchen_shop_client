<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon
        color="white"
        class="mr-5"
        @click.stop="leftMenu = !leftMenu"
      ></v-app-bar-nav-icon>
      <div id="header-text-wrap">
        <v-icon
          id="header-icon"
          class="mr-3"
          color="white"
        >mdi-shape-plus</v-icon>
        <span id="header-text">Kitchen Shop</span>
      </div>
      <span class="username-header" v-if="account">
        You enter as  {{account.user.username}}
      </span>
      <div id="logout-btn-wrap" v-if="isAuthenticated">
        <v-btn
          text
          color="white"
          @click.prevent="logout"
        >
          <v-icon class="mr-1">mdi-exit-to-app</v-icon>
          <span>Sign out</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="leftMenu"
      app
    >
      <left-menu/>
    </v-navigation-drawer>
    <v-main>
      <loading
        :loading="loadingActive"
        color="primary"
      />
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import { LOGOUT } from '@/store/actions.type';
import loading from '@/components/Loading.vue';
import leftMenu from '@/components/LeftMenu.vue';

export default {
  name: 'App',
  components: {
    loading,
    leftMenu,
  },

  data: () => ({
    leftMenu: true,
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
