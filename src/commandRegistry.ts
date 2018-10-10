'use strict';

import * as vscode from 'vscode';


export function copyCommand() {
    vscode.window.showInformationMessage('Copying');
}

export function cutCommand() {
    vscode.window.showInformationMessage('Cutting');
}

export function pasteCommand() {
    vscode.window.showInformationMessage('Pasting');
}

export function selectPasteCommand() {
    vscode.window.showInformationMessage('Select Pasting');
}