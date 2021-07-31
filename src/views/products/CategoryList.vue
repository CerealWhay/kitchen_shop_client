<template>
<v-container>
    <v-row class="">
      <v-col cols="10" offset-md="1">
        <h2>List of all CATEGORY</h2>
        <v-text-field
          class="text-field"
          hide-details
          type="text"
          v-model="search"
          placeholder="Enter product name"
          label="Search by name"
          outlined
        ></v-text-field>
        <div v-if="products_filter.length">
          <ProductCard
            :product_data="product"
            :key="product.id"
            v-for="product of products_filter"
          />
        </div>
        <p v-else class='no-items'>Товаров нет!</p>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
/* eslint-disable camelcase */
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';
import { GET_PRODUCTS } from '@/store/actions.type';

export default {
  name: 'Categorylist',
  components: {
    ProductCard,
  },
  mounted() {
    this.$store.dispatch(GET_PRODUCTS, this.setCategory());
  },
  methods: {
    setCategory() {
      const FormDataCat = new FormData();
      FormDataCat.append('category_slug', this.$route.params.slug);
      return FormDataCat;
    },
  },
  computed: {
    products_filter() {
      // eslint-disable-next-line max-len
      return this.products.filter((item) => item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
    },
    ...mapState({
      products: (state) => state.products.products,
    }),
  },
  data: () => ({
    search: '',
  }),
};
</script>

<style scoped>
</style>
