import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "../../global/app.css",
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class="app-home bg-gray-600 text-gray-200">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build
          entire apps all with web components using Stencil! Check out our docs
          on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
