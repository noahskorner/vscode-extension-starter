import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.showWebview", () => {
      const panel = vscode.window.createWebviewPanel(
        "webview",
        "Webview Example",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      panel.webview.html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React Webview</title>
      <link href="${panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "dist/main.css")
      )}" rel="stylesheet">
    </head>
    <body>
      <div id="root"></div>
      <script src="${panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "dist/webview.js")
      )}"></script>
    </body>
    </html>
  `;
    })
  );
}

export function deactivate() {}
