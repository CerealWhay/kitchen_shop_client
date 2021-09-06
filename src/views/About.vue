<template>
  <div id="about">
    <div class="title">Our story</div>
    <div class="text">
      We are a South African menswear denim lifestyle brand with a global reach.
      We live by the notion that simplicity is the ultimate sophistication.
      In everything we do, we want to make sure that we keep it simple, but significant,
      remove all excess and clutter and intently focus on quality, craftsmanship and design.
      As a brand we are about well made items imbued with history, about providing a rare
      combination of trend and longevity, offering the discerning customer,
      on trend understated garments with an extended life span due to selective styling,
      quality and detail!
    </div>
    <img class="image-about-us" src="@/assets/about-us.jpg" alt="" srcset="">
    <div class="text">
      Our unceasing goal is to provide our customers with apparel and footwear
      that have been "marked by truth" which retails at a fair price, we are about offering
      the discerning customer a rare combination of well-made, on-trend items with longevity
      and minimalist design features. We are on a journey to restore desire, to strip back thoughts,
      and to preserve the past by making it work in the present.
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  methods: {
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
#about {
  margin-bottom: 30px;
  .title {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 32px;
  }
  .text {
    font-size: 15px;
    line-height: 18px;
  }
  .image-about-us {
    margin: 30px 0px;
    width: 100%;
    height: 250px;
    object-fit: cover; /* Do not scale the image */
    object-position: center; /* Center the image within the element */
  }
}
</style>
