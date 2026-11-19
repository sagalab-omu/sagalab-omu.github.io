### メンバー
jsonで管理してください。
基本構成の例はこれ

{
  "name": "橋本 直樹",
  "role": "Master's Student(2nd Year)",
  "bio": "大阪公立大学情報学研究科学際情報専攻の修士2年生です。主に、進化計算とGPGPUを用いた可視化の研究を行っています。趣味では、ボランティア活動などを行っています。ネイティブアプリの開発を中心に行ってきましたが、最近はWebアプリケーションの開発にも興味を持っています。",
  "photo": "~/assets/images/members/naoki.png",
  "github": "https://github.com/badsparky",
  "research-area": ["可視化", "機械学習", "コンピュータグラフィックス"]
}


### 命名規則
ファイル名で表示がソートされるため、以下のように実装しました
0x: 教授
1x: M2
2x: M1
3x: B4
4x: B3
5x: 留学生

### 英語版（en フィールド）
英語ページ（/en/members）では、`en` オブジェクトの中身で `name` / `bio` / `research-area` を上書きして表示します。
`role` はもともと英語なので `en` には不要です。`en` が無いメンバーは日本語のまま表示されます。

```json
{
  "name": "野田 千尋",
  "role": "Master's Student (2nd Year)",
  "bio": "M2です。主に進化計算と情報可視化技術の融合について研究しています。…",
  "photo": "~/assets/images/members/chihiro.jpg",
  "research-area": ["情報可視化", "進化計算", "エッジバンドリング"],
  "github": "https://github.com/luvClorinde",
  "en": {
    "name": "Chihiro Noda",
    "bio": "I'm a second-year master's student. My research combines evolutionary computation with information visualization. …",
    "research-area": ["Information Visualization", "Evolutionary Computation", "Edge Bundling"]
  }
}
```

- 英語名は「名 姓」の順で書いてください（例: Chihiro Noda）。
- bio が空欄のメンバーは、`en.bio` も空欄のままで構いません。
