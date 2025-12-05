interface Command {
  action: "add" | "remove" | "update";
  elementId: string;
  data: {
    before: any;
    after: any;
  };
  model?: any;
}

export class HistoryManager {}
