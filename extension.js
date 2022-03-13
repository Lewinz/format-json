const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    console.log('Congratulations, your extension "format-json" is now active!');

    let disposable = vscode.commands.registerCommand('format-json', function() {
        vscode.TextEdit.replace(vscode.Range, "111")
        vscode.window.showInformationMessage('Hello World from format-json!');
    });

    context.subscriptions.push(disposable);
}


function deactivate() {}

module.exports = {
    activate,
    deactivate
}