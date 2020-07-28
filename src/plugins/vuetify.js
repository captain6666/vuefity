import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi' || 'mdiSvg',
  }, theme: {
    themes: {
      primary: colors.indigo.base,
      secondary: colors.pink.base,
      accent: colors.green.base,
      error: colors.red.base,
      warning: colors.orange.base,
      info: colors.brown.base,
      success: colors.lightGreen.base
      }
    }
});
