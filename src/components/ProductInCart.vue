<template>
<v-container
  id="product-in-cart"
>
<v-row>
  <v-col
    cols="6"
    offset="0"
    class="product-card__image-and-title"
  >
    <img
      class="card-image"
      :src=linkToImage
      alt=""
      @click.prevent="pushToProductPage"
    >
    <div class="product-card__title">
      <span
        @click.prevent="pushToProductPage"
      >{{ product_data.name }}</span>
    </div>
    <div class="product-card__remove">
      <span
        @click.stop="removeFromCart"
      >Remove</span>
    </div>
  </v-col>
  <v-col
    cols="2"
    offset="0"
    class="product-card__price"
  >
    ${{ product_data.price }}
  </v-col>
  <v-col
    cols="2"
    offset="0"
    class="product-card__price"
  >
  <div class="counter-wrap">
    <v-text-field
      onkeyup="if(parseInt(this.value)>99){this.value=99;return false;}"
      v-model="quantity"
      type="number"
      min="1"
      max="99"
      solo
      flat
      dense
      color="#333"
      background-color="#f4f4f4"
    >
    </v-text-field>
  </div>
  </v-col>
  <v-col
    cols="2"
    offset="0"
    class="product-card__price"
  >
     ${{this.product_data.total}}
  </v-col>
</v-row>
</v-container>
</template>

<script>
import {
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY_IN_CART,
} from '@/store/mutations.type';

export default {
  name: 'ProductInCart',
  props: {
    product_data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeFromCart() {
      this.$store.commit(REMOVE_PRODUCT_FROM_CART, this.product_data);
    },
    pushToProductPage() {
      this.$router.push({ name: 'ProductPage', params: { slug: this.product_data.slug } });
    },
  },
  computed: {
    setData() {
      const data = {
        product: this.product_data,
        quantity: this.quantity,
      };
      return data;
    },
    quantity: {
      get() {
        return this.product_data.quantity;
      },
      set(newValue) {
        const data = {
          product: this.product_data,
          quantity: newValue,
        };
        this.$store.commit(UPDATE_PRODUCT_QUANTITY_IN_CART, data);
      },
    },
    linkToImage() {
      return `${process.env.VUE_APP_BACKEND_DOMAIN}media/${this.product_data.image}`;
    },
  },
};
</script>

<style lang="scss" scoped>
#product-in-cart {
  width: 100%;
  height: 145px;
  transition: $short-trans;
  .product-card__image-and-title {
    display: grid;
    grid-template-columns: 145px 1fr;
    grid-template-rows: 72.5px 72.5px;
    grid-column-gap: 15px;
    .card-image {
      grid-row: span 2;
      width: 145px;
      height: 145px;
      object-fit: cover; /* Do not scale the image */
      object-position: center; /* Center the image within the element */
      transition: $short-trans;
      &:hover {
        cursor: pointer;
        filter: brightness(80%) !important;
      }
    }
    .product-card__title {
      color: $text;
      font-size: 15px;
      align-self: end;
      span {
        transition: $short-trans;
        &:hover {
          cursor: pointer;
          color: $text-hover;
        }
      }
    }
    .product-card__remove {
      margin-top: 15px;
      color: $text;
      font-size: 12px;
      span {
        transition: $short-trans;
        &:hover {
          cursor: pointer;
          color: $text-hover;
        }
      }
    }
  }
  .product-card__price {
    // text-align: right;
    color: $text;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .counter-wrap {
    width: 60px;
  }
}
</style>
