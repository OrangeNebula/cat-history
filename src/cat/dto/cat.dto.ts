export class CatDto {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly images: string[],
  ) {
  }
}