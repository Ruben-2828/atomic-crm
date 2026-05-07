import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
    realm: import.meta.env.VITE_RUM_REALM,
    rumAccessToken: import.meta.env.VITE_RUM_ACCESS_TOKEN,
    applicationName: 'atomic-crm',
    deploymentEnvironment: 'aws-development',
    allowInsecureBeacon: true,
    //exporter: {
    //    otlp: true
    //},
    spaMetrics: true,
});