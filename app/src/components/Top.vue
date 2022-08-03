<template>

  <div class="container">

    <div class="header">
      <h1>YUKI MATSUURA</h1>
      <h2>YUKI MATSUURA is a Software Engineer in Tokyo,<br>developping and Android App.</h2>
    </div>


    <div>
      <div class="grid">
        <div class="grid-item" v-on:click="about">
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img src="@/assets/github.jpg" />
            <p>Github</p>
          </el-card>
        </div>
        <div class="grid-item" v-on:click="research">
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img src="@/assets/foretuneapp.jpg" />
            <p>Fortune App</p>
          </el-card>
        </div>
        <div class="grid-item" v-on:click="portfolio">
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img src="@/assets/blog.jpg" />
            <p>Blog</p>
          </el-card>
        </div>
      </div>

    </div>

  </div>

</template>

<script>

export default {
  data() { },
  methods: {
    about() {
      this.$router.push('/about')
    },
    research() {
      this.$router.push('/research')
    },
    portfolio() {
      this.$router.push('/portfolio')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-left: 20%;
  padding-right: 20%;
}

.contents {
  display: flex
}


.section {
  display: flex;
}

.photo {
  width: 50%;
}

.explanation {}

img {
  width: 100%;
  display: block;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.grid-item {
    text-align: center;
}

</style>