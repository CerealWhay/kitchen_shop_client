<template>
  <v-layout column>
    <v-list dense>

      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(section, i) in sections"
          :key="i"
          :to="section.link"
          replace
        >
          <v-list-item-icon>
            <v-icon v-text="section.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="section.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <v-divider class="mb-5"></v-divider>
    </v-list>
  </v-layout>
</template>

<script>
/* eslint-disable camelcase */

export default {
  name: 'leftMenu',
  computed: {
  },
  data: () => ({
    selectedItem: 1,
    sections: [
      { text: 'Home', icon: 'mdi-home', link: '/' },
      { text: 'Profile', icon: 'mdi-home', link: '/profile' },
      { text: 'About', icon: 'mdi-home', link: '/about' },
      { text: 'Auth', icon: 'mdi-format-list-bulleted-square', link: '/auth' },
      { text: 'Register', icon: 'mdi-format-list-bulleted-square', link: '/register' },
      { text: 'All products', icon: 'mdi-format-list-bulleted-square', link: '/all-products' },
      { text: 'Cart', icon: 'mdi-home', link: '/cart' },
    ],
  }),
  methods: {

  },
};
</script>

<style scoped>
  #fullname-text{
    font-size: .96em;
    font-weight: 500;
    width: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  #roles-wrap {
    font-size: 0.79em;
  }
  #exit {
    margin-top: auto;
  }
</style>
