<template>
<div>
  <v-app id="inspire">
    <v-container class="grey lighten-5">
       <v-row class="mb-6" >
         <v-col
           v-for="n in 10"
           :key="n"
           md="3"
           cols="3"
         >
            <v-card
              outlined
              class="pa-3"
            >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline" >Nginx-Example-Group</v-list-item-title>
                <v-list-item-subtitle>by Gibson Xue</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="194"
            ></v-img>

            <v-card-text>
              Visit ten places on our planet that are undergoing the biggest changes today.
            </v-card-text>
            <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Run
                </v-btn>
                <v-btn
                  text
                  color="blue accent-4"
                >
                  View Details
                </v-btn>
            </v-card-actions>
             </v-card>

           </v-col>
        </v-row>
    </v-container>
  </v-app>
</div>
</template>

<script>
  export default {
    name: 'AppSheets',
  }
</script>