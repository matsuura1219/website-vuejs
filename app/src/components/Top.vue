<template>

  <div class="container">

    <div class="header">
      <h1>YUKI MATSUURA</h1>
      <h2>YUKI MATSUURA is a Software Engineer in Tokyo,<br>developping and Android App.</h2>
    </div>


    <div>

      <div class="contents" v-on:click="about">
        <el-card shadow="always" :body-style="{ padding: '0px' }">
        <div class="section">
          <div class="photo">
            <img src="@/assets/github.jpg" />
          </div>
          <div class="explanation">
            <h4>About</h4>
            <p>Welcome to my website. Hello, everyone. My name is Yuki Matsuura.</p>
          </div>
        </div>
        </el-card>
      </div>

      <div class="contents" v-on:click="research">
        <el-card shadow="always" :body-style="{ padding: '0px' }">
        <div class="section">
          <div class="explanation">
            <h4>Research</h4>
            <p>I researched about wearable / uniquitus computing in Kobe Univ.</p>
          </div>
          <div class="photo">
            <img src="@/assets/github.jpg" />
          </div>
        </div>
        </el-card>
      </div>

      <div class="contents" v-on:click="portfolio">
        <el-card shadow="always" :body-style="{ padding: '0px' }">
        <div class="section">
          <div class="photo">
            <img src="@/assets/github.jpg" />
          </div>
          <div class="explanation">
            <h4>Portfolio</h4>
            <p>Introduce my hobby.</p>
          </div>
        </div>
        </el-card>
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

* {
  font-family: 'Alegreya Sans SC', serif;
}

h4 {
  font-size: 24px;
}

.header {
  margin-bottom: 40px;
}

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

.contents {
  width: 50vw;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}

.section {
  display: flex;
  text-align: left;
}

.photo {
  width: 25vw;
}

.explanation {
  width: 25vw;
  padding-left: 30px;
  padding-right: 30px;
}

</style>