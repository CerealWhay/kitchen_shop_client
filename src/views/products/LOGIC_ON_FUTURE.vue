<template>
<v-container>
  <!-- SEARCH ON PAGE -->
    <v-row>
      <v-col cols="10" offset="1">
        <h2>List of all CATEGORY</h2>
        <v-text-field
          hide-details
          type="text"
          v-model="search"
          placeholder="Enter product name"
          label="Search by name"
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

  <!-- FORM TO CREATE NEW CUSTOMER -->
          <v-form @submit.prevent="createCustomer">
          <v-text-field
            v-for="(section, i) in customer_form"
            :key="i"

            hide-details
            :label=i
            :name=i
            type="text"
            v-model=customer_form[i]
          ></v-text-field>
          <v-btn
            type="submit"
          >create customer</v-btn>
        </v-form>
</v-container>
</template>

<script>
/* eslint-disable camelcase */
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';
import { CERATE_CUSTOMER } from '@/store/actions.type';

export default {
  name: 'Categorylist',
  components: {
    ProductCard,
  },
  mounted() {
  },
  methods: {
    createCustomer() {
      this.$store.dispatch(CERATE_CUSTOMER, this.customer_form).then(
        this.customer_form.country = '',
        this.customer_form.city = '',
        this.customer_form.zip = '',
        this.customer_form.phone = '',
        this.customer_form.first_name = '',
        this.customer_form.last_name = '',
        this.customer_form.email = '',
      );
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
    customer_form: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      zip: '',
    },
  }),
};
</script>

<style scoped>
</style>
