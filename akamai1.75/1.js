window=global;
location={
  href:'https://www.koreanair.com/booking/select-flight/departure'
}
var navigator={
  "pua":"'Mozilla/5.0 (Windows;14.0.0;x86;64;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36'",
  "userAgent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
  "productSub": "20030107",
    "language": 'zh-CN',
    "product": 'Gecko',
    "plugins": {0: {},1: {},2: {},3: {}}
}
var document={
  cookie:'99D882422C9A970CB9EC64BA1B8E0EF6~0~YAAQD4yUGzbQKyKCAQAA4jAQVwg8pEwjmxZiqx68t6jfyAxBdlJiF4lDVkJi0L00iSyxxNmv9cyF1BMFfEfn5/bSV2MzWCJU9DcbuSFkHZnJf128HCUzKVGV9c65rF2ctwHu8d2UYRaa6ITvgPm854bclqbafAEchY/7vvsedsikk4/LLGXHxJA7thjcNZ6qARL2Nk+bTnZuXiblixm/ayhFBqMF+ubaiQ751KSjbnbr2BJdSUjwaydpYYoJ8P8fmKuK074QY6g8NNm59d36+NilLTw8Vou5n6LbIg/gLr1DfANdVCssuiL2kllN+CLrJn1EDfUWGGqqi17gKJfcLTgeUPSw9KBceBgvGge1VQ4QlBX/11jxuYExXBDBHggqR1y+7aNTZmSe4Se3sgeDl+b6cIkW4HXt9CQQ~-1~-1~-1'
}
var screen = {
    "availHeight": 1104,
    "availWidth": 2048,
    "width": 2048,
    "height": 1152
}
window["navigator"]=navigator
window["document"]=document

window["screen"] = screen;
window["innerHeight"] = 1002;
window["innerWidth"] = 2048;
window["outerWidth"] = 160;

