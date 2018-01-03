<template>
    <div>
        <Alert v-if="alert" v-bind:message="alert"></Alert>

        <form v-on:submit="addItems">
            <div class="grid-container">
                <h4 class="page-header">Add Item</h4>

                <div class="row">
                    <div class="large-9 columns">
                        <label>Item
                            <input type="text" placeholder="Item" v-model="item.name">
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <label>Price
                            <input type="text" placeholder="Price" v-model="item.price">
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <label>Description
                            <input type="text" placeholder="Description" v-model="item.description">
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <button @click="addItems" class="button">Add Items</button>
                        <!--<button class="button" v-on:click.prevent="addItems()">Add Item </button>-->
                        <!--<a href="#" v-on:click.prevent="addItem()" class="button">Submit</a>-->
                    </div>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
  import Alert from './Alert'

  export default {
    name: 'add',
    data () {
      return {
        item: {},
        alert: ''
      }
    },
    methods: {
      addItems: function (){

        let itemsInStore = JSON.parse(localStorage.getItem("items"))

        let item = {
          name: this.item.name,
          price: this.item.price,
          description: this.item.description,
        }

        itemsInStore.push(item);

        localStorage.setItem("items", JSON.stringify(itemsInStore))
        this.getItems()

      },

      getItems: function () {
        this.itemlist = JSON.parse(localStorage.getItem("items"))
      },

      setItemHolder: function () {

        let items = [];

        let check = localStorage.getItem("items")

        if(!check)
        {
          localStorage.setItem("items", JSON.stringify(items))
        }

      }
    },

    mounted () {
      this.setItemHolder()
      this.getItems()
    },


    components: {
      Alert
    }
  }
</script>

<style scoped>

</style>