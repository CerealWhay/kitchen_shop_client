<template>
  <div id="contact-us">
    <div class="title">Contact Us</div>
    <v-form @submit.prevent="createAppeal">
      <v-text-field
        v-for="(section, i) in personal_info_form"
        :key="i"
        hide-details
        background-color="#F4F4F4"
        :label=i
        :name=i
        type="text"
        solo
        flat
        v-model=personal_info_form[i]
      ></v-text-field>
      <v-textarea
        hide-details
        background-color="#F4F4F4"
        label='message'
        type="text"
        solo
        flat
        no-resize
        height="125px"
        v-model=message
      ></v-textarea>
      <v-btn
        plain
        type="submit"
        class="check-out-button"
      >send</v-btn>
    </v-form>
  </div>
</template>

<script>
import { CERATE_CUSTOMER } from '@/store/actions.type';

export default {
  name: 'ContactUs',
  data: () => ({
    personal_info_form: {
      name: '',
      email: '',
      phone: '',
    },
    message: '',
  }),
  methods: {
    createAppeal() {
      this.$store.dispatch(CERATE_CUSTOMER, this.appealForm).then(
        this.appeal_form.name = '',
        this.appeal_form.email = '',
        this.appeal_form.phone = '',
        this.appeal_form.message = '',
      );
    },
  },
  computed: {
    appealForm() {
      return {
        name: this.personal_info_form.name,
        email: this.personal_info_form.email,
        phone: this.personal_info_form.phone,
        message: this.message,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-us {
  .title {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 32px;
  }
  .v-form {
    max-width: 270px;
    margin-bottom: 60px;
  }
  .v-input {
    margin-bottom: 8px;
    border-radius: 0px;
    text-transform:capitalize;
  }
  .check-out-button {
    border: 2px solid $text;
    border-radius: 0px;
    width: 100%;
    height: 40px;
    background-color: #333;
    color: white;
    transition: $short-trans;
    &:hover {
      color: #333;
      background-color: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
