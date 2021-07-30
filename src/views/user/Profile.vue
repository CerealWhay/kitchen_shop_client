<template>
  <div>
    {{account}}
    <br>
    <v-form @submit.prevent="changeAddress">
          <v-text-field
            dense
            hide-details
            height='20px'
            label="Country"
            color="secondary"
            name="country"
            type="text"
            outlined
            v-model="change_address_form.country"
          ></v-text-field>
          <v-text-field
            dense
            hide-details
            height='20px'
            label="City"
            color="secondary"
            name="city"
            type="text"
            outlined
            v-model="change_address_form.city"
          ></v-text-field>
          <v-text-field
            dense
            hide-details
            height='20px'
            label="ZIP"
            color="secondary"
            name="zip"
            type="text"
            outlined
            v-model="change_address_form.zip"
          ></v-text-field>
          <v-text-field
            dense
            hide-details
            height='20px'
            label="Phone"
            color="secondary"
            name="phone"
            type="text"
            outlined
            v-model="change_address_form.phone"
          ></v-text-field>
          <v-btn
            class="auth-button"
            color="button"
            type="submit"
            depressed
            block
          >Change address</v-btn>
        </v-form>
        {{address}}
        <br>

    <v-form @submit.prevent="changePersonalData">
          <v-text-field
            dense
            hide-details
            height='20px'
            label="first name"
            color="secondary"
            name="first_name"
            type="text"
            outlined
            v-model="change_personal_data_form.first_name"
          ></v-text-field>
          <v-text-field
            dense
            hide-details
            height='20px'
            label="last name"
            color="secondary"
            name="last_name"
            type="text"
            outlined
            v-model="change_personal_data_form.last_name"
          ></v-text-field>
          <v-text-field
            dense
            hide-details
            height='20px'
            label="email"
            color="secondary"
            name="email"
            type="text"
            outlined
            v-model="change_personal_data_form.email"
          ></v-text-field>
          <v-btn
            class="auth-button"
            color="button"
            type="submit"
            depressed
            block
          >Change personal data</v-btn>
        </v-form>
        <br>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { CHANGE_ADDRESS, GET_ADDRESS, CHANGE_PERSONAL_DATA } from '@/store/actions.type';

export default {
  name: 'Profile',
  data: () => ({
    change_address_form: {
      country: '',
      city: '',
      zip: '',
      phone: '',
    },
    change_personal_data_form: {
      first_name: '',
      last_name: '',
      email: '',
    },
  }),
  computed: {
    ...mapState({
      account: (state) => state.auth.account,
      address: (state) => state.auth.address,
    }),
  },
  methods: {
    changeAddress() {
      this.$store.dispatch(CHANGE_ADDRESS, this.change_address_form).then(
        () => this.$store.dispatch(GET_ADDRESS),
        this.change_address_form.country = '',
        this.change_address_form.city = '',
        this.change_address_form.zip = '',
        this.change_address_form.phone = '',
      );
    },
    changePersonalData() {
      this.$store.dispatch(CHANGE_PERSONAL_DATA, this.change_personal_data_form).then(
        this.change_personal_data_form.first_name = '',
        this.change_personal_data_form.last_name = '',
        this.change_personal_data_form.email = '',
      );
    },
  },
  mounted() {
    this.$store.dispatch(GET_ADDRESS);
  },
  components: {
  },
};
</script>
