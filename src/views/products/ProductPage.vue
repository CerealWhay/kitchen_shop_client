<template>
<v-container>
    <v-row class="">
      <v-col cols="6" offset-md="0">
        <div class="image-wrap">
          <img :src=linkToImage alt="">
        </div>
      </v-col>
      <v-col cols="6" offset-md="0">
        <h2>category: {{product.category}}</h2>
        <h1>{{product.name}}</h1>
        <h3>price: {{product.price}}</h3>
        <h3>stock: {{product.stock}}</h3>
        <h3 class="description">{{product.description}}</h3>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
/* eslint-disable camelcase */
import { GET_SELECTED_PRODUCT } from '@/store/actions.type';
import { mapState } from 'vuex';

export default {
  name: 'ProductPage',

  mounted() {
    this.$store.dispatch(GET_SELECTED_PRODUCT, this.setForm);
  },
  computed: {
    ...mapState({
      product: (state) => state.products.selected_product,
    }),
    linkToImage() {
      return `${process.env.VUE_APP_BACKEND_DOMAIN}media/${this.product.image}`;
    },
    setForm() {
      const FormDataCat = new FormData();
      FormDataCat.append('slug', this.$route.params.slug);
      return FormDataCat;
    },
  },
  data: () => ({
  }),
  methods: {
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.description {
  max-width: 100%;
}
</style>
