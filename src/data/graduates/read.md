### 卒業生
jsonで管理をしてください。
とりあえずの実装ですので、うまく改造してもらって構いません。

### 形式
graduates.json内に、以下の形式で書き込んでいってください。

{
    "year" : xxxx,
    "degree" : "xxxx"
    "name" : "xxx xxx"
}

year: 卒業年度。西暦で書こう。
degree: 学位。Master, Bachelor, Postgraduate
name: 氏名。統一したいので、苗字と名前の間に半角スペース入れましょう。
chatGPTに指示したらやってくれるでしょう。

### 英語表記（任意）
英語ページ（/en/members）では、`name_en` があればそちらを表示し、無ければ `name` をそのまま表示します。

{
    "year" : 2025,
    "degree" : "Master",
    "name" : "野田 千尋",
    "name_en" : "Chihiro Noda"
}
