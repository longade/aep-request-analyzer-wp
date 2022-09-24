import ga4 from 'react-ga4';

const TRACKING_ID = 'G-M1KZ58M02R';
const isProduction = process.env.NODE_ENV === 'production';

export const init = () => ga4.initialize(TRACKING_ID, {
  testMode: !isProduction
})

export const sendEvent = (name) => ga4.event('screen_view', {
  app_name: "AEP-request-analyzer-wp",
  screen_name: name,
})

export const sendPageview = (path, name) => ga4.send({
  hitType: 'pageview',
  page: path,
  ...(name && { name })
})