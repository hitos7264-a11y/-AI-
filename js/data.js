/* ============================================================
   data.js — サイト全体で使用する静的データ
============================================================ */

window.SITE_DATA = {
  site: {
    title: "四社合同の日本AI基盤モデル開発",
    date: "2026年4月19日",
    subtitle: "オールジャパン連合で挑む国産AIの大勝負",
  },

  // 全15章のインデックス
  chapters: [
    { id: "01", slug: "01-founding",      label: "PROLOGUE",     title: "設立の衝撃と、水面下で進んでいた周到な準備", excerpt: "2026年4月12日、日本のテクノロジー産業の地図を塗り替えかねない一報。しかし会社の実体は遥かに前から静かに準備されていた。" },
    { id: "02", slug: "02-capital",       label: "CHAPTER 02",   title: "資本構成と「オールジャパン連合」の布陣",       excerpt: "中核四社の周囲に、日本製鉄・神戸製鋼、三メガバンク、PFN──日本の基幹産業のほぼ全てが結集した。" },
    { id: "03", slug: "03-president",     label: "CHAPTER 03",   title: "初代社長をめぐる符号──丹波廣寅氏の「栄転」",     excerpt: "SB Intuitions代表を退任した日付と、新会社が本店移転した日が完全に一致するという偶然の一致。" },
    { id: "04", slug: "04-tech-target",   label: "CHAPTER 04",   title: "技術目標──一兆パラメーターのマルチモーダル基盤", excerpt: "従来の国産モデルの約33倍。規模だけでなく、マルチモーダル×フィジカルAIに照準を定める。" },
    { id: "05", slug: "05-roles",         label: "CHAPTER 05",   title: "四社の役割分担──「作る側」と「使い倒す側」",     excerpt: "SoftBank・NECが頭脳を作り、ホンダ・ソニーが頭脳を使い倒す。構造的な二層設計。" },
    { id: "06", slug: "06-government",    label: "CHAPTER 06",   title: "政府支援の枠組み──NEDO・GENIAC・一兆円",         excerpt: "経産省の五年一兆円規模支援、単年度で最大3800億円。国家戦略として設計された公募。" },
    { id: "07", slug: "07-datacenter",    label: "CHAPTER 07",   title: "データセンター基盤──苫小牧と堺の二極体制",       excerpt: "北海道苫小牧は東京ドーム15個分の70ha、300MW。大阪堺はシャープ液晶工場跡地。" },
    { id: "08", slug: "08-physical-ai",   label: "CHAPTER 08",   title: "「フィジカルAI」という非対称戦略",               excerpt: "汎用LLMで米中と正面衝突せず、日本が70%シェアを誇る産業ロボットの土俵で戦う。" },
    { id: "09", slug: "09-softbank",      label: "CHAPTER 09",   title: "ソフトバンクをめぐる「矛盾」とその合理性",        excerpt: "Stargateで米国に400億ドル賭けつつ、日本では米国依存を断つ会社の中核に座る二正面戦略。" },
    { id: "10", slug: "10-demographics",  label: "CHAPTER 10",   title: "日本の人口動態という、避けられない時限爆弾",      excerpt: "2040年までに1100万人の労働力不足。フィジカルAIは算術的危機への産業側の応答である。" },
    { id: "11", slug: "11-concerns",      label: "CHAPTER 11",   title: "見過ごされがちな懸念と、立ちはだかる四つの壁",    excerpt: "勝てる領域の不明確性、実装ギャップ、財務余力、開発体制の小ささ、ステージゲート。" },
    { id: "12", slug: "12-market",        label: "CHAPTER 12",   title: "市場の反応──「フィジカルAI」が人気テーマ化",      excerpt: "ファナック、安川電機をはじめとする関連銘柄への物色。週明けに人気テーマ6位へ急浮上。" },
    { id: "13", slug: "13-consortium",    label: "CHAPTER 13",   title: "コンソーシアム構想──モデル開放と業種別最適化",   excerpt: "一兆パラメーター基盤を共通インフラとして、業界ごとの特化型モデルを派生させる二層構造。" },
    { id: "14", slug: "14-longterm",      label: "CHAPTER 14",   title: "二〇三〇年に向けた長期展望",                     excerpt: "一兆パラメーターのモデルをロボット・産業機械と実装する。物理層の作り込みが不可欠。" },
    { id: "15", slug: "15-history",       label: "EPILOGUE",     title: "日本のAI戦略史における位置づけ",                 excerpt: "個別最適から統合戦略への転換点。「日の丸AI」を象徴する単一の旗艦プロジェクトの誕生。" },
  ],

  // 出資企業
  companies: {
    core: [
      { name: "ソフトバンク",        code: "9434", mark: "SB",  cls: "mark-softbank",   role: "主導・基盤モデル開発・データセンター", note: "東京ポートシティ竹芝。SB Intuitionsで「Sarashina」を開発。北海道苫小牧・大阪堺に巨大DCを建設中。六年間で約1.9兆円投資。", tags: ["中核","基盤開発","インフラ","GPU"] },
      { name: "NEC",                code: "6701", mark: "NEC", cls: "mark-nec",        role: "基盤モデル開発・訓練インフラ",        note: "独自のNEC LLM Supercomputerを保有。国産LLM「cotomi」の開発実績。研究ノウハウの中核的貢献が期待。", tags: ["中核","基盤開発","スパコン","cotomi"] },
      { name: "本田技研工業",        code: "7267", mark: "H",   cls: "mark-honda",      role: "実装・自動運転・人型ロボット",        note: "自動車の自動運転と人型ロボットへのAI実装を想定。新会社モデルの最初の現場配備（ローンチパートナー）。", tags: ["中核","応用","自動運転","ロボット"] },
      { name: "ソニーグループ",      code: "6758", mark: "S",   cls: "mark-sony",       role: "実装・エンタメ・半導体・ロボット",    note: "PlayStation等エンタメ、世界最大シェアのイメージセンサー、ロボット開発へ多面展開。", tags: ["中核","応用","エンタメ","半導体"] },
    ],
    minority: [
      { name: "日本製鉄",            code: "5401", mark: "NS",  cls: "mark-nippon-steel", role: "製鋼プロセスの最適化",                note: "日本の重厚長大産業を代表する鉄鋼大手。高炉の操業最適化にAI活用を視野。", tags: ["少数株主","鉄鋼","製造業"] },
      { name: "神戸製鋼所",          code: "5406", mark: "KS",  cls: "mark-kobe-steel",   role: "鉄鋼領域でのAI活用",                  note: "鉄鋼二社そろい踏み。製造プロセスのデジタル化と最適化。", tags: ["少数株主","鉄鋼","製造業"] },
      { name: "三菱UFJ銀行",         code: "8306", mark: "MUFG",cls: "mark-mufg",        role: "金融業務自動化・信用審査の高度化",   note: "メガバンク筆頭として金融AI活用の旗手。与信判断と不正検知。", tags: ["少数株主","金融","銀行"] },
      { name: "三井住友銀行",        code: "8316", mark: "SMBC",cls: "mark-smbc",        role: "金融業務自動化・与信・不正検知",     note: "三メガバンク全てが出資した意義は大きい。業務自動化と金融AI。", tags: ["少数株主","金融","銀行"] },
      { name: "みずほ銀行",          code: "8411", mark: "MHB", cls: "mark-mizuho",      role: "金融業務自動化・リスク管理",          note: "三大メガバンクの一角。金融領域でのAIユースケースを深化。", tags: ["少数株主","金融","銀行"] },
    ],
    partners: [
      { name: "プリファードネットワークス", code: "PFN",  mark: "PFN", cls: "mark-pfn", role: "技術提携・国産LLM「PLaMo」",         note: "AIスタートアップの雄。西川徹共同創業者代表取締役会長が率いる。深層学習アプリケーションで貢献。", tags: ["技術提携","PLaMo","スタートアップ"] },
    ]
  },

  // 主要タイムライン
  timeline: [
    { date: "2026/01/09", type: "founding", title: "法人番号指定",   desc: "国税庁により法人番号が指定される。当初の商号「竹芝準備八号株式会社」、本店は東京都港区海岸（ソフトバンク本社と同住所）。" },
    { date: "2026/02/18", type: "founding", title: "商号変更",       desc: "商号を「日本AI基盤モデル開発」へ変更。" },
    { date: "2026/02/19", type: "key",     title: "本店移転 & 丹波氏退任", desc: "本店を渋谷区渋谷2-24-12へ移転。同日、丹波廣寅氏がSB Intuitions代表を退任（偶然の一致ではない）。" },
    { date: "2026/02/20", type: "govt",    title: "NEDO公募開始",   desc: "「AIロボット・フィジカルAIを見据えたマルチモーダル基盤モデル開発事業」（P26013）公募開始。" },
    { date: "2026/02/20", type: "founding", title: "井尻氏就任",     desc: "SB Intuitions代表取締役社長CEOに井尻善久氏（前CRO）が就任。" },
    { date: "2026/04/11", type: "press",   title: "読売新聞が先行報道", desc: "「国産AI開発会社、ソフトバンク・NECなど4社中核に設立」を第一報として掲載。" },
    { date: "2026/04/12", type: "press",   title: "各紙一斉報道",   desc: "日経、時事、朝日、産経、TBS、日テレ、共同、Nikkei Asiaなど国内外メディアが一斉に報じる。" },
    { date: "2026/04/15", type: "market",  title: "フィジカルAI人気テーマ化", desc: "週明けの株式市場で「フィジカルAI」が人気テーマ6位へ。ファナック、安川電機、川崎重工等に買い。" },
    { date: "2026/04/16", type: "softbank", title: "ソフトバンク×オラクル発表", desc: "Oracle Alloy採用「Cloud PF Type A」上で6月から「Sarashina」活用型生成AIサービスを提供開始と発表。" },
    { date: "2026/04/22", type: "govt",    title: "NEDO公募応募期限", desc: "応募期限は2026年4月22日（水）正午。新会社は近く応募予定、採択はほぼ確実視。" },
    { date: "2026 年内", type: "future",   title: "採択・事業開始", desc: "NEDO事業として採択後、2026〜2030年度の5年間事業に。単年度最大約3800億円規模の支援。" },
    { date: "2027春頃",   type: "future",  title: "苫小牧AIファクトリー本格稼働", desc: "50MWへ増設完了予定。苫東地域で最大級のAIインフラが立ち上がる。" },
    { date: "2030年度",   type: "future",  title: "マルチモーダル基盤モデル完成", desc: "一兆パラメーター級のモデルを、ロボット・産業機械と実際に連携させる段階へ。" },
    { date: "2040年",     type: "future",  title: "世界市場30%シェア目標", desc: "経産省が掲げる日本のフィジカルAI産業の世界シェア目標。日本ロボット産業の構造的優位を活かす。" },
  ],

  // パラメータ比較
  paramCompare: [
    { name: "日本AI基盤モデル（新会社 目標）", value: 1000, unit: "B", pct: 100, cls: "red" },
    { name: "GPT-4（推定）",                   value: 1800, unit: "B", pct: 100, cls: "red" },
    { name: "DeepSeek-V3",                    value: 671,  unit: "B", pct: 67,  cls: "" },
    { name: "Sarashina2-70B（SB Intuitions）", value: 70,   unit: "B", pct: 7,   cls: "gold" },
    { name: "cotomi（NEC）",                   value: 30,   unit: "B", pct: 3,   cls: "gold" },
    { name: "PLaMo（PFN）",                    value: 30,   unit: "B", pct: 3,   cls: "gold" },
    { name: "tsuzumi（NTT）",                  value: 7,    unit: "B", pct: 0.7, cls: "gold" },
  ],

  // 出資比率（推定）
  pieData: [
    { name: "ソフトバンク",    pct: 15, color: "#e60012" },
    { name: "NEC",             pct: 14, color: "#003f98" },
    { name: "本田技研工業",    pct: 13, color: "#cc0000" },
    { name: "ソニーグループ",  pct: 13, color: "#444" },
    { name: "日本製鉄",        pct: 8,  color: "#00529b" },
    { name: "神戸製鋼所",      pct: 6,  color: "#c8102e" },
    { name: "三菱UFJ銀行",     pct: 10, color: "#d71826" },
    { name: "三井住友銀行",    pct: 10, color: "#00a650" },
    { name: "みずほ銀行",      pct: 8,  color: "#1d3994" },
    { name: "その他",          pct: 3,  color: "#666" },
  ],

  // 関連銘柄（市場）
  relatedStocks: [
    { code: "6954", name: "ファナック",                  category: "産業ロボット大手" },
    { code: "6506", name: "安川電機",                    category: "産業ロボット大手" },
    { code: "6501", name: "日立製作所",                  category: "総合電機・ロボット" },
    { code: "7012", name: "川崎重工業",                  category: "重工・ロボット" },
    { code: "6474", name: "不二越",                      category: "ロボット・工作機械" },
    { code: "6324", name: "ハーモニック・ドライブ・システムズ", category: "精密部品" },
    { code: "6268", name: "ナブテスコ",                  category: "精密部品" },
    { code: "3444", name: "菊池製作所",                  category: "中堅製造業" },
    { code: "7779", name: "CYBERDYNE",                  category: "ロボットスーツ" },
    { code: "6433", name: "ヒーハイスト",                 category: "精密部品" },
    { code: "9434", name: "ソフトバンク",                 category: "新会社中核" },
    { code: "6701", name: "NEC",                         category: "新会社中核" },
    { code: "7267", name: "本田技研工業",                 category: "新会社中核" },
    { code: "6758", name: "ソニーグループ",               category: "新会社中核" },
  ],

  // データセンター
  datacenters: [
    {
      region: "HOKKAIDO / NORTH", name: "北海道苫小牧AIデータセンター", cls: "dc-north",
      specs: [
        { label: "所在地",   value: "苫小牧苫東地域" },
        { label: "敷地面積", value: "約70", unit: "ha（東京ドーム約15個分）" },
        { label: "受電容量", value: "300", unit: "MW超（目標）" },
        { label: "位置づけ", value: "日本最大級" },
      ],
      note: "冷涼な気候と豊富な再エネを武器に。同地域では並行してAI Tech Tomakomaiの「苫小牧AIファクトリー」（約3,500億円、2027年春に50MW）も稼働予定。"
    },
    {
      region: "OSAKA / WEST", name: "大阪堺AIデータセンター", cls: "dc-west",
      specs: [
        { label: "所在地",   value: "大阪府堺市（旧シャープ堺工場跡地）" },
        { label: "転用",     value: "液晶パネル工場→AI基盤" },
        { label: "搭載GPU",  value: "NVIDIA最新AI向け" },
        { label: "位置づけ", value: "西日本拠点" },
      ],
      note: "かつて液晶で世界をリードした場所が、AI時代の計算インフラへと生まれ変わる。日本産業構造の転換を象徴する転用。"
    }
  ],

  // FAQ
  faq: [
    { q: "なぜ四社連合による「日本AI基盤モデル開発」が必要なのか？", a: "米OpenAIや中国DeepSeekが寡占する生成AI領域で、日本の機密性の高い産業データや設備運用データを海外クラウドに預けることはリスクである。また、日本の人口動態（2040年までに約1,100万人の労働力不足）に対応するため、産業ロボットと結合する「フィジカルAI」が不可欠。そこで国内の基幹産業が結集し、国産の1兆パラメーター級基盤モデルを持つことが戦略的に求められた。" },
    { q: "なぜ「一兆パラメーター」という規模なのか？", a: "フィジカルAIはカメラ映像、LiDAR、温度・圧力・加速度センサーといった多様な入力を統合理解し、世界モデルを内包し、ミリ秒単位で制御応答する必要がある。小型モデルでは表現能力が不足するため、GPT-4（約1.8兆）やDeepSeek-V3（6,710億）と肩を並べる1兆規模の受け皿が必要とされる。" },
    { q: "ソフトバンクがアメリカのStargateに参加しながら日本で独立AIを推進するのは矛盾ではないか？", a: "見かけ上は矛盾だが、日本の主権AIは米国AI基盤の「置き換え」ではなく「並行する能力」として設計されている。データ機密性や物理制御要件で海外依存がリスクとなるワークロードに対して、国内完結型の選択肢を提供するもの。ソフトバンクは米国の勝者にも、日本独自の主権AIにも賭ける二正面のヘッジ・ベットを行っている。" },
    { q: "開発体制は約100人とされるが、規模として十分か？", a: "不十分である可能性が指摘されている。OpenAIやGoogle DeepMindの主力チームは数千人規模。採用拡大と、PFNやSB Intuitions等の外部リソースとの連携、NEDO支援による人材育成が持続性の鍵となる。" },
    { q: "NEDOの支援はどれほどの規模か？", a: "経産省は2026年度から5年間で総額1兆円規模の支援を検討。受け皿はNEDO事業「AIロボット・フィジカルAIを見据えたマルチモーダル基盤モデル開発事業」（P26013）で、単年度最大約3,800億円という過去最大級の支援枠。ただし毎年のステージゲート審査によって継続可否が判断される。" },
    { q: "開発されたモデルは出資企業の独占になるのか？", a: "ならない。業界ごとにコンソーシアムを組成し、一兆パラメーターの基盤を共通インフラとして共有したうえで、自動車・鉄鋼・金融・エンタメ等の業種データで特化型モデルを派生させる二層構造。最終的には出資企業以外の日本企業にも広くモデルが提供される方針。" },
  ],

  // 出典データ（カテゴリ別）
  sources: [
    { category: "一次ソース：主要日本語メディア", icon: "fa-newspaper", items: [
      { media: "ビジネス+IT", title: "ソフトバンク、NEC、ソニー、ホンダが国産AI開発の新会社「日本AI基盤モデル開発」", url: "https://www.sbbit.jp/article/cont1/184305" },
      { media: "Yahoo!ニュース（ビジネス+IT転載）", title: "NEC、ソニー、ホンダが国産AI開発の新会社「日本AI基盤モデル開発」", url: "https://news.yahoo.co.jp/articles/fc2f439eb46a32d79fe31499ef5945288fcc48b8" },
      { media: "Yahoo!ニュース（朝日転載）", title: "国産AI開発へ新会社設立 ソフトバンクやNECなど", url: "https://news.yahoo.co.jp/articles/b481497603d38ee58531cd60bd197910c160a589" },
      { media: "日本経済新聞", title: "ソフトバンクが国産AIの新会社設立、NECやホンダなど8社出資", url: "https://www.nikkei.com/article/DGXZQOUC1207B0S6A410C2000000/" },
      { media: "日本経済新聞（別記事）", title: "ソフトバンク、国産AI開発へ新会社 NECなど8社出資", url: "https://www.nikkei.com/article/DGKKZO95616450T10C26A4MM0000/" },
      { media: "時事通信", title: "高性能国産AI開発で新会社 ソフトバンクなど4社中核", url: "https://www.jiji.com/jc/article?k=2026041200244&g=eco" },
      { media: "朝日新聞デジタル", title: "国産AI開発めざし新会社設立 ソフトバンクやNECなど4社中心", url: "https://www.asahi.com/articles/ASV4D1HDQV4DULFA005M.html" },
      { media: "読売新聞オンライン", title: "国産AI開発会社、ソフトバンク・NECなど4社中核に設立", url: "https://www.yomiuri.co.jp/economy/20260411-GYT1T00359/" },
      { media: "産経新聞", title: "国産AI新会社で米中巻き返し図る 政治左右されず ソフト・NEC", url: "https://www.sankei.com/article/20260412-T7JYKY7O5BPEXP3C7CDED76KLQ/" },
      { media: "産経新聞（続報）", title: "国産AI開発へ 4社中心の新会社「日本AI基盤モデル開発」社長には…", url: "https://www.sankei.com/article/20260412-LZTHXKQN3JIT5DLBN4WGXUHBKI/" },
      { media: "スポニチ Sponichi Annex", title: "国産AI開発へ 4社中心の新会社「日本AI基盤モデル開発」社長にはソフトバンク幹部", url: "https://www.sponichi.co.jp/society/news/2026/04/13/kiji/20260412s00042000486000c.html" },
      { media: "日本テレビ系ニュース", title: "大規模な国産AI開発めざし、新会社設立 ソフトバンク、NEC、ホンダ", url: "https://news.ntv.co.jp/category/economy/c37bd2891be34371a83f019987aa9c39" },
      { media: "TBS NEWS DIG", title: "「国産AI」開発で新会社設立 ソフトバンク・NEC・ホンダ・ソニーグループ4社など中心に", url: "https://newsdig.tbs.co.jp/articles/withbloomberg/2594308?display=1" },
      { media: "TBS NEWS DIG（別URL）", title: "国産AI開発で新会社設立 別記事URL", url: "https://newsdig.tbs.co.jp/articles/-/2594308" },
      { media: "ITmedia AI+", title: "ソフトバンクなどAI基盤モデル開発の新会社設立か 1兆パラメーター規模モデルでフィジカルAI開発目指す", url: "https://www.itmedia.co.jp/aiplus/articles/2604/13/news084.html" },
      { media: "Ledge.ai", title: "ソフトバンク・NEC・ホンダ・ソニー、国産AI開発で新会社「日本AI基盤モデル開発」", url: "https://ledge.ai/articles/softbank_nec_honda_sony_japan_ai_foundation_model_company" },
    ]},
    { category: "関連業界・技術分析記事", icon: "fa-microscope", items: [
      { media: "自動車産業ポータル（ABA-J／日刊自動車新聞）", title: "国産AI基盤新会社設立、ソフトバンク主導 ホンダ・NEC・ソニーグループなども出資 米中などに対抗へ", url: "https://www.aba-j.or.jp/info/industry/26492/" },
      { media: "Qiita（Yoshi1001）", title: "「日本AI基盤モデル開発」設立を技術者目線で読み解く", url: "https://qiita.com/Yoshi1001/items/f1c463783b5438b336bc" },
      { media: "note（tank_ai）", title: "「日本AI基盤モデル開発」始動――期待と、見落とされがちな懸念と", url: "https://note.com/tank_ai/n/n78ef250e5ef3" },
      { media: "note（yoshiyuki_hongoh）", title: "日本、1兆パラメータ国産AI開発へ1.9兆円投資／ソフトバンク…", url: "https://note.com/yoshiyuki_hongoh/n/nb1bf49d45667" },
      { media: "lilting.ch", title: "ソフトバンク・NEC・ホンダ・ソニーが国産AI新会社「日本AI基盤モデル開発」", url: "https://lilting.ch/articles/japan-ai-foundation-model-development-company" },
      { media: "novaist.jp", title: "ソフトバンク等4社が新会社「日本AI基盤モデル開発」設立 国産AIの…", url: "https://novaist.jp/articles/japan-ai-model-venture/" },
      { media: "Spotify Podcast (Ep.1086)", title: "日本AI基盤モデル開発が設立 \"オールジャパン\"で挑む…", url: "https://open.spotify.com/episode/3J2dTzGHVg1kKo0aGX2Awv" },
    ]},
    { category: "株式市場・金融情報", icon: "fa-chart-line", items: [
      { media: "株探（Kabutan）", title: "ソフトバンクら国産AI新会社設立と報道 〈注目テーマ〉", url: "https://s.kabutan.jp/news/n202604150565/" },
      { media: "アセットアライブ株式情報", title: "株テーマ：日本AI基盤モデル開発の関連銘柄", url: "https://www.asset-alive.com/thema/?mode=show&tid=2402" },
      { media: "Odaily News（日本語版）", title: "ソフトバンクなど日本企業4社が新会社を設立し、国産AI基盤…", url: "https://www.odaily.news/ja/newsflash/476437" },
    ]},
    { category: "英語メディア（海外報道）", icon: "fa-globe", items: [
      { media: "Kyodo News (English)", title: "SoftBank, other major Japan firms set up new company for AI", url: "https://english.kyodonews.net/articles/-/74045" },
      { media: "Nikkei Asia", title: "Japan's SoftBank launches unit to develop homegrown AI", url: "https://asia.nikkei.com/business/technology/artificial-intelligence/japan-s-softbank-launches-unit-to-develop-homegrown-ai" },
      { media: "The Japan Times", title: "SoftBank and others set up new firm to develop high-performance AI", url: "https://www.japantimes.co.jp/business/2026/04/12/companies/softbank-ai-new-firm/" },
      { media: "The Japan News (Yomiuri)", title: "AI Development Firm Established to Develop Japanese 1-Trillion Parameter Model", url: "https://japannews.yomiuri.co.jp/business/companies/20260413-321922/" },
      { media: "The Asahi Shimbun AJW", title: "4 major firms jointly establish domestic AI creation venture", url: "https://www.asahi.com/ajw/articles/16494080" },
      { media: "Nippon.com", title: "SoftBank, Others Set Up New Firm to Develop High-Performance AI", url: "https://www.nippon.com/en/news/yjj2026041200244/" },
      { media: "TechWire Asia", title: "Japan Bets Big on Physical AI With SoftBank, Honda, Sony and NEC", url: "https://techwireasia.com/2026/04/japan-physical-ai-softbank-nec-honda-sony/" },
      { media: "SiliconANGLE", title: "Japanese tech giants launch joint venture targeting physical AI for robots and machines", url: "https://siliconangle.com/2026/04/13/japanese-tech-giants-launch-joint-venture-targeting-physical-ai-robots-machines/" },
      { media: "Yahoo Finance", title: "Japan's Tech Titans Just Teamed Up to Build a Trillion-Parameter AI", url: "https://finance.yahoo.com/sectors/technology/articles/japans-tech-titans-just-teamed-210103504.html" },
      { media: "DigiTimes", title: "Japan forges physical AI alliance to challenge US and China", url: "https://www.digitimes.com/news/a20260415VL204/asia-industrial-nikkei-honda-development.html" },
      { media: "Intellectia.ai", title: "Japanese Firms Establish New AI Company for 1T-Parameter Foundation Model for Physical AI", url: "https://intellectia.ai/news/stock/sources-softbank-sony-honda-and-six-other-japanese-companies-launch-a-new-ai-company-to-develop-a-1tparameter-foundation-model-for-physical-ai-by-2030-natsuki-yamamotonikkei-asia" },
      { media: "Kingy AI", title: "The Japan Physical AI Revolution: Robots, Trillion-Parameter AI", url: "https://kingy.ai/news/the-japan-physical-ai-revolution-robots-trillion-parameter-ai/" },
      { media: "TheresARobotForThat", title: "Japan's $6.28B bet on physical AI for robots", url: "https://www.theresarobotforthat.com/japans-628b-bet-on-physical-ai-for-robots/" },
      { media: "Techjack Solutions", title: "Japan Targets 30% of the Global AI Robot Market by 2040", url: "https://techjacksolutions.com/ai-brief/japan-targets-30-of-the-global-ai-robot-market-by-2040-who-h/" },
      { media: "毎日経済（mk.co.kr）", title: "ソニーグループ株式会社など、日本を代表する企業各社が手…", url: "https://www.mk.co.kr/jp/world/12014862" },
      { media: "Binance Square", title: "Japanese Companies Unite to Develop Domestic AI Foundation Model", url: "https://www.binance.com/en/square/post/04-13-2026-ai-ai-311931810900177" },
    ]},
    { category: "政府・公的機関", icon: "fa-landmark", items: [
      { media: "NEDO", title: "AIロボット・フィジカルAIを見据えたマルチモーダル基盤モデル開発事業（P26013）", url: "https://www.nedo.go.jp/koubo/CD2_100431.html" },
      { media: "NEDO", title: "2026年度AI公募一覧", url: "https://www.nedo.go.jp/koubo/2026_list_05_03.html" },
      { media: "NEDO", title: "公募関連補足資料（PDF）", url: "https://www.nedo.go.jp/content/800051828.pdf" },
      { media: "NEDO", title: "公募ポリシー文書（PDF）", url: "https://www.nedo.go.jp/content/800051758.pdf" },
      { media: "J-Grants", title: "電子申請ポータル", url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDY3BMAX?wfid=a0XJ2000006k4aGMAQ" },
      { media: "経済産業省", title: "GENIAC（Generative AI Accelerator Challenge）", url: "https://www.meti.go.jp/policy/mono_info_service/geniac/index.html" },
      { media: "経済産業省", title: "GENIAC 生成AI基盤モデル開発者紹介", url: "https://www.meti.go.jp/policy/mono_info_service/geniac/selection_3/index.html" },
      { media: "GENIAC-PRIZE", title: "NEDO懸賞金活用型プログラム", url: "https://geniac-prize.nedo.go.jp/" },
      { media: "研究費サーチ", title: "GENIAC関連", url: "https://grant-search.com/grant/108/" },
      { media: "Stayway", title: "補助金クラウド AIロボット・フィジカルAI公募解説", url: "https://biz.stayway.jp/hojyo_detail/70610/" },
    ]},
    { category: "ソフトバンクグループ・SB Intuitions", icon: "fa-building", items: [
      { media: "SB Intuitions", title: "代表取締役の交代に関するお知らせ（2026/02/20）", url: "https://www.sbintuitions.co.jp/news/press/20260220_01/" },
      { media: "SB Intuitions", title: "会社情報ページ", url: "https://www.sbintuitions.co.jp/company/" },
      { media: "SB Intuitions", title: "独自の日本語LLMを構築", url: "https://www.sbintuitions.co.jp/news/press/20240614_01/" },
      { media: "SB Intuitions", title: "コピーライティング特化型AI", url: "https://www.sbintuitions.co.jp/news/press/20250925_01/" },
      { media: "SB Intuitions note", title: "「日本人の感性に寄り添う音声AI」の追求", url: "https://note.com/sb_intuitions/n/n9d17902caa61" },
      { media: "SB Intuitions note", title: "採用記事", url: "https://note.com/sb_intuitions/n/n545283cc9ac6" },
      { media: "ITmedia AI+", title: "SB Intuitions、突然の社長交代", url: "https://www.itmedia.co.jp/aiplus/articles/2602/20/news085.html" },
      { media: "ソフトバンク公式", title: "国産LLM「Sarashina」活用生成AIサービスを2026年6月から", url: "https://www.softbank.jp/corp/news/press/sbkk/2026/20260416_02/" },
      { media: "ソフトバンク", title: "AX with SoftBank（SBW2025基調講演）", url: "https://www.softbank.jp/business/content/blog/202508/sbw2025-softbank-sakurai-conversation" },
      { media: "ソフトバンク", title: "国産生成AIが切り拓く未来：SB Intuitionsの挑戦（SBW2024）", url: "https://www.softbank.jp/business/content/blog/202410/sbw2024-softbank-tamba-keynote-speech" },
      { media: "SoftBank (EN)", title: "Sovereign AI as a Growth Driver: Message from Head of Homegrown Generative AI Development", url: "https://www.softbank.jp/en/sbnews/entry/20251113_01" },
      { media: "ソフトバンク", title: "AIと共存する社会カテゴリ", url: "https://www.softbank.jp/sbnews/archive/category/_AIと共存する社会" },
      { media: "ソフトバンク", title: "宮川社長 基調講演（SBW2023）", url: "https://www.softbank.jp/business/content/blog/202310/sbw2023-softbank-miyakawa-keynote-speech" },
      { media: "SoftBank Corp. (EN)", title: "Corporate Philosophy", url: "https://group.softbank/en/philosophy/dreams/relationships-and-social-interactions/softbank-corp" },
      { media: "Ledge.ai", title: "「今やらなければ参加権がない」ソフトバンクが生成AI子会社設立", url: "https://ledge.ai/articles/softbank-generative-ai-company" },
      { media: "SB Intuitions X", title: "公式アカウント（Sarashina関連）", url: "https://x.com/sbintuitions/status/2044582011042730270" },
    ]},
    { category: "Preferred Networks (PFN)", icon: "fa-brain", items: [
      { media: "Preferred Networks", title: "生成AI基盤モデル事業ページ", url: "https://www.preferred.jp/ja/business/genai" },
      { media: "Preferred Networks", title: "企業情報", url: "https://www.preferred.jp/ja/company" },
      { media: "Preferred Networks", title: "日本語トップページ", url: "https://www.preferred.jp/ja" },
      { media: "Preferred Networks", title: "英語サイト", url: "https://www.preferred.jp/en" },
      { media: "Preferred Networks", title: "PLaMoデジタル庁試験導入プレスリリース", url: "https://www.preferred.jp/news/783" },
      { media: "PLaMo", title: "製品サイト", url: "https://plamo.preferredai.jp/" },
      { media: "Hugging Face", title: "PFN モデルリリース", url: "https://huggingface.co/pfnet/models" },
      { media: "METI", title: "GENIACキーパーソンインタビュー（PFN）", url: "https://www.meti.go.jp/policy/mono_info_service/geniac/geniac_magazine/keyperson_2.html" },
      { media: "note", title: "Preferred Networks：深層学習で現実世界を変革する日本のAIスタートアップ", url: "https://note.com/noble_daisy4722/n/nf5f2e8fb95d5" },
      { media: "NICT", title: "PFN・さくらインターネット・NICT連携プレスリリース", url: "https://www.nict.go.jp/press/2025/09/18-1.html" },
      { media: "NII LLMC", title: "PFN AIガバナンスへの取り組み（PDF）", url: "https://llmc.nii.ac.jp/wp-content/uploads/2025/07/20250723_oono.pdf" },
    ]},
    { category: "データセンター・インフラ", icon: "fa-server", items: [
      { media: "Next SC Hokkaido", title: "【2027年春】苫小牧のデータセンターに巨大なAI拠点が誕生？", url: "https://next-sc-hokkaido.com/tomakomai-ai-datacenter/" },
      { media: "日本経済新聞", title: "北海道・苫小牧に5万KWのAIデータセンター、3500億円投資", url: "https://www.nikkei.com/article/DGXZQOFC301BM0Q6A130C2000000/" },
      { media: "Introl", title: "日本の1350億ドルAI革命：量子+GPUインフラ", url: "https://introl.com/ja/blog/japan-ai-infrastructure-135-billion-investment-2025" },
      { media: "PR TIMES", title: "ゲットワークス苫小牧拠点", url: "https://prtimes.jp/main/html/rd/p/000000018.000141706.html" },
      { media: "k-tai Watch", title: "ソフトバンク決算・堺AIデータセンター", url: "https://k-tai.watch.impress.co.jp/docs/news/1661896.html" },
      { media: "ITmedia エンタープライズブログ", title: "アメリカの大型AIデータセンター20案件を整理", url: "https://blogs.itmedia.co.jp/serial/2025/10/ai20ai.html" },
      { media: "ITmedia", title: "Stargate電源：4.5GWを供給するのは…", url: "https://blogs.itmedia.co.jp/serial/2025/03/openaistargate45gwcrusoeai.html" },
      { media: "ZDNET Japan", title: "米新政権が打ち出した巨額AI投資計画「Stargate Project」", url: "https://japan.zdnet.com/article/35228614/" },
      { media: "ZDNET Japan", title: "AI新時代で孫正義氏が示した「人間が手放す仕事」", url: "https://japan.zdnet.com/article/35235627/" },
    ]},
    { category: "SNS・動画・その他関連", icon: "fa-share-nodes", items: [
      { media: "Facebook", title: "Japan Times投稿", url: "https://www.facebook.com/thejapantimes/posts/softbank-nec-sony-and-honda-will-establish-a-new-company-to-develop-japanese-mad/1361650876000497/" },
      { media: "Facebook", title: "Nikkei Asia投稿", url: "https://www.facebook.com/nikkeiasia/posts/japans-softbank-launches-unit-to-develop-homegrown-ai/1365018172328111/" },
      { media: "Facebook", title: "WION News 物理AI関連", url: "https://www.facebook.com/WIONews/posts/japan-bets-big-on-physical-ai-japan-launches-634-billion-plan-to-build-physical-/1315604960678675/" },
      { media: "Facebook", title: "WION Video 物理AI関連", url: "https://www.facebook.com/WIONews/videos/japan-bets-big-on-physical-ai-japan-launches-634-billion-plan-to-build-physical-/3424447254376180/" },
      { media: "Facebook", title: "India Today投稿", url: "https://www.facebook.com/IndiaToday/posts/china-is-already-deploying-robots-at-scale-while-japan-is-backing-its-own-physic/1546829590813917/" },
      { media: "Instagram", title: "Japan Physical AI", url: "https://www.instagram.com/p/DW2R3o8lCX5/" },
      { media: "YouTube", title: "SoftBank等4社設立関連ニュース", url: "https://www.youtube.com/watch?v=Z4yK4oeK_PA&vl=ja" },
      { media: "YouTube", title: "ソフトバンク・NEC・ホンダ・ソニー連合が日本産AIを開発", url: "https://www.youtube.com/watch?v=MqxU3wtU8xI" },
      { media: "YouTube", title: "Japan Launches $6.34 Billion Plan To Build Physical AI", url: "https://www.youtube.com/watch?v=YG9UG6a8JjE" },
      { media: "X (Twitter)", title: "トレンド：ソフトバンクら国産AI新会社設立 フィジカルAI開発へ", url: "https://x.com/i/trending/2043112213230047287" },
      { media: "X", title: "The_Japan_News投稿", url: "https://x.com/The_Japan_News/status/2043782525202416088" },
      { media: "X", title: "xYC9iRhquY6c0yO投稿", url: "https://x.com/xYC9iRhquY6c0yO/status/2043863301525066126" },
      { media: "X", title: "TeKe0824投稿：Stargate関連", url: "https://x.com/TeKe0824/status/1881854122082894333" },
      { media: "Facebook", title: "NEDO Startup Club（GENIAC第3期採択）", url: "https://www.facebook.com/nedo.startup.club/posts/122157234038386197/" },
      { media: "楽天", title: "プレスリリース（GENIAC採択）", url: "https://corp.rakuten.co.jp/news/press/2025/0715_02.html" },
      { media: "NICT", title: "SB Intuitions・NICT共同研究プレスリリース", url: "https://www.nict.go.jp/press/2026/02/26-1.html" },
      { media: "SB-BIT", title: "NICT・SB Intuitions連携", url: "https://www.sbbit.jp/article/cont1/181612" },
      { media: "Yahoo Finance", title: "AI and Trump 2.0 propel SoftBank CEO Masayoshi Son", url: "https://finance.yahoo.com/news/ai-trump-2-0-propel-120000574.html" },
      { media: "Wikipedia", title: "Masayoshi Son", url: "https://en.wikipedia.org/wiki/Masayoshi_Son" },
      { media: "Wikipedia", title: "SoftBank Group", url: "https://en.wikipedia.org/wiki/SoftBank_Group" },
      { media: "LinkedIn", title: "SoftBank投稿", url: "https://www.linkedin.com/posts/softbankgroup_ai-asi-softbankgroup-activity-7351883437479247872-D8dc" },
    ]},
  ]
};
