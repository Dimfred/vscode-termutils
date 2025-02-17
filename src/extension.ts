import * as vscode from "vscode";

const cout = vscode.window.createOutputChannel("termutils");

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
  cout.appendLine("Not implemented yet");
}

async function currentTerminalMoveUp() {
  cout.appendLine("Not implemented yet");
}

export function deactivate() {}