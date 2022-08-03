<template>
  <div class="container">

    <div class="header">
      <h1>YUKI MATSUURA</h1>
      <h2>Software Engineer</h2>
    </div>

    <div class="contents">
      <div class="about">
        <h3>About</h3>
        <div class="about-detail">
          <div class="about-en">
            <p>
              Hello, my name is Hirohisa Matsuura.
              My name is Hirohisa Matsuura, and thank you for visiting my website.
              I am currently developing applications as an Android engineer.
              The power of computers is infinite.
              My motto is to bring smiles to as many people as possible through computers.
              I would be happy if you could get to know Hirohisa Matsuura a little better.
              Thank you very much.
            </p>
          </div>
          <div class="about-ja">
            <p>
              こんにちは。松浦裕久です。webサイトを閲覧していただき、ありがとうございます。
              現在、Androidエンジニアとして、アプリ開発を行っております。
              コンピュータの力は無限大です。
              コンピュータを通して、より多くの方へ笑顔を届けることをモットーに、日々、開発作業を進めております。
              少しでも松浦裕久のことを知っていただけると幸いです。
              よろしくお願いします。
            </p>
          </div>
        </div>
      </div>

      <div class="detail">

        <div class="skills">

          <div class="skill">
            <h3>Skills</h3>
            <p>Java / Kotlin / Javascript/ Swift</p>
          </div>

          <div class="certification">
            <h3>Certifications</h3>
            <p>基本情報処理技術者資格</p>
            <p>応用情報処理技術者資格</p>
            <p>AWS Solution Architect Associate</p>
          </div>

        </div>

        <div class="histories">
          <h3>History</h3>
          <div class="history">
            <p>1995.12 大阪府東大阪市に誕生</p>
            <p>2014.04 神戸大学電気電子工学科に入学</p>
            <p>2018.04 神戸大学大学院電気電子工学専攻に入学</p>
            <p>2020.04 富士通株式会社に入社</p>
            <p>2022.05 株式会社プログリットに中途入社</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-size: 24px;
}

.container {
  padding-left: 20%;
  padding-right: 20%;
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

.about-ja {
  width: 50vw;
  margin-left: auto;
  padding-left: 30px;
  font-size: 16px;
  line-height: 30px;
}

.detail {
  display: flex;
}

.skills {
  width: 50vw;
  text-align: left;
  padding-right: 30px;
}

.skill {
  text-align: left;
  font-size: 18px;
  line-height: 30px;
}

.certification {
  text-align: left;
  font-size: 16px;
  line-height: 30px;
}

.histories {
  width: 50vw;
  text-align: left;
  padding-left: 30px;
}

.history {
  font-size: 16px;
  line-height: 30px;
}

</style>