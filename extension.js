const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    console.log('Congratulations, your extension "format-json" is now active!');

    let disposable = vscode.commands.registerCommand('format-json', function() {
        vscode.window.showInformationMessage('Hello World from format-json!');

        // 获取当前打开的文件的 editor，如果没有则返回
        const editor = vscode.window.activeTextEditor
        if (!editor) return;

        // 取到选择的文本
        const textArray = []
        const Ranges = editor.selections
        Ranges.forEach((range) => {
            const text = editor.document.getText(range)
            textArray.push(text)
        })

        const spaceCount = vscode.workspace.getConfiguration().get('format-json.configuration.space_count');

        // 将选中的文本 json 格式化
        let result = "\n" + JSON.stringify(JSON.parse(textArray.toString()), null, spaceCount) + "\n"

        // 将选中的文本替换为格式化后的文本
        editor.edit((editBuilder) => {
            Ranges.forEach((position) => {
                editBuilder.replace(position, result);
            })
        });
    });

    context.subscriptions.push(disposable);
}


function deactivate() {}

module.exports = {
    activate,
    deactivate
}