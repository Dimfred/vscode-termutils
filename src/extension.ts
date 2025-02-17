import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "termutils.currentTerminalMoveDown",
    currentTerminalMoveDown,
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "termutils.currentTerminalMoveUp",
    currentTerminalMoveUp,
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "termutils.focusTerminalByName",
    focusTerminalByName,
  );
}

async function focusTerminalByName(names?: string[]) {
  const cout = vscode.window.createOutputChannel("termutils");
  // cout.appendLine("Focus terminal by name");
  // cout.appendLine(`Provided names: ${names}`);

  if (!names || names.length === 0) return;

  const activeTerminal = vscode.window.activeTerminal;
  if (!activeTerminal) {
    cout.appendLine("No active terminal found");
    const newTerminal = vscode.window.createTerminal();
    newTerminal.show();
    return;
  }

  if (names.includes(activeTerminal.name)) {
    cout.appendLine(`Using active terminal: ${activeTerminal.name}`);
    activeTerminal.show();
    return;
  }

  for (let terminal of vscode.window.terminals) {
    if (names.includes(terminal.name)) {
      cout.appendLine(`Found terminal: ${terminal.name}`);
      terminal.show();
      return;
    }
  }
}

async function currentTerminalMoveDown() {
  const cout = vscode.window.createOutputChannel("termutils");
  cout.appendLine("Not implemented yet");
}

async function currentTerminalMoveUp() {
  const cout = vscode.window.createOutputChannel("termutils");
  cout.appendLine("Not implemented yet");
}

export function deactivate() {}