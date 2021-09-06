<template>
<v-container id="product-page">
    <v-row>
      <v-col cols="6">
        <div class="image-container">
          <div class="dummy"></div>
          <div class="image-wrap">
            <img class="card-image" :src=linkToImage alt="">
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="product-name">{{product.name}}</div>
        <div class="product-price">$ {{product.price}}</div>
        <v-form @submit.prevent="addToCart">
          <v-btn
            v-if="product.stock"
            plain
            type="submit"
            class="add-to-cart-button"
          >add to cart</v-btn>
          <v-btn
            v-else
            disabled
            plain
            type="submit"
            class="add-to-cart-button"
          >out of stock</v-btn>
        </v-form>
        <div class="product-description">{{product.description}}</div>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
/* eslint-disable camelcase */
import { GET_SELECTED_PRODUCT } from '@/store/actions.type';
import { ADD_PRODUCT_TO_CART } from '@/store/mutations.type';
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
    cartSerializer() {
      const cart_serializer = {
        name: this.product.name,
        slug: this.product.slug,
        image: this.product.image,
        price: this.product.price,
        quantity: '1',
        total: this.product.price,
      };
      return cart_serializer;
    },
  },
  data: () => ({
  }),
  methods: {
    addToCart() {
      this.$store.commit(ADD_PRODUCT_TO_CART, this.cartSerializer);
    },
  },
};
</script>

<style lang="scss" scoped>
#product-page {
  border-top: 1px solid $line;
  margin-bottom: 30px;
  .image-container {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    .dummy {
      margin-top: 100%;
    }
    .image-wrap {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Do not scale the image */
        object-position: center; /* Center the image within the element */
        transition: $short-trans;
      }
    }
  }
  .row {
    margin-top: 15px;
  }
  .product-name {
    margin-top: 15px;
    line-height: 40px;
    height: 40px;
    font-size: 22px;
    color: $text;
  }
  .product-price {
    margin-top: 5px;
    line-height: 35px;
    height: 35px;
    font-size: 15px;
    color: $text;
  }
  .add-to-cart-button {
    margin-top: 20px;
    border: 2px solid $text;
    border-radius: 0px;
    width: 200px;
    height: 45px;
    transition: $short-trans;
    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
  }
  .product-description {
    margin-top: 30px;
    line-height: 24px;
    font-size: 15px;
    color: $text;
  }
}
</style>
