'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as uberCommands from './commandRegistry';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "vscode-uber-clipboard" is now active!');

    // Register the commands (the command param must match the command in package.json bindings contributes.commands array)
    context.subscriptions.push(
        vscode.commands.registerCommand('uberclipboard.copy', uberCommands.copyCommand),
        vscode.commands.registerCommand('uberclipboard.cut', uberCommands.cutCommand),
        vscode.commands.registerCommand('uberclipboard.paste', uberCommands.pasteCommand),
        vscode.commands.registerCommand('uberclipboard.selectPaste', uberCommands.selectPasteCommand),
    );
}

// this method is called when your extension is deactivated
export function deactivate() {
}