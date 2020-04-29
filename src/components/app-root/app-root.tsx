import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "../../global/app.css",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header class="bg-red-200 p-8">
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
