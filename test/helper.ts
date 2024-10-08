import * as vscode from 'vscode';
import { writeFileSync } from 'fs';
import * as path from 'path';

export const projectRootDir = path.resolve(path.join(__dirname, '..', '..'));

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function closeAllEditors() {
  return await vscode.commands.executeCommand(
    'workbench.action.closeAllEditors'
  );
}

export async function openFile(fileName: string): Promise<vscode.TextEditor> {
  const document = await vscode.workspace.openTextDocument(fileName);
  return await vscode.window.showTextDocument(document);
}

export function createTempFile(fileName: string, content: string): string {
  const filePath = path.join(projectRootDir, 'test', 'tmp', fileName);
  writeFileSync(filePath, content);

  return filePath;
}
