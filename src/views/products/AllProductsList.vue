<template>
<v-container id="all-products-page">
  <div class="category-name">All products</div>
  <v-row
    v-if="products.length"
  >
    <v-col
      cols="4"
      v-for="item of items"
      :key="item.id"
    >
      <ProductCard
        :product_data="item"
      />
    </v-col>
  </v-row>
  <p v-else class='no-items'>No products!</p>
  <div
    v-if="allItems.length > 1"
    class="paginator-wrapper text-center"
  >
    <v-pagination
      class="paginator"
      v-model="page"
      :length=pageCount
      :total-visible="7"
    ></v-pagination>
  </div>
</v-container>
</template>

<script>
/* eslint-disable camelcase */
import pagination from '@/mixins/pagination.mixin';
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';
import { GET_PRODUCTS } from '@/store/actions.type';

export default {
  name: 'Productlist',
  mixins: [pagination],
  components: {
    ProductCard,
  },
  mounted() {
    this.$store.dispatch(GET_PRODUCTS).then(
      () => this.setupPagination(this.products),
    );
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
  },
  data: () => ({
    pageSize: 12,
  }),
  methods: {

  },
};
</script>

<style lang="scss">
#all-products-page {
  padding: 0px;
  margin-bottom: 30px;
  border-top: 1px solid $line;
  .no-items {
    margin-bottom: 30px;
    text-align: center;
    color: $text;
    margin-top: 30px;
    font-size: 20px;
  }
  .category-name {
    margin-top: 15px;
    color: $text;
    font-size: 24px;
    text-transform:capitalize;
  }
  .row {
    margin-top: 15px;
  }
  .paginator-wrapper {
    margin-top: 30px;
    li {
      transition: $short-trans;
      .v-pagination__item--active {
        color: $text;
        background-color: #f4f4f4;
      }
      button {
        color: $text-hover;
        border-radius: 50px;
        box-shadow: none;
      }
      &:hover {
        button {
          background-color: #f4f4f4;
        }
      }
    }
  }
}
</style>
