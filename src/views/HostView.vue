<template>
<div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="hosts"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >New Item</v-btn>
            </template>
            <v-card>
              <!--<v-card-title>-->
                <!--<span class="headline">{{ cardtitle }}</span>-->
              <!--</v-card-title>-->
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
       <v-icon
          class="mr-2"
          @click="groupItem(item)"
        >
          group
        </v-icon>
        <v-icon
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          class="mr-2"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

       <v-row justify="center">
      <v-dialog v-model="groupdialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-select
                    :items="editedGroups"
                    v-model="selectedGroups"
                    item-value="id"
                    item-text="groupname"
                    label="Group*"
                    return-object
                    multiple
                    filled
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="groupdialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="savegroupItem">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>


  </v-app>
</div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    groupdialog: false,
    headers: [
      {text: 'Host Name', align: 'start', value: 'hostname'},
      {text: 'SSH Port', value: 'port'},
      {text: 'IP', value: 'address'},
      {text: 'User Name', value: 'username'},
      {text: 'Actions', value: 'actions', sortable: false}
    ],
    editedGroups: [],
    selecteditem: {},
    selectedGroups: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),
  mounted() {
    this.GetHostInfo()
    this.GetGroupInfo()
  },
  computed: {
    ...mapState([
          "host",
          "group"
    ]),
    hosts (){
      return this.host.hosts
    },
    cardtitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },

  },
  methods: {
    ...mapActions(
      'host', ['GetHostInfo','UpdateHostGroup']),
    ...mapActions(
      'group', ['GetGroupInfo']),
    editItem (item) {
      this.editedIndex = this.hosts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.hosts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.hosts.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.hosts[this.editedIndex], this.editedItem)
      } else {
        this.hosts.push(this.editedItem)
      }
      this.close()
    },

    //Group Management
    groupItem (item) {
      this.editedIndex = this.hosts.indexOf(item)
      this.selecteditem = item
      this.editedGroups = this.group.groups
      console.log(JSON.stringify(this.group.groups))
      this.selectedGroups = item.groups
//      for ( g in item.groups ) {
//          console.log(JSON.stringify(g))
//          this.groupItem.append(g.groupname )
//      }
      this.groupdialog = true
    },
    savegroupItem () {
      let groups = this.selectedGroups
      const group_list = []
      for (let i=0; i<groups.length; i++){
          group_list.push(groups[i].id)
      }
      this.selecteditem.group_list = group_list
//      console.log(JSON.stringify(this.selecteditem))
      this.UpdateHostGroup(this.selecteditem)
      this.groupdialog = false
    },
  }
}

</script>