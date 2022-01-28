import { renderToStringAsync } from "solid-js/web";
import { StartServer, createHandler, serverModules } from "solid-start/components";

function renderPage() {
  return async ({ request, manifest, headers, context = {} }) => {
    let markup = await renderToStringAsync(() => (
      <StartServer context={context} url={request.url} manifest={manifest} />
    ));

    headers.set("Content-Type", "text/html");

    return new Response(markup, {
      status: 200,
      headers
    });
  };
}

export default createHandler(serverModules, renderPage);
