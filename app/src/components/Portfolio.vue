<template>
  <div class="container">

    <div class="header">
      <h1>YUKI MATSUURA</h1>
      <h2>Software Engineer</h2>
    </div>

    <div>
      <div class="title">
        <h3>〜 Portfolio 〜</h3>
      </div>
      <div class="grid">
        <div class="grid-item" v-on:click="github">
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img src="@/assets/github.jpg" />
            <p>Github<br>〜 matsuura1219 〜</p>
          </el-card>
        </div>
        <div class="grid-item" v-on:click="fortuneapp">
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img src="@/assets/foretuneapp.jpg" />
            <p>Fortune App<br>〜 占いアプリ 〜</p>
          </el-card>
        </div>
        <div class="grid-item" v-on:click="blog">
          <el-card shadow="always" :body-style="{ padding: '0px' }">
            <img src="@/assets/blog.jpg" />
            <p>Blog<br>〜 はてなブログ 〜</p>
          </el-card>
        </div>
        <div class="grid-item">
          <el-card shadow="none" :body-style="{ padding: '0px' }">
            <div class="is-closed">
              <img src="@/assets/github.jpg" />
            </div>
            <p>FaceMusic（公開停止中）<br>〜 楽曲提案アプリ 〜</p>
          </el-card>
        </div>
        <div class="grid-item">
          <el-card shadow="none" :body-style="{ padding: '0px' }">
            <div class="is-closed">
              <img src="@/assets/github.jpg" />
            </div>
            <p>FaceDiary（開発中）<br>〜 日記アプリ 〜</p>
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
    github() {
      const url = 'https://github.com/matsuura1219'
      window.location.href = url
    },
    fortuneapp() {
      const url = 'https://play.google.com/store/apps/details?id=jp.matsuura.fortuneapp'
      window.location.href = url
    },
    blog() {
      const url = 'https://matsuurayuki1219.hateblo.jp/'
      window.location.href = url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  font-family: 'Alegreya Sans SC', serif;
}

h3 {
  font-size: 24px;
}

.container {
  padding-left: 15vw;
  padding-right: 15vw;
}

.header {
  margin-bottom: 40px;
}

.title {
  text-align: left;
}

.about {
  text-align: left;
}

.about-detail {
  display: flex;
}

.about-en {
  width: 50vw;
  margin-right: auto;
  padding-right: 30px;
  font-size: 18px;
  line-height: 30px;
}

.is-closed {
  background-color: black;
}

.is-closed img {
  opacity: 0.6;
}

.about-ja {
  width: 50vw;
  margin-left: auto;
  padding-left: 30px;
  font-size: 16px;
  line-height: 30px;
}

.detail {
  text-align: left;
}

.detail li {
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}

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
  margin-bottom: 20px;
}
</style>