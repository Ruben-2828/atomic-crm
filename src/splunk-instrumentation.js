import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
    beaconEndpoint: import.meta.env.VITE_COLLECTOR_URL,
    //realm: import.meta.env.VITE_RUM_REALM,
    rumAccessToken: "",
    applicationName: 'atomic-crm',
    deploymentEnvironment: 'local-development',
});