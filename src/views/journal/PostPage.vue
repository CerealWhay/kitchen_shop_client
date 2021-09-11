<template>
<v-container id="post-page">
  <div class="title">
    {{post.title}}
  </div>
  <div class="date">
    Posted on {{date}}
  </div>
  <div class="image-wrap">
    <img class="card-image" :src=linkToImage alt="">
  </div>
  <div class="main-text-wrap">
    <span v-html="post.main_text"></span>
  </div>
</v-container>
</template>

<script>
/* eslint-disable camelcase */
import { GET_SELECTED_POST } from '@/store/actions.type';
import { mapState } from 'vuex';

export default {
  name: 'PostPage',
  data: () => ({
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  }),
  mounted() {
    this.$store.dispatch(GET_SELECTED_POST, this.$route.params.id);
  },
  computed: {
    ...mapState({
      post: (state) => state.journal.selected_post,
    }),
    linkToImage() {
      return `${process.env.VUE_APP_BACKEND_DOMAIN}media/${this.post.image}`;
    },
    date() {
      const date = new Date(this.post.created);
      const month = this.monthNames[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
#post-page {
  color: $text;
  margin-bottom: 30px;
  .title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 30px;
  }
  .date {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 15px;
  }
  .image-wrap {
    margin-bottom: 15px;
    .card-image {
      width: 100%;
      height: 400px;
      object-fit: cover; /* Do not scale the image */
      object-position: center; /* Center the image within the element */
    }
  }
  .main-text-wrap {

  }
}
</style>
