<template>
  <div>
    <div v-if="categories.length">
      <a
        v-on:click="redirectToAllProducts"
        class="link"
      >Все товары</a>
      <a
        v-on:click="redirectToCategoryProducts(category.slug)"
        class="link"
        :key="category.id"
        v-for="category of categories"
      >{{category}}</a>
    </div>
    <p v-else class='no-items'>Категорий нет!</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import { GET_CATEGORIES } from '@/store/actions.type';

export default {
  name: 'Home',
  computed: {
    ...mapState({
      categories: (state) => state.products.categories,
      cat_prods: (state) => state.products.cat_prods,
    }),
  },
  methods: {
    setCategory() {
      const FormDataCat = new FormData();
      FormDataCat.append('category_slug', this.categories[0].slug);
      return FormDataCat;
    },
    redirectToAllProducts() {
      router.push({ name: 'ProductList' });
    },
    redirectToCategoryProducts(slug) {
      router.push({ name: 'CategoryPage', params: { slug } });
    },
  },
  mounted() {
    this.$store.dispatch(GET_CATEGORIES);
  },

  components: {
  },
};
</script>

<style scoped>
.link {
  display: block;
}
</style>