var  bmak = {
  ver: 1.75,
  ke_cnt_lmt: 150,
  mme_cnt_lmt: 100,
  mduce_cnt_lmt: 75,
  pme_cnt_lmt: 25,
  pduce_cnt_lmt: 25,
  tme_cnt_lmt: 25,
  tduce_cnt_lmt: 25,
  doe_cnt_lmt: 10,
  dme_cnt_lmt: 10,
  vc_cnt_lmt: 100,
  doa_throttle: 0,
  dma_throttle: 0,
  session_id: "default_session",
  js_post: !1,
  loc: "",
  cf_url: "https:",
  params_url: 'https://www.koreanair.com/get_params',
  auth: "",
  api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
  aj_lmt_doact: 1,
  aj_lmt_dmact: 1,
  aj_lmt_tact: 1,
  ce_js_post: 0,
  init_time: 0,
  informinfo: "",
  prevfid: -1,
  fidcnt: 0,
  sensor_data: 0,
  pua: "",
  ins: null,
  cns: null,
  enGetLoc: 0,
  enReadDocUrl: 1,
  disFpCalOnTimeout: 0,
  xagg: -1,
  pen: -1,
  brow: "",
  browver: "",
  psub: "-",
  lang: "-",
  prod: "-",
  plen: -1,
  doadma_en: 0,
  sdfn: [],
  d2: 0,
  d3: 0,
  thr: 0,
  cs: "0a46G5m17Vrp4o4c",
  hn: "unk",
  z1: 0,
  o9: 0,
  vc: "",
  y1: 2016,
  ta: 0,
  tst: -1,
  t_tst: 0,
  ckie: "_abck",
  n_ck: "0",
  ckurl: 0,
  bm: !1,
  mr: "-1",
  altFonts: !1,
  rst: !1,
  runFonts: !1,
  fsp: !1,
  firstLoad: !0,
  pstate: !1,
  mn_mc_lmt: 10,
  mn_state: 0,
  mn_mc_indx: 0,
  mn_sen: 0,
  mn_tout: 100,
  mn_stout: 1e3,
  mn_ct: 1,
  mn_cc: "",
  mn_cd: 1e4,
  mn_lc: [],
  mn_ld: [],
  mn_lcl: 0,
  mn_al: [],
  mn_il: [],
  mn_tcl: [],
  mn_r: [],
  mn_rt: 0,
  mn_wt: 0,
  mn_abck: "",
  mn_psn: "",
  mn_ts: "",
  mn_lg: [],
  ipr: !1,
  loap: 1,
  dcs: 0,
  fpcf: {
        td: 6,
        rVal: "-1",
        rCFP: "-1",
        fpValCalculated: !0,
        fpValstr: '448809179;54595805;dis;,7;true;true;true;-480;true;24;24;true;false;-1',
    },
  get_cookie:function(){
    return document.cookie
  },
  gd:function(){
    var t = navigator.userAgent,
    a = "0",
    e = bmak["start_ts"] / 2,
    n = window["screen"]["availWidth"],
    o =  window["screen"]["availHeight"],
    m = window["screen"]["width"],
    r = window["screen"]["height"],
    i = window["innerHeight"],
    c = window["innerWidth"],
    b = window["outerWidth"];
    bmak["z1"] = parseInt(bmak["start_ts"] / (bmak["y1"] * bmak["y1"]));
    var d = Math["random"](),
        // s = parseInt(1e3 * d / 2),
        k = d + "";
    return t + ",uaend," + "12147" + "," + navigator["productSub"] + "," + navigator["language"] + "," +  navigator["product"] + "," + 5 + "," + 0 + "," + 0 + "," + 0 + "," + bmak["z1"] + "," + (Date["now"]() % 1e7) + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + "',cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1'" + "," + a + "," + k + "," + e + "," + 0 + ",loc:" + bmak["loc"];
  },
  get_cf_date:function(){
    return Date["now"]();
  },
  cal_dis: function (t) {
    var a = t[0] - t[1],
        e = t[2] - t[3],
        n = t[4] - t[5],
        o = Math["sqrt"](a * a + e * e + n * n);
    return Math["floor"](o);
  },
  jrs: function (t) {
    for (var a = Math["floor"](1e5 * Math["random"]() + 1e4), e = String(t * a), n = 0, o = [], m = e["length"] >= 18; o["length"] < 6;) o["push"](parseInt(e["slice"](n, n + 2))), n = m ? n + 3 : n + 2;
    return [a, bmak["cal_dis"](o)];
  },
  ab: function (t) {
    if (null == t) return -1;
      for (var a = 0, e = 0; e < t["length"]; e++) {
        var n = t["charCodeAt"](e);
        n < 128 && (a += n);
      }
      return a;
  },
  to:function(){
    var t = Date["now"]() % 1e7;
    bmak["d3"] = t;
    for (var a = t, e = 3, n = 0; n < 5; n++) {
      var o = parseInt(t / Math["pow"](10, n)) % 10,
          m = o + 1;
      a = a+ m;
    }
    bmak["o9"] = a * e;
  },
  rir: function(t, a, e, n) {
        return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a),
        t
    },
  od: function (t, a) {
    t = String(t), a = String(a);
    var e = [], n = a["length"];
    if (n > 0) {
      for (var o = 0; o < t["length"]; o++) {
        var m = t["charCodeAt"](o),
            r = t["charAt"](o),
            i = a["charCodeAt"](o % n);
        m = bmak["rir"](m, 47, 57, i), m != t["charCodeAt"](o) && (r = String["fromCharCode"](m)), e["push"](r);
      }
      if (e["length"] > 0) return e["join"]("");
    }
    return t;
  },
  bpd: function () {
    // bmak["sd_debug"]("<bpd>");
    var t = 0;

    try {
      t = Date["now"]();
      var a = Math.round(Math.random()*20000*4+10000),
          e = "3";
      bmak["ckie"] && (e = bmak["get_cookie"]());
      var n = bmak["gd"](),
          o = "do_en",
          m = "dm_en",
          r = "t_en",
          i = o + "," + m + "," + r,
          c = "",
          b = location.href,
          d = bmak["aj_type"] + "," + bmak["aj_indx"];
      // bmak["fpValCalculated"]=!0;

      // !bmak["fpcf"]["fpValCalculated"] && (0 == bmak["js_post"] || bmak["aj_indx"] > 0) && bmak["fpcf"]["fpVal"]();
      bmak["d2"] = parseInt(bmak["z1"] / 23)
      var s =7552191,
          l = 'PiZtE',
          u = bmak["jrs"](bmak["start_ts"]),
          _ = bmak["get_cf_date"]() - bmak["start_ts"],
          f = parseInt(bmak["d2"] / 6),
          p = 30261693,
          h = 0,
          v = -1,
          g = [208799, 9404288, bmak["te_vel"] + 32, 1392724, 1100525, bmak["pe_vel"], s, a, bmak["init_time"], bmak["start_ts"], Date["now"](), bmak["d2"], 3, 190, f, 2958, 0, _, 11956071, "0", e, bmak["ab"](e), '177', '-833548130', p, l, u[0], u[1], h, v],
          w = g["join"](","),
          y = "" + bmak["ab"](bmak["fpcf"]["fpValstr"]);
      debugger;
      // bmak["nav_perm"]='11321144241322243122'
      // bmak["fmh"]='8b8ea9b2befcbfc31e65eed4d6b34b59b844fd96e45d5e14426792488cbaeb57'
      // bmak["wr"] ='ANGLE (Intel, Intel(R) UHD Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)'
      // bmak["wv"]='Google Inc. (Intel)'
      // bmak["wl"] =33
      // bmak["weh"]='95f5b71fe531f867faa814bdd4050dd8057206d53ecec1163523560525884870'
      // bmak["firstLoad"] ? bmak["np"]() : bmak["csh"](), !bmak["hbCalc"] && (0 == bmak["js_post"] || bmak["aj_indx"] > 0) && (setTimeout(bmak["fm"], 4e3), setTimeout(bmak["wgl"], 4e3), bmak["hbCalc"] = !0);

      var E = "";
      bmak["hbCalc"] && (E ='8b8ea9b2befcbfc31e65eed4d6b34b59b844fd96e45d5e14426792488cbaeb57,1,e6a6b62042f2333998b8357baa6fe8b776aaad3c0b1692df334f2afaf3954baf,Google Inc. (Intel),ANGLE (Intel, Intel(R) UHD Graphics Direct3D11 vs_5_0 ps_5_0, D3D11),95f5b71fe531f867faa814bdd4050dd8057206d53ecec1163523560525884870,33');
      var S = '0,0,0,0,1,0,0',
          // C = [],
          A = "",
          B = "",
          x = "";
      bmak["mact"]='0,1,10539,865,744;1,1,10558,863,729;2,1,10573,858,709;3,1,10582,856,699;4,1,10600,850,675;5,1,10616,847,663;6,1,10633,841,641;7,1,10650,837,621;8,1,10667,823,592;9,1,10683,822,588;10,1,10699,822,585;11,1,10749,821,585;12,1,11467,820,673;13,1,11502,805,683;14,1,11516,784,679;15,1,11533,774,676;16,1,11549,766,673;17,1,11566,761,669;18,1,11583,760,671;19,1,11616,776,683;20,1,11633,813,689;21,1,11649,827,691;22,1,11666,836,690;23,1,11682,843,690;24,1,11699,858,690;25,1,11716,858,693;26,1,11733,860,695;27,1,11752,863,697;28,1,11769,864,699;29,1,11799,858,699;30,1,11814,855,699;31,1,11849,854,699;32,1,11866,854,702;33,1,11883,856,702;34,1,11899,871,701;35,1,11916,880,695;36,1,11934,895,687;37,1,11949,908,680;38,1,11966,921,675;39,1,11982,933,669;40,1,11999,949,662;41,1,12016,963,659;42,1,12038,977,656;43,1,12067,980,653;44,1,12083,980,650;45,1,12099,981,644;46,1,12116,982,642;47,1,12132,984,640;48,1,12149,985,638;49,1,12166,987,637;50,1,12182,989,636;51,1,12200,990,634;52,1,12223,991,633;53,1,12266,992,632;54,1,12365,984,631;55,1,12383,971,631;56,1,12400,954,633;57,1,12416,933,638;58,1,12433,906,643;59,1,12472,828,641;60,1,12483,685,622;61,1,12500,594,599;62,1,12516,523,589;63,1,12533,473,580;64,1,12549,440,575;65,1,12566,422,573;66,1,12583,414,572;67,1,12724,413,572;68,1,13106,413,774;69,1,13121,413,776;70,1,13137,413,779;71,1,13152,413,780;72,1,13210,414,782;73,1,13285,412,782;74,1,13301,412,780;75,1,13316,409,777;76,1,13338,404,775;77,1,13354,400,773;78,1,13383,393,773;79,1,13399,382,776;80,1,13416,371,780;81,1,13432,361,783;82,1,13449,354,789;83,1,13466,351,790;84,1,13482,350,790;85,3,13741,350,790,-1;86,4,13838,350,790,-1;87,2,13838,350,790,-1;88,1,14186,350,789;89,1,14199,350,788;90,1,14216,348,784;91,1,14232,347,782;92,1,14434,347,780;93,1,14449,348,780;94,1,14466,352,781;95,1,14482,359,784;96,1,14499,364,785;97,1,14516,369,786;98,1,14532,373,786;99,1,14549,375,786;100,1,14666,376,786;101,1,14683,378,786;102,1,14699,379,784;188,4,3416103,849,321,-1;189,4,4552758,844,317,-1;190,4,8661467,847,322,-1;'
      bmak["doact"]='0,121,-1,-1,-1;1,8731,-1,-1,-1;2,23381,-1,-1,-1;3,68013,-1,-1,-1;4,68642,-1,-1,-1;5,178878,-1,-1,-1;6,190861,-1,-1,-1;7,265384,-1,-1,-1;8,293905,-1,-1,-1;9,294763,-1,-1,-1;'
      bmak["vcact"]='2,1728;0,2035;3,2513;1,2539;2,3162;0,3957;3,8495;1,8644;2,14992;0,21073;1,23349;0,26154;1,67984;0,68471;1,68612;0,72455;1,178757;3,178762;2,179356;0,179492;1,190837;0,192609;1,265355;3,266487;2,267082;0,274414;1,293861;0,294464;1,294732;0,294812;1,294938;0,295227;1,340687;0,340827;1,363250;0,363406;1,363603;0,364148;1,365731;0,366394;1,366505;0,367922;1,497446;0,499494;1,527388;0,528770;1,625566;0,627265;1,629410;0,631198;1,669874;0,672304;1,681680;0,682416;1,752588;0,752794;1,752921;0,777560;1,794072;'
      bmak["nav_perm"]='11321144241322243122'
      bmak["sensor_data"] = bmak["ver"] + "-1,2,-94,-100," + n + "-1,2,-94,-131," + navigator.pua + "-1,2,-94,-101," + i + "-1,2,-94,-105," + '' + "-1,2,-94,-102," + c + "-1,2,-94,-108," + '0,1,14674,-4,0,0,-1;1,2,14802,-4,0,0,-1;2,1,179307,18,0,1,-1;' + "-1,2,-94,-110," + bmak["mact"] + "-1,2,-94,-117," + '' + "-1,2,-94,-111," + bmak["doact"] + "-1,2,-94,-109," + bmak["dmact"] + "-1,2,-94,-114," + bmak["pact"] + "-1,2,-94,-103," + bmak["vcact"] + "-1,2,-94,-112," + b + "-1,2,-94,-115," + w + "-1,2,-94,-106," + d, bmak["sensor_data"] = bmak["sensor_data"] + "-1,2,-94,-119," + bmak["mr"] + "-1,2,-94,-122," + S + "-1,2,-94,-123," + A + "-1,2,-94,-124," + B + "-1,2,-94,-126," + x + "-1,2,-94,-127," + bmak["nav_perm"];
      var P = 24 ^ bmak["ab"](bmak["sensor_data"]);
      debugger;
      bmak["sensor_data"] = bmak["sensor_data"] + "-1,2,-94,-70," + bmak["fpcf"]["fpValstr"] + "-1,2,-94,-80," + y + "-1,2,-94,-116," + bmak["o9"] + "-1,2,-94,-118," + P + "-1,2,-94,-129," + E + "-1,2,-94,-121,";
    } catch (t) {
      console.log(t)
    }

    try {
      var F = bmak["od"](bmak["cs"], bmak["api_public_key"])["slice"](0, 16),
          D = Math["floor"](bmak["get_cf_date"]() / 36e5),
          N = bmak["get_cf_date"](),
          R = F + bmak["od"](D, F) + bmak["sensor_data"];
      debugger;
      bmak["sensor_data"] = R + ";" + (bmak["get_cf_date"]() - t) + ";" + bmak["tst"] + ";" + (bmak["get_cf_date"]() - N);
    } catch (t) {}

    // bmak["sd_debug"]("</bpd>");
  },
}
try {
    bmak["start_ts"] = Date["now"](), bmak["kact"] = "", bmak["ke_cnt"] = 0, bmak["ke_vel"] = 0, bmak["mact"] = "", bmak["mme_cnt"] = 0, bmak["mduce_cnt"] = 0, bmak["me_vel"] = 0, bmak["pact"] = "", bmak["pme_cnt"] = 0, bmak["pduce_cnt"] = 0, bmak["pe_vel"] = 0, bmak["tact"] = "", bmak["tme_cnt"] = 0, bmak["tduce_cnt"] = 0, bmak["te_vel"] = 0, bmak["doact"] = "", bmak["doe_cnt"] = 0, bmak["doe_vel"] = 0, bmak["dmact"] = "", bmak["dme_cnt"] = 0, bmak["dme_vel"] = 0, bmak["vcact"] = "", bmak["vc_cnt"] = 0, bmak["aj_indx"] = 2, bmak["aj_ss"] = 0, bmak["aj_type"] = 1, bmak["aj_indx_doact"] = 0, bmak["aj_indx_dmact"] = 0, bmak["aj_indx_tact"] = 0, bmak["me_cnt"] = 0, bmak["pe_cnt"] = 0, bmak["te_cnt"] = 0, bmak["nav_perm"] = "", bmak["brv"] = 0, bmak["hbCalc"] = !1, bmak["fmh"] = "", bmak["fmz"] = "", bmak["ssh"] = "", bmak["wv"] = "", bmak["wr"] = "", bmak["weh"] = "", bmak["wl"] = 0, bmak["pdet"] = !0;
    bmak["t_tst"] = bmak["get_cf_date"](), bmak["to"](), bmak["tst"] = bmak["get_cf_date"]() - bmak["t_tst"], bmak["disFpCalOnTimeout"];
    bmak.bpd()
  } catch (t) {}

function get_sensor_data(){
  bmak.bpd();
  return bmak.sensor_data;
}
console.log(get_sensor_data())
