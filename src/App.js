import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Alert from '@/components/base/Alert'

let template = 
`
<div>
  <ms-header/>
  <div class="container">
    <div class="row">
      <div class="span2">
        <ms-nav />
      </div>
      <div class="span10">
        <ms-view />
      </div>
    </div>
  </div>
  <ms-footer />
  <ms-alert />
</div>
`

export default {
  name: 'app',
  template,
  data () {
    return {}
  },
  components: {
    Header,
    Footer,
    Nav,
    Alert
  }
}
