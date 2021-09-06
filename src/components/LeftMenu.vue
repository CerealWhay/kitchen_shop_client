<template>
    <v-list flat>
      <v-list-item-group
        v-model="selectedItem"
      >
        <v-list-item to="/all-products">
          <v-list-item-content>
            <v-list-item-title text="All products">All products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(category, i) in categories"
          :key="i"
          :to=linkToCategory(category.slug)
          >
          <v-list-item-content>
            <v-list-item-title v-text="category.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</template>

<script>
/* eslint-disable camelcase */
import { mapState } from 'vuex';
import { GET_CATEGORIES } from '@/store/actions.type';

export default {
  name: 'leftMenu',
  computed: {
    ...mapState({
      categories: (state) => state.products.categories,
    }),
  },
  data: () => ({
    selectedItem: 1,
  }),
  methods: {
    linkToCategory(slug) {
      return `/categories/${slug}`;
    },
  },
  mounted() {
    this.$store.dispatch(GET_CATEGORIES);
  },
};
</script>

<style lang="scss" scoped>
.v-list {
  padding: 0px;
}
.v-list-item--active {
  font-weight: bold;
}
.v-list-item {
  border-top: 1px solid $line;
  padding: 0;
  height: 50px;
  font-size: 16px;
  &__title {
    transition: $short-trans;
    text-transform:capitalize;
  }
  &:hover {
    .v-list-item__title {
      margin-left: 5px;
    }
  }
}
.v-item-group {
  border-bottom: 1px solid $line;
}
</style>
