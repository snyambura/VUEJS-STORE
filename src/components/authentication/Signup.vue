<template>
    <form>
        <div class="grid-container">
            <div class="small-8">
                <div class="row">
                    <div class="large-12 columns">
                        <label>Name
                            <input type="text" placeholder="Name" v-model="name" />
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <label>Email
                            <input type="email" placeholder="email" v-model="email" />
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="large-12 columns">
                        <label>Password
                            <input type="password" placeholder="Password" v-model="password" />
                        </label>
                    </div>
                </div>
                <!--<div class="row">-->
                    <!--<div class="large-12 columns">-->
                        <!--<label>Confirm Password-->
                            <!--<input type="password" placeholder="Password" v-model="password" />-->
                        <!--</label>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="row">
                    <div class="large-12 columns">
                        <a href="#" class="button">Signup</a>
                    </div>
                </div>
            </div>

        </div>
    </form>
</template>

<script>
  export default {
    data () {
      return {
        name:'',
        email:'',
        password: ''
      }
    }
  }

</script>

<style>

</style>