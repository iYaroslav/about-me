import MatomoTracker from 'matomo-tracker'

const matomo = new MatomoTracker(1, 'https://leerybituz.matomo.cloud/matomo.php')

matomo.on('error', function(err) {
  console.log('error tracking request: ', err)
})

export default matomo
