<template>
<div
  class="product-card"
  @click.prevent="pushToProductPage"
>
  <div class="image-container">
    <div class="dummy"></div>
    <div class="image-wrap">
      <img class="card-image" :src=linkToImage alt="">
    </div>
  </div>
  <div class="product-card__text">
    {{ product_data.name }}
  </div>
  <div class="product-card__text">
    $ {{ product_data.price }}
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product_data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    pushToProductPage() {
      this.$router.push({ name: 'ProductPage', params: { slug: this.product_data.slug } });
    },
  },
  computed: {
    linkToImage() {
      return `${process.env.VUE_APP_BACKEND_DOMAIN}media/${this.product_data.image}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  transition: $short-trans;
  padding-bottom: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
    cursor: pointer;
    border-radius: 5px;
    .card-image {
      border-radius: 5px 5px 0px 0px;
      filter: grayscale(0%) brightness(80%) !important;
    }
  }
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
        filter: grayscale(50%);
        width: 100%;
        height: 100%;
        object-fit: cover; /* Do not scale the image */
        object-position: center; /* Center the image within the element */
        transition: $short-trans;
      }
    }
  }
  .product-card__text {
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    color: $text;
    height: 25px;
  }
}
</style>
