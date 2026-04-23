import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
    //beaconEndpoint: import.meta.env.VITE_COLLECTOR_URL,
    realm: import.meta.env.VITE_RUM_REALM,
    rumAccessToken: import.meta.env.VITE_RUM_ACCESS_TOKEN,
    applicationName: 'atomic-crm',
    deploymentEnvironment: 'local-development',
    allowInsecureBeacon: true,
    exporter: {
        otlp: true
    },
    spaMetrics: true,
});