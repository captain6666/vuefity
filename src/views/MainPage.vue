<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-scale-balance</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Application Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ path: '/home/hostview'}">
          <v-list-item-action>
            <v-icon>mdi-storage</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Host Management</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Marketplace Groups</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item :to="{ path: '/home/appsheets'}">
            <v-list-item-icon>
              <v-icon>mdi-scale-balance</v-icon>
            </v-list-item-icon>
          <v-list-item-title>Nginx</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-scale-balance</v-icon>
            </v-list-item-icon>
          <v-list-item-title>RabbitMQ</v-list-item-title>
          </v-list-item>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

      <v-content>
      <v-container
      >
      <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {

    },
  }
</script>