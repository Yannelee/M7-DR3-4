import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rap:[
      {
        id:1,
        artist:"Tupac",
        category:"rap",
        album:"All Eyez on Me",
        image:"https://is5-ssl.mzstatic.com/image/thumb/Music/4f/49/20/dj.lbjggise.jpg/1000x1000bb.webp"
      },
      {
        id:2,
        artist:"Tupac",
        category:"rap",
        album:"Greatest Hits",
        
        image:"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/ad/46/6f/ad466f7b-848b-c565-47af-6c97bb104055/00602527051840.rgb.jpg/1000x1000bb.webp"
      },
      {
        id:3,
        artist:"Kendrick Lamar",
        category:"rap",
        album:"DAMN.",
        image:"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/05/b1/f6/05b1f61d-944e-2699-7f08-ac195bfed8d2/00602557608717.rgb.jpg/1000x1000bb.webp"
      },
      {
        id:4,
        artist:"Kendrick Lamar",
        category:"rap",
        album:"good kid, m.A.A.d city",
        image:"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/15/c2/d7/15c2d7eb-06f8-464d-fe40-18a2de2ca191/00602537362769.rgb.jpg/1000x1000bb.webp"
      },
      {
        id:5,
        artist:"Eminem",
        category:"rap",
        album:"The Marshall Mathers LP",
        image:"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/a6/5d/28/a65d286d-549b-777c-9bab-092397c8758f/00606949062927.rgb.jpg/1000x1000bb.webp"
      },
    ],
    pop:[
      {
        id:6,
        artist:"Michel Jackson",
        category:"pop",
        album:"Thriller",
        image:"https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/3c/60/903c6069-b321-563c-bbc5-28e26f8fb1bd/074643811224.jpg/1000x1000bb.webp"
      },
      {
        id:7,
        artist:"Michel Jackson",
        category:"pop",
        album:"Bad",
        image:"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/d2/97/4c/d2974cc9-19cc-09a2-a359-7b8fe8cae377/886443546264.jpg/1000x1000bb.webp"
      },
      {
        id:8,
        artist:"Madonna",
        category:"pop",
        album:"Madonna",
        image:"https://is2-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.ykiinwgl.jpg/1000x1000bb.webp"
      },
      {
        id:9,
        artist:"Madonna",
        category:"pop",
        album:"Like a Virgin",
        image:"https://is5-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.wxptosaa.jpg/1000x1000bb.webp"
      },
      {
        id:10,
        artist:"Madonna",
        category:"pop",
        album:"Like a Virgin",
        image:"https://is5-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.wxptosaa.jpg/1000x1000bb.webp"
      },
    ],
    rock:[
      {
        id:11,
        artist:"Foo Fighters",
        category:"rock",
        album:"Greatest Hits",
        image:"https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/66/93/e1/6693e1ab-cfdc-5913-d5b7-f3b44d2a4714/dj.djjzfxdd.jpg/1000x1000bb.webp"
      },
      {
        id:12,
        artist:"Metallica",
        category:"rock",
        album:"Master of Puppets",
        image:"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/1000x1000bb.webp"
      },
      {
        id:13,
        artist:"AC/DC",
        category:"rock",
        album:"Highway to Hell",
        image:"https://is4-ssl.mzstatic.com/image/thumb/Features6/v4/ee/bd/69/eebd6962-9b25-c177-c175-b3b3e641a29d/dj.edqjfvzd.jpg/1000x1000bb.webp"
      },
      {
        id:14,
        artist:"AC/DC",
        category:"rock",
        album:"Back in Black",
        image:"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/1000x1000bb.webp"
      },
      {
        id:15,
        artist:"Deep Purple",
        category:"rock",
        album:"Machine Head",
        image:"https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/8b/1e/fa/8b1efa15-24c4-2190-5d7b-22e2945e281a/603497877393.jpg/1000x1000bb.webp"
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
