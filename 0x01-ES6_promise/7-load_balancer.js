export default function loadBalancer(USDownload, chinaDownload) {
  return Promise.race([USDownload, chinaDownload]);
}
