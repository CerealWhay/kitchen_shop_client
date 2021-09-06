<template>
<v-container id="cart">
<v-row id="cart-titles">
  <v-col
    cols="6"
    class="cart__title"
  >
  Product
  </v-col>
  <v-col
    cols="2"
    class="cart__title title-end"
  >
  Price
  </v-col>
  <v-col
    cols="2"
    class="cart__title title-end"
  >
  Quantity
  </v-col>
  <v-col
    cols="2"
    class="cart__title title-end"
  >
  Total
  </v-col>
</v-row>
  <div v-if="cart.length > 0">
    <div
      class="product-wrapper"
      :key="product.id"
      v-for="product of cart"
    >
      <ProductInCart
        :product_data="product"
      />
    </div>
  </div>
  <p v-else class='no-items'>No items in cart!</p>
<v-row v-if="cart.length > 0">
  <v-col class="instructions-for-seller" cols="6">
    <span>Special instructions for seller</span>
    <v-textarea
      class="instructions-textarea"
      label="Input your wishes..."
      background-color="#F4F4F4"
      color="#333"
      no-resize
      solo
      flat
      height="125px"
    ></v-textarea>
  </v-col>
  <v-col cols="6">
    <div class="subtotal">
      Subtotal ${{subtotal}}
    </div>
    <div class="taxes">
      Taxes and shipping calculated at checkout
    </div>
    <v-form
      class="check-out-form"
    >
      <v-btn
        plain
        type="submit"
        class="check-out-button"
      >check out</v-btn>
    </v-form>
  </v-col>
</v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import ProductInCart from '@/components/ProductInCart.vue';

export default {
  name: 'Cart',
  components: {
    ProductInCart,
  },
  data: () => ({
  }),
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
    subtotal() {
      let subtotal = 0;
      this.cart.forEach((element) => {
        subtotal += Number(element.total);
      });
      return subtotal.toFixed(2);
    },
  },
  methods: {
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
#cart {
  border-top: 1px solid $line;
  margin-bottom: 30px;
  .no-items {
    margin-bottom: 30px;
  }
  #cart-titles {
    margin: 30px 0px 30px 0px;
    height: 25px;
    line-height: 25px;
    .cart__title {
      font-size: 16px;
      font-weight: 700;
      padding: 0px;
    }
    .title-end {
      text-align: right;
    }
  }
  .product-wrapper {
    margin-bottom: 30px;
  }
  .no-items {
    text-align: center;
    color: $text;
    margin-top: 30px;
    font-size: 20px;
  }
  .instructions-for-seller {
    span {
      font-size: 12px;
      height: 19px;
    }
    .instructions-textarea {
      margin-top: 5px;
    }
  }
  .subtotal {
    font-size: 15px;
    text-align: right;
    line-height: 18px;
    color: $text;
    margin-bottom: 15px;
  }
  .taxes {
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    font-style: italic;
    color: $text;
    margin-bottom: 30px;
  }
  .check-out-form {
    text-align: right;
    .check-out-button {
      border: 2px solid $text;
      border-radius: 0px;
      width: 130px;
      height: 45px;
      background-color: #333;
      color: white;
      transition: $short-trans;
      &:hover {
        color: #333;
        background-color: rgba(0, 0, 0, 0.025);
      }
    }
  }
}
</style>
