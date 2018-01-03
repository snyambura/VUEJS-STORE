<template>
    <form>
        <div class="grid-container">
            <div class="small-8">
                <div class="row">
                    <div class="large-12 columns">
                        <label>Email
                            <input type="text" placeholder="email" v-model="email" />
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
                <div class="row">
                    <div class="large-12 columns">
                        <a href="#" class="button">Login</a>
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
          email:'',
          password: ''
        }
      }
    }

</script>

<style>

</style>