// declare component before the Vue instance
Vue.component('coupon', {
  props:[],
  data() {
    return {
    }
  }, 
  template:`
    <input type="text" placeholder="Enter your coupon code" @keyup.enter="onCouponApplied"/>
  `,
  methods: {
    onCouponApplied() {
      this.$emit('applied')
    }
  }
})



new Vue({
  el:'#root',
  data: {
    couponApplied: false
  }, 
  methods: {
    onCouponApplied() {
      this.couponApplied = true
    }
  }
  // data: {
    
  // }
})