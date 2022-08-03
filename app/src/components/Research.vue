<template>
  <div class="container">

    <div class="header">
      <h1>YUKI MATSUURA</h1>
      <h2>in Kobe Univ.<br>Department of Electrical and Electronic Engineering</h2>
    </div>

    <div class="contents">
      <div class="about">
        <h3>Overiview</h3>
        <div class="about-detail">
          <div class="about-en">
            <p>
              I conducted research in the field of wearable and ubiquitous computing.
              I investigated the optimal font on the Head Mounted Display considering the swaying that occurs while walking, 
              and gave a presentation on stage at an international conference and submitted a paper to a journal.
            </p>
          </div>
          <div class="about-ja">
            <p>
              ウェアラブル・ユビキタスコンピューティング分野の研究を行っていました。
              歩行中に生じる揺れを考慮したHead Mounted Display上での最適なフォントを調査し、
              国際学会での登壇発表や論文誌への投稿を行いました。
            </p>
          </div>
        </div>
      </div>

      <div class="detail">
        
        <h3>History</h3>

        <div class="list">
          <ul>
            <li>
              松浦裕久, 磯山直也, 寺田努, 塚本昌彦: 
              日常動作から生じるHMD の揺れのシミュレーションに基づくフォントの可読性評価, 
              ユビキタスウェアラブルワーク ショップ2017 (UWW 2017), p. 11 (Dec. 2017).
              </li>
              <li>
              松浦裕久, 寺田努, 青木友裕, 園田晋, 磯山直也, 塚本昌彦: 
              日常動作から生じるHMD の揺れを再現したシミュレータによるフォントの可読性評価, 
              情報処理学会マルチメディア, 分散, 協調とモバイルシンポジウム(DICOMO2018) 論文集, 
              pp. 152-159 (July 2018).
              </li>
              <li>
              青木友裕, 寺田努, 松浦裕久: ウェアラブル端末でのフォントのあり方とは？, 
              CEDEC2018 (Aug. 2018).
              </li>
              <li>
              松浦裕久, 寺田努, 青木友裕, 園田晋, 磯山直也, 塚本昌彦: 
              日常動作から生じるHMDの揺れを考慮したフォントの可読性・可視性の実機評価, 
              ユビキタスウェアラブルワークショップ2018 (UWW 2018), 
              p. 22 (Dec. 2018).
              </li>
              <li>
              松浦裕久, 寺田努, 青木友裕, 園田晋, 磯山直也, 塚本昌彦: 
              日常生活時におけるHMDの揺れを考慮したフォントの可読性・可視性に関する実機評価, 
              情報処理学会インタラクション2019, 
              pp. 685-686 (Mar. 2019).
              </li>
              <li>
              松浦裕久, 寺田努, 青木友裕, 園田晋, 磯山直也, 塚本昌彦: 
              HMD装着時の歩行による画面揺れを考慮したフォントの可読性・可視性の実機評価, 
              情報処理学会研究報告(モバイルコンピューティングとユビキタス通信研究会), 
              Vol. 2019-MBL-91, No. 4, pp. 1-8 (May 2019).
              </li>
              <li>
              Y. Matsuura, T. Terada, T. Aoki, S. Sonoda, N. Isoyama, and M. Tsukamoto: 
              Readability and Legibility of Fonts Considering Shakiness of Head Mounted Displays, 
              Proc. of the 23rd International Symposium on Wearable Computers (ISWC 2019), 
              pp. 150-159 (Sep. 2019).
              </li>
              <li>
              松浦裕久, 寺田努, 秋末大作, 園田晋, 磯山直也, 塚本昌彦: 
              歩行時のHMDの揺れによる文字の読みづらさを緩和するための動的フォント切り替え手法, 
              ユビキタスウェアラブルワークショップ2019 (UWW 2019), 
              p. 1 (Dec. 2019).
              </li>
              <li>
              松浦裕久: 
              日常生活時におけるHMDの揺れを考慮したフォントの可読性・可視性に関する実機評価, 
              情報処理学会UBI研究会, 
              国際会議発表奨励賞(Dec. 2019).
              </li>
          </ul>

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
  text-align: left;
}

.detail li {
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>