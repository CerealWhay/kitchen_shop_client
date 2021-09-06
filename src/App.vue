<template>
  <div id="app">
    <v-container class="main-container">
      <div id="no-footer">
      <!-- header -->
        <div id="header">
          <div class="header__searchbar">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              hide-details
              type="text"
              v-model="search"
              label="Search"
              single-line
            ></v-text-field>
          </div>
          <div class="header__cart">
            <a class="header__cart__instagram" :href="socialMedias.instagram.link">
              <v-icon>{{socialMedias.instagram.icon}}</v-icon>
            </a>
            <router-link to="/cart">
              <v-icon v-text="'mdi-cart'"></v-icon>
              <span v-if="cart" class="cart-text">Cart ({{cart.length}})</span>
            </router-link>
          </div>
        </div>
      <!-- LOGO SECTION -->
        <div id="logo-section">
          <img src="@/assets/logo.png" alt="" height="136">
        </div>
      <!-- MAIN SECTION -->
        <div id="main-content">
          <v-row>
      <!-- left menu -->
            <v-col cols="3">
              <v-navigation-drawer
                floating
                v-model="leftMenu"
              >
                <left-menu/>
              </v-navigation-drawer>
            </v-col>
      <!-- content -->
            <v-col cols="9">
              <v-main>
                <router-view/>
              </v-main>
            </v-col>
          </v-row>
        </div>
      </div>
      <div id="footer">
      <!-- contacts -->
        <div id="contacts">
          <v-row class="contacts__titles">
            <v-col class="contacts__titles__title" cols="6">
              Links
            </v-col>
            <v-col class="contacts__titles__title" cols="6">
              Follow us
            </v-col>
          </v-row>
          <v-row class="contacts__content">
            <v-col class="contacts__content__link" cols="6">
              <div
                v-for="(link, i) in links"
                :key="i"
              >
                <router-link
                  :to="link.link"
                >
                  {{link.text}}
                </router-link>
              </div>
            </v-col>
            <v-col class="contacts__content__follow-us" cols="6">
              <a
                v-for="(socialMedia, i) in socialMedias"
                :key="i"
                :href="socialMedia.link"
              >
                <v-icon>{{socialMedia.icon}}</v-icon>
              </a>
            </v-col>
          </v-row>
        </div>
      <!-- footer -->
        <div id="second-footer">
          <div class="second-footer__text">
            Copyright © 2021, Kitchen_shop. Powered by A_B_C
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import leftMenu from '@/components/LeftMenu.vue';
import {
  SEARCH_PRODUCTS,
  CHECK_OR_CREATE_SESSION,
} from '@/store/actions.type';
import {
  CREATE_CART,
} from '@/store/mutations.type';

export default {
  name: 'App',
  components: {
    leftMenu,
  },

  data: () => ({
    leftMenu: true,
    search: '',
    links: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/about' },
      { text: 'About Us', link: '/about' },
      { text: 'Contact Us', link: '/contact-us' },
      { text: 'Return policy', link: '/return-policy' },
    ],
    socialMedias: {
      instagram: { icon: 'mdi-instagram', link: 'https://www.instagram.com/rkkk.vv/' },
      facebook: { icon: 'mdi-facebook', link: 'https://www.instagram.com/rkkk.vv/' },
      twitter: { icon: 'mdi-twitter', link: 'https://www.instagram.com/rkkk.vv/' },
    },
  }),
  mounted() {
    this.$store.dispatch(CHECK_OR_CREATE_SESSION);
    this.$store.commit(CREATE_CART);
  },
  computed: {
    ...mapState({
      loadingActive: (state) => state.loading.loadingActive,
      cart: (state) => state.cart.cart,
    }),
  },
  methods: {
    setText() {
      const FormDataCat = new FormData();
      FormDataCat.append('text', this.search);
      return FormDataCat;
    },
    searchProducts() {
      this.$store.dispatch(SEARCH_PRODUCTS, this.setText());
    },
  },
};
</script>

<style lang='scss'>
html, body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text !important;
  .container {
    max-width: 1185px;
    padding: 0px 0px;
    #no-footer {
      #header {
        background-color: white;
        border-bottom: 1px solid $line;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 44px;

        .header__searchbar {
          display: flex;
          justify-content: space-between;
          .v-input {
            margin: 0;
            padding: 0;
            &__slot {
              height: 43px;
              &::before {
                content: none;
              }
              .v-input__prepend-inner {
                margin-top: 0px;
                margin-right: 10px;
                align-self: center;
                .v-icon::before {
                  font-weight: 900;
                  color: $text;
                }
              }
              .v-label {
                font-size: 14px;
                color: $text;
              }
            }
          }
        }
        .header__cart {
          .header__cart__instagram {
            text-decoration: none;
            margin-right: 30px;
          }
          a {
            text-decoration: none;
            .v-icon::before {
              color: $text;
              transition: $short-trans;
            }
            .cart-text {
              margin-left: 5px;
              color: $text;
              font-size: 13px;
              transition: $short-trans;
            }
            &:hover {
            .v-icon::before {
              color: $text-hover;
            }
            .cart-text {
              color: $text-hover;
            }
            }
          }
        }
      }
    }
    #footer {
      grid-row-start: 2;
      grid-row-end: 3;
      #contacts {
        border-top: 1px solid $line;
        margin-bottom: 30px;
        .contacts__titles {
          margin: 30px 0px 0px 0px;
          &__title {
            padding: 0px;
            font-size: 20px;
            color: $text;
            line-height: 26px;
          }
        }
        .contacts__content {
          margin: 20px 0px 0px 0px;
          &__link {
            padding: 0px;
            a {
              text-decoration: none;
              color: $text;
              line-height: 24px;
              font-size: 15px;
              &:hover {
                color: $text-hover;
              }
            }
          }
          &__follow-us {
            padding: 0px;
            a {
              text-decoration: none;
              margin-right: 15px;
              .v-icon::before {
                color: $text;
              }
              &:hover {
                .v-icon::before {
                  color: $text-hover;
                }
              }
            }
          }
        }
      }
      #second-footer {
        border-top: 1px solid $line;
        margin-bottom: 30px;
        .second-footer__text {
          margin-top: 30px;
          font-size: 15px;
          line-height: 25px;
          font-weight: 300;
        }
      }
    }

  }
}
.main-container {
  padding: 0px 15px !important;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
