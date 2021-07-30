<template>
<v-card
  :disabled=isOutOfStock
  class="mx-auto mb-5"
  outlined
  @click="pushToProductPage"
  link
>
  <v-row>
    <v-col cols="9">
      <v-list-item
        three-line
      >
        <v-list-item-avatar
          tile
          size="150"
        >
          <img :src=linkToImage alt="">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{ product_data.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ product_data.description }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ product_data.category }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductCard',
  props: {
    product_data: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
  }),
  methods: {
    pushToProductPage() {
      this.$router.push({ name: 'ProductPage', params: { slug: this.product_data.slug } });
    },
  },
  computed: {
    ...mapState({
    }),
    linkToImage() {
      return `${process.env.VUE_APP_BACKEND_DOMAIN}media/${this.product_data.image}`;
    },
    isOutOfStock() {
      return (this.product_data.stock <= 0);
    },
  },
};
</script>

<style scoped>
#delete-icon {
  font-size: 30px;
  float: right;
  margin-right: 25px;
  margin-top: 15px;
}
.button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
