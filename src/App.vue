<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
// @ is an alias to /src
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Gallery from '@/views/Gallery.vue';
// import Home from '@/views/Home.vue';

export default {
  name: 'home',
  data: function() {
    return {
      imageurl: require('@/assets/Orhh.jpg'),
      data: [],
      message: 'Hello World',
    };
  },
  components: {
    // Home,
  },
  methods: {},
  // created: function() {
  //   var sample = require('./read_name_module.js');
  //   this.data = sample.sanbai('./assets/');
  //   this.message = 'Hello Vue';
  //   console.log('created');
  //   console.log(this);
  // },
  mounted() {
    var sample = require('./read_name_module.js');
    this.data = sample.sanbai('./assets/');
    console.log(sample.sanbai('./assets/'));
    this.data = [1, 2];
    // this.$set(this.data, 3);
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
