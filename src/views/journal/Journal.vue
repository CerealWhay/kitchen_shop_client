<template>
<v-container id="journal">
  <div class="category-name">Journal</div>
  <div
    v-if="posts.length"
  >
    <div
      v-for="item of items"
      :key="item.id"
    >
      <PostPreview
        :post_data="item"
      />
    </div>
  </div>
  <p v-else class='no-items'>No posts!</p>
  <div
    v-if="allItems.length > 1"
    class="paginator-wrapper text-center"
  >
    <v-pagination
      class="paginator"
      v-model="page"
      :length=pageCount
      :total-visible="7"
    ></v-pagination>
  </div>
</v-container>
</template>

<script>
/* eslint-disable camelcase */
import pagination from '@/mixins/pagination.mixin';
import { mapState } from 'vuex';
import { GET_POSTS } from '@/store/actions.type';
import PostPreview from '@/components/PostPreview.vue';

export default {
  name: 'Journal',
  mixins: [pagination],
  components: {
    PostPreview,
  },
  mounted() {
    this.$store.dispatch(GET_POSTS).then(
      () => this.setupPagination(this.posts),
    );
  },
  computed: {
    ...mapState({
      posts: (state) => state.journal.posts,
    }),
  },
  data: () => ({
    pageSize: 6,
  }),
  methods: {

  },
};
</script>

<style lang="scss">
#journal {
  padding: 0px;
  margin-bottom: 30px;
  .no-items {
    margin-bottom: 30px;
    text-align: center;
    color: $text;
    margin-top: 30px;
    font-size: 20px;
  }
  .category-name {
    color: $text;
    font-size: 24px;
    text-transform:capitalize;
    margin-bottom: 30px;
  }
  .paginator-wrapper {
    margin-top: 30px;
    li {
      transition: $short-trans;
      .v-pagination__item--active {
        color: $text;
        background-color: #f4f4f4;
      }
      button {
        color: $text-hover;
        border-radius: 50px;
        box-shadow: none;
      }
      &:hover {
        button {
          background-color: #f4f4f4;
        }
      }
    }
  }
}
</style>
