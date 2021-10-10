

export class Goal {
  public showDescription: boolean;
  constructor(public id: number, public myname: string, public name: string, public description: string, public author: string, public completeDate: Date) {
    this.showDescription = false;
  }
}