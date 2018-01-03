/* eslint-disable */
<template>
    <div class="grid-container">
        <h4 class="page-header"> Items In Store</h4>
        <table>
            <thead>
            <th> Name </th>
            <th> Price </th>
            <th> Description </th>
            <th></th>
            </thead>
            <tbody>
            <tr v-for="item in items">
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.description}}</td>
                <td>
                    <router-link class="btn btn-default" v-bind:to="'/item/'+item.id">View</router-link>
                </td>
            </tr>

            </tbody>
        </table>

    </div>
</template>
<script>
  import Alert from './Alert.vue'

  export default {
    name: 'items',
    data () {
      return {
        items: [],
        alert: ''
      }
    },
    methods: {

      getItems: function () {
        this.items = JSON.parse(localStorage.getItem("items"))
      },

    },
    mounted () {
      this.getItems()
    },

    components: {
      Alert
    }
  }
</script>