<template>
  <div>{{account}}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState({
      account: (state) => state.auth.account,
    }),
  },

  components: {
  },
};
</script>
