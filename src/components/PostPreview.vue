<template>
<div
  class="post-preview"
>
  <div class="title">
    <span
      @click.prevent="pushToPostPage"
    >
      {{post_data.title}}
    </span>
  </div>
  <div class="date">
    Posted on {{ date }}
  </div>
  <div class="preview-text">
    {{ post_data.preview_text }}
  </div>
  <div class="read-more">
    <span
      @click.prevent="pushToPostPage"
    >
      > Read more &lt;
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    post_data: {
      type: Object,
      required: true,
    },
  },
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
  methods: {
    pushToPostPage() {
      this.$router.push({ name: 'PostPage', params: { id: this.post_data.id } });
    },
  },
  computed: {
    date() {
      const date = new Date(this.post_data.created);
      const month = this.monthNames[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-preview {
  color: $text;
  margin-bottom: 30px;
  transition: $short-trans;
  .title {
    margin-bottom: 10px;
    span {
      font-size: 20px;
      line-height: 32px;
      &:hover {
        color: $text-hover;
        cursor: pointer;
      }
    }
  }
  .date {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .preview_text {
    font-size: 15px;
    line-height: 18px;
  }
  .read-more {
    margin-top: 10px;
    span {
      font-size: 15px;
      line-height: 18px;
      &:hover {
        color: $text-hover;
        cursor: pointer;
      }
    }
  }
}
</style>
