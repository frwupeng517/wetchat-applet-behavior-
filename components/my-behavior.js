module.exports = Behavior({
  behaviors: [],
  properties: {
    carModel: String,
    price: Number,
    sale: Boolean
  },
  data: {
    myBehaviorData1: "eyes on me"
  },
  attached: function() {

  },
  methods: {
    myBehaviorMethod: function() {
      console.log("I don't have an idea to buy or not")
    }
  }
})